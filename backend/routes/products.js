const express = require('express');

const router = express.Router();

const ProductsController = require("../controllers/products");

router.get("", ProductsController.getAllProducts);

module.exports = router;
