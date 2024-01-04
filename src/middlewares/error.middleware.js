import mongoose from "mongoose";
import BasicError from "../errors/basicError.js";
import IncorrectRequest from "../errors/incorrectRequest.js";
import ValidationError from "../errors/validationError.js";

// eslint-disable-next-line no-unused-vars
function manipulateErrors(error, req, res, next) {
  console.error(error);
  if (error instanceof mongoose.Error.CastError) {
    new IncorrectRequest().sendResponse(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendResponse(res);
  } else if (error instanceof BasicError) {
    error.sendResponse(res);
  } else {
    new BasicError().sendResponse(res);
  }
}

export default manipulateErrors;