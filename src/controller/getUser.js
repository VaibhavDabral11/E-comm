import { UserModel } from "../../models/schema.js";
import { mongoose } from "mongoose";
// add projection and limit and offset {optional aggriation}
export const getUsers = async (req, res) => {
  const { limit, offset } = req.body || null;
  UserModel.find({}, { name: 1, _id: 0 })
    .skip(offset)
    .limit(limit)
    .then(function (users) {
      res.json({
        status: 200,
        message: "All users",
        users,
      });
    })
    .catch(function (err) {
      res.json(err);
    });
};

export const getUserBYId = async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    res.json({
      status: 401,
      message: "userId is missing",
    });
  }
  const id = new mongoose.Types.ObjectId(userId);
  UserModel.find({ _id: id }, { name: 1, _id: 0 })
    .then(function (users) {
      res.json({
        status: 200,
        message: "get user according to the given id",
        users,
      });
    })
    .catch(function (err) {
      res.json(err);
    });
};
