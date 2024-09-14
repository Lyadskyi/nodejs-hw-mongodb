import { isValidObjectId } from "mongoose";
import createHttpError from "http-errors";

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return next(createHttpError(404, `${contactId} not valid id`));
  }
  next();
};

export default isValidId;
