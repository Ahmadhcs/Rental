import express from 'express';
import mongoose from "mongoose"
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js"
dotenv.config();

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try{
  await mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));
}catch(error){
  console.log(error)
}




app.get('/', (req, res) => {
  res.send('Hello World with ES6!');
});

app.use("/api", authRoutes);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});