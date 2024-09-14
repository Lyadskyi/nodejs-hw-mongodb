import Joi from "joi";

import { contactTypeList } from "../constants/contacts.js";

export const contactAddSchema = Joi.object({
  name: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  email: Joi.string(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...contactTypeList)
    .required(),
});

export const contactPatchSchema = Joi.object({
  name: Joi.string(),
  phoneNumber: Joi.string(),
  email: Joi.string(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...contactTypeList),
});
