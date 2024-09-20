import { Router } from "express";

import * as authControllers from "../controllers/auth.js";

import validateBody from "../utils/validateBody.js";
import ctrlWrapper from "../utils/ctrlWrapper.js";

import { userRegisterSchema } from "../validation/users.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateBody(userRegisterSchema),
  ctrlWrapper(authControllers.registerController),
);

export default authRouter;
