const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    sortOrder: { type: Number, require: true },
    active: { type: String, default: 'Y' },
    deleted: { type: String, default: 'N' },
  },
  { timestamps: true },
  { retainKeyOrder: true },
);

module.exports = mongoose.model('Category', categorySchema);
