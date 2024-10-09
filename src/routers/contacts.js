import { Router } from "express";

import {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  patchContactController,
  deleteContactController,
} from "../controllers/contacts.js";

import authenticate from "../middlewares/authenticate.js";
import isValidId from "../middlewares/isValidId.js";
import { upload } from "../middlewares/multer.js";

import ctrlWrapper from "../utils/ctrlWrapper.js";
import validateBody from "../utils/validateBody.js";

import {
  contactAddSchema,
  contactPatchSchema,
} from "../validation/contacts.js";

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", ctrlWrapper(getAllContactsController));

contactsRouter.get(
  "/:contactId",
  isValidId,
  ctrlWrapper(getContactByIdController),
);

contactsRouter.post(
  "/",
  upload.single("photo"),
  validateBody(contactAddSchema),
  ctrlWrapper(addContactController),
);

contactsRouter.patch(
  "/:contactId",
  upload.single("photo"),
  isValidId,
  validateBody(contactPatchSchema),
  ctrlWrapper(patchContactController),
);

contactsRouter.delete(
  "/:contactId",
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default contactsRouter;
