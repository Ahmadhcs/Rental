import express from "express"
import { signIn } from "../controllers/userControllers/signIn.js";
import { signUp } from "../controllers/userControllers/signUp.js";
import { getAllBikes } from "../controllers/userControllers/getAllBikes.js";
import { rateBike } from "../controllers/userControllers/rateBike.js";
import { createReview } from "../controllers/userControllers/createReview.js";
import { getBikeReviews } from "../controllers/userControllers/getBikeReviews.js";
import { getUserInfo } from "../controllers/userControllers/getUserInfo.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.post("/signIn", signIn)
router.post("/signUp", signUp)
router.get("/getAllBikes", requireAuth,  getAllBikes)
router.post("/rateBike", requireAuth, rateBike)
router.post("/createReview", requireAuth,createReview)
router.get("/getBikeReviews", requireAuth, getBikeReviews)
router.get("/getUserInfo",requireAuth,  getUserInfo )



export default router;
