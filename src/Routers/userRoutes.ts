import express, { Router } from "express";
import authController from "../Collections/userCollections";
const router: Router = express.Router();

router.route("/register").post(authController.registerUser);
export default router