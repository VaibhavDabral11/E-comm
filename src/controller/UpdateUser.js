import { UserModel } from "../../models/schema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
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
    console.log("tokennnnnn", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("--------decoded-------", decoded.userId);
    const userId = decoded.userId;
    const hashedPassword = await bcrypt.hash(String(password), 10);
    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
      phone,
    });
    const updateUser = await user.updateOne(userId, user);
    console.log("----updateUser-----", updateUser);
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
