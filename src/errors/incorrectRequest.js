import BasicError from "./basicError.js";

class IncorrectRequest extends BasicError {
  constructor(message = "Data provided is incorrect!") {
    super(message, 400);
  }
}

export default IncorrectRequest;