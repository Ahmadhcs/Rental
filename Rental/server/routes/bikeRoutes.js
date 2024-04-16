import express from "express"
import { addBike } from "../controllers/restControllers/addBike.js";

const router = express.Router();

router.post("/addBike", addBike)



export default router;
