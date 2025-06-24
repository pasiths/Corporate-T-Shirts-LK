import { Router } from "express";
import {
  authMiddleware,
  requiredAdminMiddleware,
} from "../middlewares/authMiddleware";
import { errorHandler } from "../errors/error-handler";
import productRouter from "./productRouter";

const adminRouter: Router = Router();

adminRouter.use(errorHandler(authMiddleware));
adminRouter.use(
  "/products",
  errorHandler(requiredAdminMiddleware),
  productRouter
);

export default adminRouter;
