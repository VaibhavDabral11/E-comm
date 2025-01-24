import {getuser} from "./route/routes.js"
import express from 'express';
const app = express();
app.use(express.json());

app.delete('/getuser',getuser) //http://localhost:3000/getuser
