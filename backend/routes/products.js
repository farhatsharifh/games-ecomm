const express = require('express');

const router = express.Router();

const ProductsController = require("../controllers/products");

router.get("/category/:category", ProductsController.getAllProducts);

router.get("/product/:id", ProductsController.getProduct);

router.get("/featured", ProductsController.getFeaturedProducts);

module.exports = router;
