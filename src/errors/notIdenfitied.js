import BasicError from "./basicError.js";

class NotIdentified extends BasicError {
  constructor(message = "Page not identified!") {
    super(message, 404);
  }
}

export default NotIdentified;