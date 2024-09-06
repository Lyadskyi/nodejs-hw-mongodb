import { Router } from "express";

import * as contactServices from "../services/contacts.js";

const contactsRouter = Router();

contactsRouter.get("/", async (req, res) => {
  const data = await contactServices.getAllContacts();

  res.json({
    status: 200,
    message: "Successfully found contacts!",
    data,
  });
});

contactsRouter.get("/:contactId", async (req, res) => {
  const { contactId } = req.params;
  const data = await contactServices.getContactById(contactId);

  if (!data) {
    return res.status(404).json({
      message: "Contact not found",
    });
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data,
  });
});

export default contactsRouter;
