import mongoose from "mongoose";
import { authorSchema } from "./author.model.js";

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: [true, "The title of the book is mandatory!"] },
  publisher: {
    type: String, required: [true, "Book publisher is mandatory!"], enum: {
      values: ["Casa do Código", "Alura"], message: "Publisher {VALUE} is not an allowed value!"
    }
  },
  price: { type: Number },
  pages: {
    type: Number,
    validate: {
      validator: (value) => {
        return value >= 10 && value <= 5000;
      }, message:
        "The number of pages must be between 10 and 5000. Value provided: {VALUE}"
    }
  },
  author: authorSchema
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;