import Joi from "joi";

import { EMAIL } from "../constants/users.js";

export const userRegisterSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().pattern(EMAIL).required(),
  password: Joi.string().min(6).max(30).required(),
});

export const userLoginSchema = Joi.object({
  email: Joi.string().pattern(EMAIL).required(),
  password: Joi.string().min(6).max(30).required(),
});
