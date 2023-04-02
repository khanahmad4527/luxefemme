const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    image: { type: String, required: true },
    images: { type: [[String]], required: true },
    colours: { type: [[String]], required: true },
    sizes: { type: [String], required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    addedAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);
const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;

// {
//     "title": "Women's A-Line Knee Length Dress",
//     "category": "dress",
//     "price": 499,
//     "discount": 2,
//     "discountPrice": 489,
//     "rating": 4.1,
//     "reviews": 1752,
//     "image": "https://m.media-amazon.com/images/I/61ocLMlkRRL._UL1440_.jpg",
//     "images": [
//       [
//         "https://m.media-amazon.com/images/I/61ocLMlkRRL._UL1440_.jpg",
//         "https://m.media-amazon.com/images/I/613YnZvlm6L._UL1440_.jpg",
//         "https://m.media-amazon.com/images/I/619h3bClxPL._UL1440_.jpg",
//         "https://m.media-amazon.com/images/I/611lyTvFK8L._UL1440_.jpg",
//         "https://m.media-amazon.com/images/I/61mbmCp1cSL._UL1440_.jpg",
//         "https://m.media-amazon.com/images/I/41rWQA0fyZL._UL1207_.jpg"
//       ],

//     ],
//     "colours": [["Black", "#1B1A18"]],
//     "sizes": ["S", "M", "L", "XL", "2XL"],
//     "quantity": 2,
//     "description": "Care Instructions: Machine Wash Fit Type: Regular Colour: Black Size: Small Department: Women",
//     "brand": "Amayra",
//     "addedAt": "2023-03-27T05:45:34Z",
//     "updatedAt": "2023-03-27T07:45:13Z"
//   }
