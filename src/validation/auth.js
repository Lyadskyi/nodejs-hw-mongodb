import Joi from "joi";

// import { EMAIL } from "../constants/users.js";

export const sendResetEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});
