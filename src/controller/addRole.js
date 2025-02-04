import { Role } from "../../models/schema.js";

export const addNewRole = async (req, res) => {
  try {
    const { RoleId, RoleName, Premission } = req.body;
    const newRole = new Role({
      RoleId,
      RoleName,
      Premission,
      timestamp: "2025-01-26T12:34:56.789Z",
    });
    const createRole = await newRole.save();
    res.json({
      status: 201,
      message: "role is created",
      data: { createRole },
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
