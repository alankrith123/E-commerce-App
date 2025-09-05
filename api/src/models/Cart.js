const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: { type: String, required: true },
      title: { type: String, required: true },
      price: { type: Number, required: true },
      img: { type: String },
      quantity: { type: Number, default: 1 },
      desc: { type: String },
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model('Cart', CartSchema);
