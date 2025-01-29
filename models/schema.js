import mongoose from "mongoose";

// Define the schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  roleId: { type: Number, required: true, ref: "Role" },
  Timestamp: { type: String },
});

const RoleSchema = new mongoose.Schema({
  roleId: { type: Number, required: true, unique: true },
  roleName: { type: String, required: true },
  premission: { type: Boolean, required: true },
  timestamp: { type: String, required: true },
});
//role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
// Create the model
export const UserModel = mongoose.model("User", UserSchema);
export const Role = mongoose.model("Role", RoleSchema);
