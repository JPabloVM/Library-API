import express from "express";
import books from "./book.routes.js";
import authors from "./author.routes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
  app.use(express.json(), books, authors);
};

export default routes;