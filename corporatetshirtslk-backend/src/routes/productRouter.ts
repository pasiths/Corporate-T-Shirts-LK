import { Router } from "express";
import { errorHandler } from "../errors/error-handler";
import {
  authMiddleware,
  requiredAdminOrManagerMiddleware,
} from "../middlewares/authMiddleware";
import { createProduct } from "../controllers/products";

const productRouter: Router = Router();

productRouter.use(errorHandler(authMiddleware));
productRouter.post(
  "/",
  errorHandler(requiredAdminOrManagerMiddleware),
  errorHandler(createProduct)
);

export default productRouter;
