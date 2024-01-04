import NotIdentified from "../errors/notIdenfitied.js";
import { author, book } from "../models/index.js";

class BookController {
  static async bookRegistration(req, res, next) {
    const newBook = req.body;
    try {
      const identifiedAuthor = await author.findById(newBook.author);
      const bookWithAuthor = { ...newBook, author: { ...identifiedAuthor._doc } };
      const createdBook = await book.create(bookWithAuthor);
      res.status(201).json({ message: "Book registrated with sucess!", book: createdBook });
    } catch (error) {
      next(error);
    }
  }

  static async booksList(req, res, next) {
    try {
      const searchBooks = book.find();
      req.result = searchBooks;
      next();
    } catch (error) {
      next(error);
    }
  }

  static async searchBookById(req, res, next) {
    try {
      const bookID = req.params.id;
      const identifiedBook = await book.findById(bookID);
      if (identifiedBook !== null) {
        res.status(200).json(identifiedBook);
      } else {
        next(new NotIdentified("Book not identified!"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async searchBooksByFilter(req, res, next) {
    try {
      const filter = searchProcess(req.query);
      const books = book.find(filter);
      if (books.length !== 0) {
        req.result = books;
        next();
        // res.status(200).json(books);
      } else {
        next(new NotIdentified("Books not identified with this parameter!"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async editBook(req, res, next) {
    try {
      const bookID = req.params.id;
      const identifiedBook = await book.findByIdAndUpdate(bookID, req.body);
      if (identifiedBook !== null) {
        res.status(200).json({ message: "Book edited with sucess!" });
      } else {
        next(new NotIdentified("Book not Identified!"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteBook(req, res, next) {
    try {
      const bookID = req.params.id;
      const identifiedBook = await book.findByIdAndDelete(bookID);
      if (identifiedBook !== null) {
        res.status(200).json({ message: "Book deleted with sucess!" });
      } else {
        next(new NotIdentified("Book not Identified!"));
      }
    } catch (error) {
      next(error);
    }
  }

}

function searchProcess(parameters) {
  const { title, publisher, minPages, maxPages, authorName } = parameters;

  const search = {};

  if (publisher) search.publisher = { $regex: publisher, $options: "i" };

  if (title) search.title = { $regex: title, $options: "i" };

  if (minPages || maxPages) search.pages = {};
  if (minPages) search.pages.$gte = minPages;
  if (maxPages) search.pages.$lte = maxPages;

  if (authorName) search["author.name"] = { $regex: authorName, $options: "i" };
  return search;
}

export default BookController;