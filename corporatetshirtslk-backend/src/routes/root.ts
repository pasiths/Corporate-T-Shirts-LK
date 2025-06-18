import { Router } from "express";

const rootRouter: Router = Router();

rootRouter.get("/test", (req, res) => {
  res.status(200).json({
    message: "Hello from API",
  });
});

export default rootRouter;
