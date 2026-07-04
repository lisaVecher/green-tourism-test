import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import {
  authRouter,
  userRouter,
  storiesRouter,
  categoriesRouter,
} from "./routes/index.js";

import { logger } from "./middleware/logger.js";

import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";

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

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/stories", storiesRouter);
app.use("/api/categories", categoriesRouter);

app.use(notFoundHandler);
app.use(errorHandler);
