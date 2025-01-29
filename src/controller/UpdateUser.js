import { UserModel } from "../../models/schema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { mongoose } from "mongoose";
dotenv.config();

export const updateUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.json({
        status: 407,
        message: "Proxy Authentication Required",
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const hashedPassword = await bcrypt.hash(String(password), 10);
    const id = new mongoose.Types.ObjectId(decoded.userId);
    const updateUser = await UserModel.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          email: email,
          password: hashedPassword,
          phone: phone,
        },
      }
    );

    res.json({
      status: 201,
      message: "User updated successfully",
      data: {
        updateUser,
      },
    });
  } catch (error) {
    console.log("Error creating user:", error);
    res.json({
      status: 500,
      message: "Internal server error",
      data: null,
    });
  }
};
