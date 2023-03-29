const express = require("express");
const productsRoute = express.Router();
const { getProducts, getSingleProduct } = require("../controllers/products");

productsRoute.get("/", getProducts);

productsRoute.get("/:productId", getSingleProduct);

module.exports = { productsRoute };
