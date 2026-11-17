const mongoose = require("mongoose");
const { timeStamp } = require("node:console");

//Book Schema
const bookSchema = new mongoose.Schema(
  {
    Title: { type: String, required: [true, "Book Title is required"] },
    Author: { type: String, required: [true, "Author Name  is required"] },
    Genre: { type: String },
    publishedYear: {
      type: Number,
      required: [true, "Published Year  is required"],
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const Book=mongoose.model('Book',bookSchema);
module.exports=Book;