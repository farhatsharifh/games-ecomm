const express = require('express');

const router = express.Router();

const ProductsController = require("../controllers/products");

router.get("/:category", ProductsController.getAllProducts);

module.exports = router;
