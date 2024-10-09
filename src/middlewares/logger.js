import pino from "pino-http";

const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

export default logger;

// src/controllers/email.js
import { InternalServerError } from "http-errors";
import emailService from "../services/emailService.js";

export const sendEmail = async (req, res, next) => {
  try {
    const { email, subject, message } = req.body;

    const result = await emailService.sendEmail({ email, subject, message });

    if (!result) {
      throw new InternalServerError(
        "Failed to send the email, please try again later.",
      );
    }

    res.status(200).json({
      status: "success",
      message: "Email sent successfully!",
    });
  } catch (error) {
    next(error); // Передаємо помилку далі
  }
};
