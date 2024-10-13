import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { UPLOAD_DIR } from "./constants/index.js";

import { env } from "./utils/env.js";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import swaggerDocs from "./middlewares/swaggerDocs.js";
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
  app.use(cookieParser());

  // Routes
  app.use("/auth", authRouter);
  app.use("/contacts", contactsRouter);
  app.use("/uploads", express.static(UPLOAD_DIR));
  app.use("/api-docs", swaggerDocs());

  app.use("*", notFoundHandler);

  app.use(errorHandler);

  const port = Number(env("PORT", 3000));

  // 3.Функція запускає веб-сервер
  app.listen(port, () => console.log("Server is running on port 3001"));
};
