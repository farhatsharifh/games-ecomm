const Category = require("../models/category");

exports.getAllCategories = (req, res, next) => {
  Category.find()
  .then(documents => {
    res.status(200).json({
      message: 'Categories fetched successfully',
      categories: documents
    });
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching categories failed!"
    });
  });
}
