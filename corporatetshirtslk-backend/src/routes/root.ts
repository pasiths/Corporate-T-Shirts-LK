import { Router } from "express";
import authRouter from "./authRouter";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRouter);
rootRouter.get("/test", (req, res) => {
  res.status(200).json({
    message: "Hello from API",
  });
});

export default rootRouter;
