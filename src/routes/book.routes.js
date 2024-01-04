import express from "express";
import BookController from "../controllers/book.controller.js";
import paginate from "../middlewares/paginate.middleware.js";

const routes = express.Router();

routes.get("/books", BookController.booksList, paginate);
routes.get("/books/query", BookController.searchBooksByFilter, paginate);
routes.get("/book/:id", BookController.searchBookById);
routes.post("/book", BookController.bookRegistration);
routes.put("/book/:id", BookController.editBook);
routes.delete("/book/:id", BookController.deleteBook);

export default routes;