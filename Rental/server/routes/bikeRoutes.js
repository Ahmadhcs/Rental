import express from "express"
import { addBike } from "../controllers/managerControllers/addBike.js";
import { deleteBike } from "../controllers/managerControllers/deleteBike.js";
import { editBike } from "../controllers/managerControllers/editBike.js";
import { reserveBike } from "../controllers/userControllers/reserveBike.js";
import { cancelReserve } from "../controllers/userControllers/cancelReserve.js";


const router = express.Router();

router.post("/addBike", addBike)
router.delete("/deleteBike", deleteBike)
router.put("/editBike", editBike)
router.post("/reserveBike", reserveBike)
router.delete("/cancelReserve", cancelReserve)




export default router;
