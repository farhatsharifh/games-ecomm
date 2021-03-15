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

exports.getProduct = (req, res, next) => {
  Product.findById(req.params.id)
  .then(product => {
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({message: "Product not found"});
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching product failed!"
    });
  });
}

exports.getFeaturedProducts = (req, res, next) => {
  let featuredProducts;
  Product.find({featured: true})
  .then(documents => {
    featuredProducts = documents;
    return Product.countDocuments();
  }).then(count => {
      res.status(200).json({
        message: 'Featured Products fetched successfully',
        products: featuredProducts,
        maxProducts: count
      });
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching products failed!"
    });
  });
}
