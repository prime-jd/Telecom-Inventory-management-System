import asyncHandler from '../utils/asyncHandler.js';
import Product from '../models/product.model.js';
import ApiResponse from '../utils/apiResponse.js';

export const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  return res.status(201).json(new ApiResponse(201, "Product created successfully", product));
});

// Get All Products
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  return res.status(200).json(new ApiResponse(200, "Products fetched successfully", products));
});

// Get Product by ID
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json(new ApiResponse(404, "Product not found", null));
  return res.status(200).json(new ApiResponse(200, "Product fetched successfully", product));
});

// Update Product
export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) return res.status(404).json(new ApiResponse(404, "Product not found", null));
  return res.status(200).json(new ApiResponse(200, "Product updated successfully", product));
});

// Delete Product
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json(new ApiResponse(404, "Product not found", null));
  return res.status(200).json(new ApiResponse(200, "Product deleted successfully", null));
});
