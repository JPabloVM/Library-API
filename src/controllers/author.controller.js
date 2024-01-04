import NotIdentified from "../errors/notIdenfitied.js";
import { author } from "../models/index.js";

class AuthorController {

  static async createAuthor(req, res, next) {

    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: "Author created with sucess!", author: newAuthor });
    } catch (error) {
      next(error);
    }
  }

  static async listAuthors(req, res, next) {
    try {
      const authors = author.find();
      req.result = authors;
      next();
    } catch (error) {
      next(error);
    }
  }

  static async searchAuthorById(req, res, next) {
    try {
      const authorID = req.params.id;
      const identifiedAuthor = await author.findById(authorID);
      if (identifiedAuthor !== null) {
        res.status(200).json(identifiedAuthor);
      } else {
        next(new NotIdentified("Author not identified!"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async searchAuthorsByFilter(req, res, next) {
    try {
      const filter = searchProcess(req.query);
      const authors = author.find(filter);
      if (authors.length !== 0) {
        req.result = authors;
        next();
      } else {
        next(new NotIdentified("Authors not identified with this parameter!"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async editAuthor(req, res, next) {
    try {
      const id = req.params.id;
      const authorIdentified = await author.findByIdAndUpdate(id, req.body);
      if (authorIdentified !== null) {
        res.status(200).json({ message: "Author edited with sucess!" });
      } else {
        next(new NotIdentified("Author not Identified!"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteAuthor(req, res, next) {
    try {
      const id = req.params.id;
      const authorIdentified = await author.findByIdAndDelete(id);
      if (authorIdentified !== null) {
        res.status(200).json({ message: "Author deleted with sucess!" });
      } else {
        next(new NotIdentified("Author not Identified!"));
      }
    } catch (error) {
      next(error);
    }
  }
}

function searchProcess(parameters) {
  const { name, nationality } = parameters;
  const search = {};

  if (name) search.name = { $regex: name, $options: "i" };
  if (nationality) search.nationality = { $regex: nationality, $options: "i" };
  return search;
}

export default AuthorController;