const express = require("express");
const userRoute = express.Router();
const { getProducts, getSingleProduct } = require("../controllers/products");
const {
  getCart,
  addCart,
  updateCart,
  deleteCart,
} = require("../controllers/cart");
const {
  getAddress,
  addAddress,
  updateAddress,
  deleteAddress,
} = require("../controllers/address");
const { getOrders, addOrder } = require("../controllers/orders");

userRoute.get("/products", getProducts);

userRoute.get("/products/:productId", getSingleProduct);

userRoute.get("/cart", getCart);

userRoute.post("/cart/add", addCart);

userRoute.patch("/cart/update/:cartId", updateCart);

userRoute.delete("/cart/delete/:cartId", deleteCart);

userRoute.get("/address", getAddress);

userRoute.get("/address/add", addAddress);

userRoute.patch("/address/update/:addressId", updateAddress);

userRoute.delete("/address/delete/:addressId", deleteAddress);

userRoute.get("/orders", getOrders);

userRoute.post("/orders/add", addOrder);

module.exports = { userRoute };
