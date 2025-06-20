import { Router } from "express";
import { errorHandler } from "../errors/error-handler";
import { signUp } from "../controllers/auth";

const authRouter: Router = Router();

authRouter.post("/signup", errorHandler(signUp));

export default authRouter;
