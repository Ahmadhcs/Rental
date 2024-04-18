import express from "express"
import { addBike } from "../controllers/managerControllers/addBike.js";
import { deleteBike } from "../controllers/managerControllers/deleteBike.js";
import { editBike } from "../controllers/managerControllers/editBike.js";
import { reserveBike } from "../controllers/userControllers/reserveBike.js";


const router = express.Router();

router.post("/addBike", addBike)
router.delete("/deleteBike", deleteBike)
router.put("/editBike", editBike)
router.post("/reserveBike", reserveBike)




export default router;
