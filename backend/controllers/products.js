const Product = require("../models/product");

exports.getAllProducts = (req, res, next) => {
  const productCategory = req.params.category;
  var productQuery = null;
  if( productCategory === "allproducts") {
    productQuery = Product.find();
  } else {
    productQuery = Product.find( {category: productCategory} );
  }

  let fetchedProducts;
  productQuery.then(documents => {
    fetchedProducts = documents;
    return Product.countDocuments();
  }).then(count => {
    res.status(200).json({
      message: 'Products fetched successfully',
      products: fetchedProducts,
      maxProducts: count
    });
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching products failed!"
    });
  });
}