import express from "express"
import { signIn } from "../controllers/managerControllers/signIn.js";
import { signUp } from "../controllers/managerControllers/signUp.js";
import { getBikes } from "../controllers/managerControllers/getBikes.js";
import { getUsers } from "../controllers/managerControllers/getUsers.js";
import {deleteUser} from "../controllers/managerControllers/deleteUser.js"
import { getReservedBikes } from "../controllers/managerControllers/getReservedBike.js";
import { getUsersReserved } from "../controllers/managerControllers/getUsersReserved.js";



const router = express.Router();


router.post("/managerSignIn", signIn)
router.post("/managerSignUp", signUp )
router.get("/getCompanyBikes", getBikes)
router.get("/getUsers", getUsers)
router.delete("/deleteUser", deleteUser)
router.get("/getReservedBikes", getReservedBikes)
router.get("/getUsersReserved", getUsersReserved)



export default router;
