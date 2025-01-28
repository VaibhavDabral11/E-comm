import express from "express";
import { getuser } from "../controller/getUser.js";
import { createUser } from "../controller/createUser.js";
import { addNewRole } from "../controller/addRole.js";
import { updateUser } from "../controller/UpdateUser.js";
const router = express.Router();

router.get("/getuser", getuser);
router.post("/createUser", createUser);
router.post("/addRole", addNewRole);
router.put("/updateUser", updateUser);

export default router;
