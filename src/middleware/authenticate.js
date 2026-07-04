import jwt from "jsonwebtoken";
import { HTTP_STATUS } from "../constants/httpCodes.js";
import { HttpError } from "../utils/HttpError.js";
import { User } from "../models/users.js";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const [bearer, token] = authHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
      next(HttpError(HTTP_STATUS.UNAUTHORIZED, "Not authorized"));
      return;
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(payload.id);

    if (!user) {
      next(HttpError(HTTP_STATUS.UNAUTHORIZED, "User not found"));
      return;
    }

    req.user = user;

    next();
  } catch {
    next(HttpError(HTTP_STATUS.UNAUTHORIZED, "Not authorized"));
  }
};
