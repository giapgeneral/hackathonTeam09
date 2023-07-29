const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  type: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
