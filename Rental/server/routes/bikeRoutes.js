import express from "express"
import { addBike } from "../controllers/managerControllers/addBike.js";
import { deleteBike } from "../controllers/managerControllers/deleteBike.js";
import { editBike } from "../controllers/managerControllers/editBike.js";
import { reserveBike } from "../controllers/userControllers/reserveBike.js";
import { cancelReserve } from "../controllers/userControllers/cancelReserve.js";
import requireManagerAuth from "../middleware/requireManagerAuth.js";


const router = express.Router();

router.post("/addBike", requireManagerAuth, addBike)
router.delete("/deleteBike" , requireManagerAuth, deleteBike)
router.put("/editBike", requireManagerAuth, editBike)
router.post("/reserveBike", reserveBike)
router.delete("/cancelReserve", cancelReserve)




export default router;
