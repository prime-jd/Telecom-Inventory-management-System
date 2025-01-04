const CategorySchema = new mongoose.Schema({
    
    categoryId: { type: Number, required: true, unique: true },

    name: { type: String, required: true },

    description: { type: String },

  });
  
  module.exports = mongoose.model('Category', CategorySchema);
  