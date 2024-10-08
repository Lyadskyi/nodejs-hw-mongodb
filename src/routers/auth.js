import { Router } from "express";

import * as authControllers from "../controllers/auth.js";

import validateBody from "../utils/validateBody.js";
import ctrlWrapper from "../utils/ctrlWrapper.js";

import {
  sendResetEmailSchema,
  resetPasswordSchema,
} from "../validation/auth.js";
import { userRegisterSchema, userLoginSchema } from "../validation/users.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateBody(userRegisterSchema),
  ctrlWrapper(authControllers.registerController),
);

authRouter.post(
  "/login",
  validateBody(userLoginSchema),
  ctrlWrapper(authControllers.loginController),
);

authRouter.post("/refresh", ctrlWrapper(authControllers.refreshController));

authRouter.post("/logout", ctrlWrapper(authControllers.logoutController));

authRouter.post(
  "/send-reset-email",
  validateBody(sendResetEmailSchema),
  ctrlWrapper(authControllers.sendResetEmailController),
);

authRouter.post(
  "/reset-pwd",
  validateBody(resetPasswordSchema),
  ctrlWrapper(authControllers.resetPasswordController),
);

export default authRouter;
