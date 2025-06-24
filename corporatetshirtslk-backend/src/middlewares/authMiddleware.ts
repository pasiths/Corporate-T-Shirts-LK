import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { UserRole } from "@prisma/client";

import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import { JWT_SECRET } from "../secrets";
import { InternalException } from "../exceptions/internal-exception";
import { prisma } from "..";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new UnauthorizedException(
      "Unauthorized: SIGN IN Again!",
      ErrorCode.UNAUTHORIZED
    );
  }

  try {
    const decodedToken = await new Promise((resolve, reject) => {
      jwt.verify(token, JWT_SECRET, {}, (err, decoded) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            return reject(
              new UnauthorizedException(
                "Unauthorized: Token has expired.",
                ErrorCode.UNAUTHORIZED
              )
            );
          }
          if (err.name === "JsonWebTokenError") {
            return reject(
              new UnauthorizedException(
                "Unauthorized: Invalid token.",
                ErrorCode.UNAUTHORIZED
              )
            );
          }
          return reject(err);
        }
        resolve(decoded);
      });
    });

    if (!decodedToken) {
      throw new UnauthorizedException(
        "Unauthorized: Token verification failed.",
        ErrorCode.UNAUTHORIZED
      );
    }

    const { id } = decodedToken as { id: number };

    req.user = {
      id: id,
    };
    next();
  } catch (error) {
    if (error instanceof UnauthorizedException) {
      throw error;
    }
    throw new InternalException(
      "Internal server error during authentication.",
      null,
      ErrorCode.INTERNAL_EXCEPTION
    );
  }
};

export const requireRoleMiddleware = (...allowedRoles: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.id) {
      throw new UnauthorizedException(
        "Unauthorized: User ID is missing.",
        ErrorCode.UNAUTHORIZED
      );
    }

    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        select: { role: true },
      });

      if (!user || !allowedRoles.includes(user.role)) {
        throw new UnauthorizedException(
          `Unauthorized: ${allowedRoles.join(" or ")} access required.`,
          ErrorCode.UNAUTHORIZED
        );
      }

      next();
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new InternalException(
        "Internal server error while checking user role access.",
        null,
        ErrorCode.INTERNAL_EXCEPTION
      );
    }
  };
};

export const requiredAdminMiddleware = requireRoleMiddleware(UserRole.ADMIN);
export const requiredManagerMiddleware = requireRoleMiddleware(
  UserRole.MANAGER
);
export const requiredUserMiddleware = requireRoleMiddleware(UserRole.USER);
export const requiredAdminOrManagerMiddleware = requireRoleMiddleware(
  UserRole.ADMIN,
  UserRole.MANAGER
);
