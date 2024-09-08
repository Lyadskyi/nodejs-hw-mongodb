import express from "express";
import cors from "cors";
import pino from "pino-http";

import { env } from "./utils/env.js";

import contactsRouter from "./routers/contacts.js";

export const setupServer = () => {
  // 1.Функція створює веб-сервер
  const app = express();

  const logger = pino({
    transport: {
      target: "pino-pretty",
    },
  });

  // 2.Функція прописує middlewares
  app.use(logger);
  app.use(cors());
  app.use(express.json());

  // Routes
  app.use("/contacts", contactsRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url} not found`,
    });
  });

  app.use((error, req, res, next) => {
    const { status = 500, message } = error;
    res.status(status).json({
      message,
    });
  });

  const port = Number(env("PORT", 3000));

  // 3.Функція запускає веб-сервер
  app.listen(port, () => console.log("Server is running on port 4000"));
};
