import { Request, Response } from "express";
import { prisma } from "..";
import { ErrorCode } from "../exceptions/root";
import { BadRequestException } from "../exceptions/bad-request";
import { comparePassword, hashPassword } from "../utils/hashPassword";
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

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw new BadRequestException(
      "Invalid email or password",
      ErrorCode.INVALID_CREDENTIALS
    );
  }

  if (!user.isActive) {
    throw new BadRequestException(
      "User account is not active",
      ErrorCode.INVALID_CREDENTIALS
    );
  }

  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    throw new BadRequestException(
      "Invalid email or password",
      ErrorCode.INVALID_CREDENTIALS
    );
  }
  generateToken({ id: user.id, role: user.role }, res);
  const { password: userPassword, ...withoutPassword } = user;
  console.log(
    `LOG_BOOK ${user.username} SIGNED IN at ${new Date().toLocaleString()}`
  );
  res.status(200).json({ user: withoutPassword });
};
