import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddlewares.js";

// route object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post("/register", registerController);
// LOGIN || METHOD POST
router.post("/login", loginController);

// test routes
router.get("/test", requireSignIn, testController);

export default router;
