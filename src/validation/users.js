import Joi from "joi";

import { EMAIL } from "../constants/users.js";

export const userRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(EMAIL).required(),
  password: Joi.string().min(6).max(16).required(),
});

export const userLoginSchema = Joi.object({
  email: Joi.string().pattern(EMAIL).required(),
  password: Joi.string().min(6).max(16).required(),
});
