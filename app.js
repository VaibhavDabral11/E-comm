import express from "express";
import mongoose from "mongoose";  //ORM
import dotenv from "dotenv";
dotenv.config();
const app = express();
import routes from "./src/route/routes.js"
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port:${port}`);
  console.log(`🚀 Express server ready at http://localhost:${port}`);
});
