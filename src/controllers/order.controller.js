import asyncHandler from '../utils/asyncHandler.js';
import Order from '../models/order.model.js';
import ApiResponse from '../utils/apiResponse.js';

export const createOrder = asyncHandler(async (req, res) => {
  const order = await Order.create(req.body);
  return res.status(201).json(new ApiResponse(201, "Order created successfully", order));
});


export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate('items').populate('supplier');
  return res.status(200).json(new ApiResponse(200, "Orders fetched successfully", orders));
});

export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!order) return res.status(404).json(new ApiResponse(404, "Order not found", null));
  return res.status(200).json(new ApiResponse(200, "Order status updated successfully", order));
});

export const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) return res.status(404).json(new ApiResponse(404, "Order not found", null));
  return res.status(200).json(new ApiResponse(200, "Order deleted successfully", null));
});
