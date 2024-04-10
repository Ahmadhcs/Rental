import express from 'express';
import mongoose from "mongoose"
import dotenv from "dotenv";

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});