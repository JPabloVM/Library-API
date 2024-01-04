import express from "express";
import AuthorController from "../controllers/author.controller.js";
import paginate from "../middlewares/paginate.middleware.js";

const routes = express.Router();

routes.get("/authors", AuthorController.listAuthors, paginate);
routes.get("/authors/query", AuthorController.searchAuthorsByFilter, paginate);
routes.get("/author/:id", AuthorController.searchAuthorById);
routes.post("/author", AuthorController.createAuthor);
routes.put("/author/:id", AuthorController.editAuthor);
routes.delete("/author/:id", AuthorController.deleteAuthor);

export default routes;