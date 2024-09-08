import { Router } from "express";

import {
  getAllContactsController,
  getContactByIdController,
  addContactController,
} from "../controllers/contacts.js";

import ctrlWrapper from "../utils/ctrlWrapper.js";

const contactsRouter = Router();

contactsRouter.get("/", ctrlWrapper(getAllContactsController));

contactsRouter.get("/:contactId", ctrlWrapper(getContactByIdController));

contactsRouter.post("/", ctrlWrapper(addContactController));

export default contactsRouter;
