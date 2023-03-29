const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    images: [
      [
        {
          type: String,
          required: true,
        },
      ],
    ],
    colours: [
      {
        type: String,
        required: true,
      },
    ],
    sizes: [
      {
        type: String,
        required: true,
      },
    ],
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    addedAt: {
      type: Date,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const ProductsModel = mongoose.model("product", productsSchema);

module.exports = { ProductsModel };
