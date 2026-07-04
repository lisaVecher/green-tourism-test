import { HTTP_STATUS } from "../constants/httpCodes.js";
import { HttpError } from "../utils/HttpError.js";

export const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      next(HttpError(HTTP_STATUS.BAD_REQUEST, error.message));
      return;
    }

    next();
  };
};
