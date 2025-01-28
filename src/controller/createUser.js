import { UserModel } from "../../models/schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const createUser = async (req, res) => {
  try {
    const { name, email, password, phone, roleId } = req.body;
    const CheckExistingUser = await UserModel.findOne({ email });
    if (!name || !email || !password || !phone || !roleId) {
      res.json({
        status: 400,
        message: "Empty input fields!",
      });
    } else if (!/^[a-zA-Z ]+$/.test(String(name))) {
      res.json({
        status: 400,
        massage: "Invalid name entered",
      });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(String(email))) {
      res.json({
        status: 400,
        message: "Invalid email entered",
      });
    } else if (CheckExistingUser) {
      return res.json({
        status: 401,
        message: "User already exists",
      });
    } else {
      const hashedPassword = await bcrypt.hash(String(password), 10);
      const newUser = new UserModel({
        name,
        email,
        password: hashedPassword,
        phone,
        roleId,
        Timestamp: "2025-01-26T12:34:56.789Z",
      });
      const user = await newUser.save();

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        algorithm: "HS256",
        subject: String(user.id),
        expiresIn: "1d",
      });
      res.json({
        status: 201,
        message: "User created successfully",
        data: {
          token,
          user,
        },
      });
    }
  } catch (error) {
    console.log("Error creating user:", error);
    res.json({
      status: 500,
      message: "Internal server error",
      data: null,
    });
  }
};
