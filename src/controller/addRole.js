import { Role } from "../../models/users.js";

export const addNewRole = async (req, res) => {
  try {
    const { RoleId, RoleName, Premission } = req.body;
    const newRole = new Role({
      RoleId,
      RoleName,
      Premission,
      timestamp: null,
    });
    const createRole = newRole.save;
    res.json({
      status: 401,
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
