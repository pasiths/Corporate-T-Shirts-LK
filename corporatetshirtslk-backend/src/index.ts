import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import { IP, PORT } from "./secrets";
import { errorMiddleware } from "./errors/errors";
import rootRouter from "./routes/root";

const app: Express = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("/api", rootRouter);

export const prisma = new PrismaClient();

app.use(errorMiddleware);

app.listen(PORT, IP, () => {
  console.log(`Server is running on http://${IP}:${PORT}`);
});
