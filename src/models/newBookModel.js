const mongoose = require("mongoose");

const newBookSchema = new mongoose.Schema(
  {
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NewAuthor"
    },
    bookName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
    },
    publisher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"newPublisher"
    },
    isHardCover:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("NewBook", newBookSchema);
