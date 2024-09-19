import express from "express";
import cors from "cors";

import { env } from "./utils/env.js";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
// import logger from "./middlewares/logger.js";

import authRouter from "./routers/auth.js";
import contactsRouter from "./routers/contacts.js";

export const setupServer = () => {
  // 1.Функція створює веб-сервер
  const app = express();

  // 2.Функція прописує middlewares
  // app.use(logger);
  app.use(cors());
  app.use(express.json());

  // Routes
  app.use("/auth", authRouter);
  app.use("/contacts", contactsRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  const port = Number(env("PORT", 3000));

  // 3.Функція запускає веб-сервер
  app.listen(port, () => console.log("Server is running on port 4000"));
};
