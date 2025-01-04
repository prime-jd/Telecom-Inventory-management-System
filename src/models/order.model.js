const OrderSchema = new mongoose.Schema({
    
    orderId: { type: Number, required: true, unique: true },

    orderDate: { type: Date, default: Date.now },

    status: { type: String, enum: ['PENDING', 'APPROVED', 'SHIPPED', 'DELIVERED', 'CANCELLED'], required: true },

    totalAmount: { type: Number, required: true },

    expectedDelivery: { type: Date },

    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },

    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem' }],

  });
  
  module.exports = mongoose.model('Order', OrderSchema);
  