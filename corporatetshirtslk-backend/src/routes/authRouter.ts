import { Router } from "express";
import { errorHandler } from "../errors/error-handler";
import { signIn, signUp } from "../controllers/auth";

const authRouter: Router = Router();

authRouter.post("/signup", errorHandler(signUp));
authRouter.post("/signin", errorHandler(signIn));

export default authRouter;
