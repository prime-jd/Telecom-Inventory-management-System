import asyncHandler from '../utils/asyncHandler.js';
import { User } from '../models/user.model.js';
import ApiResponse from '../utils/apiResponse.js';
import { nanoid } from 'nanoid';

export const registerUser = asyncHandler(async (req, res) => {
  const {username, phone, email, role, password} = req.body();
  // const findUser = User.find({username, role});
  // if(findUser) return res.json(new ApiResponse(402, "User Already exist"));
  const user = await User.create({userId : nanoid(),
    username, phone, email, role, password
  });
  return res.json(new ApiResponse(201, "User registered successfully", user));
});

// Login User
export const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) return res.status(404).json(new ApiResponse(404, "Invalid credentials", null));
  return res.json(new ApiResponse(200, "Login successful", user));
});

// Get All Users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  return res.json(new ApiResponse(200, "Users fetched successfully", users));
});

// Delete User
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json(new ApiResponse(404, "User not found", null));
  return res.json(new ApiResponse(200, "User deleted successfully", null));
});
