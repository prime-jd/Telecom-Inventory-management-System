const StockTransactionSchema = new mongoose.Schema({

    transactionId: { type: Number, required: true, unique: true },

    type: { type: String, enum: ['STOCK_IN', 'STOCK_OUT', 'RETURN', 'ADJUSTMENT'], required: true },

    quantity: { type: Number, required: true },

    timestamp: { type: Date, default: Date.now },

    notes: { type: String },

    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    
  });
  
  module.exports = mongoose.model('StockTransaction', StockTransactionSchema);
  