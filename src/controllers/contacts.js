import createHttpError from "http-errors";

import * as contactServices from "../services/contacts.js";

export const getAllContactsController = async (req, res, next) => {
  try {
    const data = await contactServices.getAllContacts();

    res.json({
      status: 200,
      message: "Successfully found contacts!",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getContactByIdController = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const data = await contactServices.getContactById(contactId);

    if (!data) {
      throw createHttpError(404, "Contact not found");
    }

    res.json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data,
    });
  } catch (error) {
    next(error);
  }
};
