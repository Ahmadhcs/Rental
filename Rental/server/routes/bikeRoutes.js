import express from "express"
import { addBike } from "../controllers/managerControllers/addBike.js";
import { deleteBike } from "../controllers/managerControllers/deleteBike.js";

const router = express.Router();

router.post("/addBike", addBike)
router.delete("/deleteBike", deleteBike)



export default router;
