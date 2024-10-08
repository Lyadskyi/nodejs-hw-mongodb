import Joi from "joi";

import { EMAIL } from "../constants/users.js";

export const sendResetEmailSchema = Joi.object({
  email: Joi.string().pattern(EMAIL).required(),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().required(),
  token: Joi.string().required(),
});
