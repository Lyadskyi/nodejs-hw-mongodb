import { SORT_ORDER } from "../constants/index.js";

import ContactCollection from "../db/models/Contact.js";

import calculatePaginationData from "../utils/calculatePaginationData.js";

export const getContacts = async ({
  page,
  perPage,
  sortBy = "_contactId",
  sortOrder = SORT_ORDER[0],
  userId,
}) => {
  const skip = (page - 1) * perPage;

  const data = await ContactCollection.find({ userId })
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });

  const count = await ContactCollection.find().countDocuments();

  const paginationData = calculatePaginationData({ count, page, perPage });

  return {
    data,
    page,
    perPage,
    totalItems: count,
    ...paginationData,
  };
};

export const getContact = (filter) => ContactCollection.findOne(filter);

export const createContact = (payload) => ContactCollection.create(payload);

export const updateContact = async (filter, data, options = {}) => {
  const rawResult = await ContactCollection.findOneAndUpdate(filter, data, {
    includeResultMetadata: true,
    ...options,
  });

  if (!rawResult || !rawResult.value) return null;

  return {
    data: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteContact = (filter) =>
  ContactCollection.findOneAndDelete(filter);
