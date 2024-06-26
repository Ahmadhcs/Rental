import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import bikeRoutes from "./routes/bikeRoutes.js"
import managerRoutes from "./routes/managerRoutes.js"
import {resetExpiredReservations} from "./Schedulers/resetReservations.js"
import cron from 'node-cron';


dotenv.config();

const app = express();
const port = process.env.PORT || 8001;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Database connection error:", err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World with ES6!');
});
app.use("/api", authRoutes);
app.use("/api", bikeRoutes);
app.use("/api", managerRoutes)

cron.schedule('* * * * *', resetExpiredReservations, {
  scheduled: true,
});


// Server Start
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
