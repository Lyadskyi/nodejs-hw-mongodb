import { Schema, model } from "mongoose";

import { CONTACT_TYPE_LIST } from "../../constants/contacts.js";

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
      enum: CONTACT_TYPE_LIST,
      default: "personal",
      required: [true, "ContactType must be exist"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    photo: { type: String }, // https://res.cloudinary.com/dpion3dps/image/upload/v1728579627/psidqyxeegrunxtevrkc.jpg
  },
  { versionKey: false, timestamps: true },
);

contactSchema.post("save", handleSaveError);

contactSchema.pre("findOneAndUpdate", setUpdateOptions);

contactSchema.post("findOneAndUpdate", handleSaveError);

const ContactCollection = model("contact", contactSchema);

export default ContactCollection;
