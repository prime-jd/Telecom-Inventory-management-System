const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId: { type: Number, required: true, unique: true },

  name: { type: String, required: true },

  description: { type: String },

  category: { type: String, ref: 'Category' },

  price: { type: Number, required: true },

  currentStock: { type: Number, required: true },

  reorderPoint: { type: Number },

  lastUpdated: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('Product', ProductSchema);
