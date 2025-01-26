import { UserModel } from "../../models/users.js";
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
        status: 401, //??
        message: "User already exists",
      });
    } else {
      const newUser = new UserModel({
        name,
        email,
        password,
        phone,
        roleId,
        Timestamp: "2025-01-26T12:34:56.789Z",
      });
      const createUser = await newUser.save();
      res.json({
        status: 201,
        message: "User created successfully",
        data: { createUser },
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
