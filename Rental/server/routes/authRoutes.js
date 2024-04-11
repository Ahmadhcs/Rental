import express from "express"
import { signIn } from "../controllers/userControllers/signIn.js";


const router = express.Router();


router.post("/signIn", signIn)

export default router;
