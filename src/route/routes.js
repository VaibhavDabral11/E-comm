import express from "express";
import { getuser } from "../controller/getUser.js";
const router = express.Router();

router.get("/getuser", getuser)

export default router;
