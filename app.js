import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {UserModel} from "./models/users"
dotenv.config();
const app = express();


mongoose.connect("mongodb://localhost:27017/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get("/getUsers", async (req, res) => {
    UserModel.find({})
    .then(function (users) {
      res.json(users);
      console.log("----users----", users);
    })
    .catch(function (err) {
      res.json(err);
      console.log("----err----", err);
    });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port:${port}`);
  console.log(`🚀 Express server ready at http://localhost:${port}`);
});
