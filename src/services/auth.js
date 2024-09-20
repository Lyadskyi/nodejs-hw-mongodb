import UserCollection from "../db/models/User.js";

export const register = async (payload) => {
  const user = await UserCollection.create(payload);

  return user;
};
