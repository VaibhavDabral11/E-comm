import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();


mongoose.connect("mongodb://localhost:27017/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port:${port}`);
  console.log(`🚀 Express server ready at http://localhost:${port}`);
});
