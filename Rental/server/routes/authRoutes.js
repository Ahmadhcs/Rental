import express from "express"
import { signIn } from "../controllers/userControllers/signIn.js";
import { signUp } from "../controllers/userControllers/signUp.js";
import { getAllBikes } from "../controllers/userControllers/getAllBikes.js";



const router = express.Router();

router.post("/signIn", signIn)
router.post("/signUp", signUp)
router.get("/getAllBikes", getAllBikes)


export default router;
