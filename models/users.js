import mongoose from "mongoose";
const Schema = mongoose.model();

const UserModel = new Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = ("Users", UserModel);
