import express from "express";
import { getuser } from "../controller/getUser.js";
import { createUser } from "../controller/createUser.js";
const router = express.Router();

router.get("/getuser", getuser);
router.post("/createUser", createUser);

export default router;
