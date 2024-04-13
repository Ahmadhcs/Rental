import express from "express"
import { signIn } from "../controllers/userControllers/signIn.js";
import { signUp } from "../controllers/userControllers/signUp.js";



const router = express.Router();

console.log("here")
router.post("/signIn", signIn)
router.post("/signUp", signUp)


export default router;
