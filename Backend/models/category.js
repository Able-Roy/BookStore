const mongoose = require('mongoose');

const schema = mongoose.Schema;

categorySchema = new schema({
    name: {type: String, required: true},
    sortOrder: {type: Number, require: true},
    active: {type: String, default: 'Y'},
    endeffdt: {type: Date, default: null}
});

module.exports = mongoose.model('Category', categorySchema);