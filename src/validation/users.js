import Joi from "joi";

import { email } from "../constants/users.js";

export const userRegisterSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().pattern(email).required(),
  password: Joi.string().min(6).max(16).required(),
});
