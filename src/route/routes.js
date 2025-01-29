import express from "express";
import { getUsers, getUserBYId } from "../controller/getUser.js";
import { createUser } from "../controller/createUser.js";
import { addNewRole } from "../controller/addRole.js";
import { updateUser } from "../controller/UpdateUser.js";
const router = express.Router();

router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.post("/addRole", addNewRole);
router.put("/updateUser", updateUser);
router.get("/getUserById", getUserBYId);

export default router;
