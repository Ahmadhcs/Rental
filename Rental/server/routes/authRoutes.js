import express from "express"
import { signIn } from "../controllers/userControllers/signIn.js";
import { signUp } from "../controllers/userControllers/signUp.js";
import { getAllBikes } from "../controllers/userControllers/getAllBikes.js";
import { rateBike } from "../controllers/userControllers/rateBike.js";
import { createReview } from "../controllers/userControllers/createReview.js";
import { getBikeReviews } from "../controllers/userControllers/getBikeReviews.js";
import { getUserInfo } from "../controllers/userControllers/getUserInfo.js";

const router = express.Router();

router.post("/signIn", signIn)
router.post("/signUp", signUp)
router.get("/getAllBikes", getAllBikes)
router.post("/rateBike", rateBike)
router.post("/createReview", createReview)
router.get("/getBikeReviews", getBikeReviews)
router.get("/getUserInfo",getUserInfo )



export default router;
