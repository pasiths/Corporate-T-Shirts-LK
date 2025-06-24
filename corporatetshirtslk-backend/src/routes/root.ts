import { Router } from "express";
import authRouter from "./authRouter";
import productRouter from "./productRouter";
import adminRouter from "./adminRouter";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/products", productRouter);
rootRouter.use("/admin", adminRouter);
rootRouter.get("/test", (req, res) => {
  res.status(200).json({
    message: "Hello from API",
  });
});

export default rootRouter;
