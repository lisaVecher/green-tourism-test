import { HTTP_STATUS } from "../constants/httpCodes.js";

export const errorHandler = (error, req, res, next) => {
  const status = error.status || HTTP_STATUS.INTERNAL_SERVER_ERROR;

  res.status(status).json({
    message: error.message || "Internal server error",
  });
};
