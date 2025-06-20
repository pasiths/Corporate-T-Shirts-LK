import jwt from "jsonwebtoken";
import { Response } from "express";
import { UserPayload } from "../types";
import { JWT_SECRET, NODE_ENV } from "../secrets";

const generateToken = (data: UserPayload, res: Response): string => {
  const payload = {
    id: data.id,
    role: data.role,
  };

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not defined");
  }

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: NODE_ENV !== "development",
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });

  return token;
};

export default generateToken;
