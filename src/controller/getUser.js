import { UserModel } from "../../models/schema.js";

export const getuser = async (req, res) => {
  UserModel.find({})
    .then(function (users) {
      res.json(users);
      console.log("----users----", users);
    })
    .catch(function (err) {
      res.json(err);
      console.log("----err----", err);
    });
};
