import { Schema, model } from "mongoose";

import { contactTypeList } from "../../constants/contacts.js";

import { handleSaveError, setUpdateOptions } from "./hooks.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be exist"],
    },
    phoneNumber: {
      type: String,
      required: [true, "PhoneNumber must be exist"],
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      default: "personal",
      enum: contactTypeList,
      required: [true, "ContactType must be exist"],
    },
  },
  { versionKey: false, timestamps: true },
);

contactSchema.post("save", handleSaveError);

contactSchema.pre("findOneAndUpdate", setUpdateOptions);

contactSchema.post("findOneAndUpdate", handleSaveError);

const ContactCollection = model("contact", contactSchema);

export const sortFields = [
  "name",
  "phoneNumber",
  "email",
  "isFavourite",
  "contactType",
  "createdAt",
  "updatedAt",
];

export default ContactCollection;
