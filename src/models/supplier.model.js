const SupplierSchema = new mongoose.Schema({
    supplierId: { type: Number, required: true, unique: true },

    name: { type: String, required: true },

    contactPerson: { type: String },

    email: { type: String },

    phone: { type: String },

    address: { type: String },

    rating: { type: Number },
    
  });
  
  module.exports = mongoose.model('Supplier', SupplierSchema);
  