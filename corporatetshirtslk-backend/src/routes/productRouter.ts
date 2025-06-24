import { Router } from "express";
import { errorHandler } from "../errors/error-handler";
import {
  authMiddleware,
  requiredAdminOrManagerMiddleware,
} from "../middlewares/authMiddleware";
import {
  createProduct,
  deleteProduct,
  getByProductId,
  getProducts,
  updateProduct,
} from "../controllers/products";

const productRouter: Router = Router();

productRouter.get("/", errorHandler(getProducts));
productRouter.get("/:productId", errorHandler(getByProductId));
productRouter.use(errorHandler(authMiddleware));
productRouter.post(
  "/",
  errorHandler(requiredAdminOrManagerMiddleware),
  errorHandler(createProduct)
);
productRouter.put(
  "/:productId",
  errorHandler(requiredAdminOrManagerMiddleware),
  errorHandler(updateProduct)
);
productRouter.delete(
  "/:productId",
  errorHandler(requiredAdminOrManagerMiddleware),
  errorHandler(deleteProduct)
);
export default productRouter;
