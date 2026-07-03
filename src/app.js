import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import pino from "pino-http";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";

import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

export const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(pino());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/stories", storyRoutes);

app.use(notFoundHandler);
app.use(errorHandler);
