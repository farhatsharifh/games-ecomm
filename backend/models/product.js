const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: {type: String, required: true},
  price:  {type: String, required: true},
  description: {type: String, required: true},
  imagePath: {type: String, required: true},
  detail: {type: String, required: true},
  category: {type: String, required: true},
  featured: {type: Boolean, required: true},
});

module.exports = mongoose.model('Product', productSchema);
