const mongoose = require("mongoose");

const { Schema } = mongoose;

const Category = require("./category");

const BookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: null,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: Category,
    },
    author: {
      type: String,
      required: true,
      default: null,
    },
    isbn: {
      type: String,
      required: true,
      default: null,
    },
    edition: {
      type: String,
      required: true,
      default: null,
    },
    language: { type: String, required: true, default: null },
    binding: { type: String, required: true, default: null },
    image: { type: String, required: true, default: null },
    details: { type: String, required: true, default: null },
    active: { type: String, required: true, default: 'Y' },
    sortOrder: { type: Number, required: true, default: null },
    deleted: { type: String, required: true, default: 'N' },
    deletedAt: { type: String, default: null, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("book", BookSchema);
