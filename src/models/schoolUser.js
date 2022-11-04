const mongoose = require("mongoose");

const schoolUserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
