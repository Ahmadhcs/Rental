import express from "express"
import { signIn } from "../controllers/managerControllers/signIn.js";
import { signUp } from "../controllers/managerControllers/signUp.js";
import { getBikes } from "../controllers/managerControllers/getBikes.js";



const router = express.Router();


router.post("/managerSignIn", signIn)
router.post("/managerSignUp", signUp )
router.get("/getCompanyBikes", getBikes)


export default router;
