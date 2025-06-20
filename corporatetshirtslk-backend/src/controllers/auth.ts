import { Request, Response } from "express";
import { prisma } from "..";
import { ErrorCode } from "../exceptions/root";
import { BadRequestException } from "../exceptions/bad-request";
import { hashPassword } from "../utils/hashPassword";
import generateToken from "../utils/generateToken";

export const signUp = async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    username,
    email,
    address,
    phoneNumber,
    profilePic,
    password,
  } = req.body;

  const where: {
    OR: Array<{ username?: string; email?: string; phoneNumber?: string }>;
  } = {
    OR: [{ username: username }, { email: email }],
  };

  if (phoneNumber) {
    where.OR.push({ phoneNumber: phoneNumber });
  }
  let user = await prisma.user.findFirst({
    where,
  });

  if (user) {
    throw new BadRequestException(
      "User already exists",
      ErrorCode.USER_ALREADY_EXISTS
    );
  }

  const hashedPassword = await hashPassword(password);

  user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      username,
      email,
      address,
      phoneNumber,
      profilePic,
      password: hashedPassword,
    },
  });

  const { password: userPassword, ...withoutPassword } = user;

  generateToken({ id: user.id, role: user.role }, res);

  console.log(
    `LOG_BOOK ${user.username} SIGNED UP at ${new Date().toLocaleString()}`
  );
  res.json({ user: withoutPassword });
};
