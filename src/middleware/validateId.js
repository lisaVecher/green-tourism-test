import mongoose from "mongoose";
import { HTTP_STATUS } from "../constants/httpCodes.js";
import { HttpError } from "../utils/HttpError.js";

export const validateId = (paramName = "id") => {
  return (req, res, next) => {
    const id = req.params[paramName];

    if (!mongoose.Types.ObjectId.isValid(id)) {
      next(HttpError(HTTP_STATUS.BAD_REQUEST, `Invalid ${paramName}`));
      return;
    }

    next();
  };
};
