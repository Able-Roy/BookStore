const mongoose = require('mongoose');

const { Schema } = mongoose;

const Category = require('./category');

const BookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryid: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: Category,
    },
    author: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    edition: {
      type: String,
      required: true,
    },
    language: { type: String, required: true },
    binding: { type: String, required: true },
    image: { type: String, required: true },
    details: { type: String, required: true },
    active: { type: String, required: true },
    sortorder: { type: Number, required: true },
    deleted: { type: Number, required: true },
    deletedat: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("book", BookSchema);
