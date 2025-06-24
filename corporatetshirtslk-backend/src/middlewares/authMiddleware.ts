import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import { JWT_SECRET } from "../secrets";
import { InternalException } from "../exceptions/internal-exception";

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
          console.log("error name :", err.name);
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
