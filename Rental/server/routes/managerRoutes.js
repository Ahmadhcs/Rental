import express from "express"
import { signIn } from "../controllers/managerControllers/signIn.js";
import { signUp } from "../controllers/managerControllers/signUp.js";
import { getBikes } from "../controllers/managerControllers/getBikes.js";
import { getUsers } from "../controllers/managerControllers/getUsers.js";
import {deleteUser} from "../controllers/managerControllers/deleteUser.js"
import { getReservedBikes } from "../controllers/managerControllers/getReservedBike.js";
import { getUsersReserved } from "../controllers/managerControllers/getUsersReserved.js";
import requireManagerAuth from "../middleware/requireManagerAuth.js";


const router = express.Router();

router.post("/managerSignIn", signIn)
router.post("/managerSignUp", signUp )
router.get("/getCompanyBikes",requireManagerAuth, getBikes)
router.get("/getUsers", requireManagerAuth, getUsers)
router.delete("/deleteUser", requireManagerAuth, deleteUser)
router.get("/getReservedBikes", requireManagerAuth, getReservedBikes)
router.get("/getUsersReserved", requireManagerAuth, getUsersReserved)



export default router;
