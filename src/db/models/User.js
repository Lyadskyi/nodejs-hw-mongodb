import { Schema, model } from "mongoose";

import { EMAIL } from "../../constants/users.js";

import { handleSaveError, setUpdateOptions } from "./hooks.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: EMAIL,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", setUpdateOptions);

userSchema.post("findOneAndUpdate", handleSaveError);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

const UserCollection = model("user", userSchema);

export default UserCollection;
