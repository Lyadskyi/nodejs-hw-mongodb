import { Schema, model } from "mongoose";

import { contactTypeList } from "../../constants/contacts.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
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
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const ContactCollection = model("contact", contactSchema);

export default ContactCollection;
