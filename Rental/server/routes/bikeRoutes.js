import express from "express"
import { addBike } from "../controllers/managerControllers/addBike.js";

const router = express.Router();

router.post("/addBike", addBike)



export default router;
