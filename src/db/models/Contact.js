import { Schema, model } from "mongoose";

import { contactTypeList } from "../../constants/contacts.js";

import { handleSaveError, setUpdateOptions } from "./hooks.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name must be exist"],
    },
    phoneNumber: {
      type: String,
      required: [true, "phoneNumber must be exist"],
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
      required: [true, "contactType must be exist"],
    },
  },
  { versionKey: false, timestamps: true },
);

contactSchema.post("save", handleSaveError);

contactSchema.pre("findOneAndUpdate", setUpdateOptions);

contactSchema.post("findOneAndUpdate", handleSaveError);

const ContactCollection = model("contact", contactSchema);

export default ContactCollection;
