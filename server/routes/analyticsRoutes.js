import express from "express";
import { getAnalytics } from "../controllers/analyticsController.js";
import { apiLimiter } from "../middleware/rateLimiter.js";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

router.get("/", apiLimiter, userAuth, getAnalytics);

export default router;
