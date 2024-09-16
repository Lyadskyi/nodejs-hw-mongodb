import Joi from "joi";

import { contactTypeList } from "../constants/contacts.js";

export const contactAddSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(3)
    .max(20)
    .messages({ "any.required": "name must be exist" }),
  phoneNumber: Joi.string()
    .required()
    .min(3)
    .max(20)
    .messages({ "any.required": "phoneNumber must be exist" }),
  email: Joi.string().min(3).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...contactTypeList)
    .required()
    .min(3)
    .max(20)
    .messages({ "any.required": "contactType must be exist" }),
});

export const contactPatchSchema = Joi.object({
  name: Joi.string(),
  phoneNumber: Joi.string(),
  email: Joi.string(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...contactTypeList),
});
