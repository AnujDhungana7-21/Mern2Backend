import express, { Router } from "express";
import authController from "../Collections/userCollections";
import errorHandler from "../services/catchAsyncError";
const router: Router = express.Router();

router.route("/register").post(errorHandler(authController.registerUser));
router.route("/login").post(errorHandler(authController.loginUser));
export default router;
