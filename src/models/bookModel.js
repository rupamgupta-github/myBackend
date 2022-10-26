const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: String,
    authorName: String,
    tags: [String],
    year: {
      type: Number,
      default: 2021,
    },
    // isPublished: Boolean,
    prices: {
      indianPrice: String,
      europePrice: String,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    stockAvailable: Boolean,
    // sales: {type: Number, default: 10}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema); //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
