const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {type: String, required: true},
  title: {type: String, required: true},
  imagePath: {type: String, required: true}
});

module.exports = mongoose.model('Category', categorySchema);
