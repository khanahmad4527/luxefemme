const ProductModel = require("../models/product.model.js");
const express = require("express");
const adminProductRouter = express.Router();
const auth=require("../middlewares/auth.middleware.js");



//get request
adminProductRouter.get("/products",auth, async (req, res) => {
  let limit = 10;
  let page = req.query.page;
  let skip = (page - 1) * limit;
  try {
    let product = await ProductModel.find().skip(skip).limit(limit);
    res.status(200).send(product);
  } catch (er) {
    res.status(400).send({ error: er.message });
  }
});




//post request
adminProductRouter.post("/add",auth, async (req, res) => {
  let payload = req.body;
  try {
    let product = new ProductModel(payload);
    await product.save();
    res.status(200).send({ message: "product added" });
  } catch (er) {
    res.status(400).send({ error: er.message });
  }
});





//patch request
adminProductRouter.patch("/product/:id",auth, async (req, res) => {
  let payload = req.body;
  let id = req.params.id;
  try {
    await ProductModel.findByIdAndUpdate(id, payload);
    res.status(200).send({ message: "product updated" });
  } catch (er) {
    res.status(400).send({ error: er.message });
  }
});






//delete request
adminProductRouter.delete("/product/:id",auth, async (req, res) => {
  let id = req.params.id;
  try {
    await ProductModel.findByIdAndDelete(id, payload);
    res.status(200).send({ message: "product deleted" });
  } catch (er) {
    res.status(400).send({ error: er.message });
  }
});

module.exports = adminProductRouter;
