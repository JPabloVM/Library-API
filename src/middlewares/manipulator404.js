import NotIdentified from "../errors/notIdenfitied.js";

function Manipulator404(req, res, next) {
  const error404 = new NotIdentified();
  next(error404);
}

export default Manipulator404;