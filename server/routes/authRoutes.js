import express from "express";
import {
  signupUser,
  loginUser,
  getMe,
  getAuthorImage,
  resetUserPasswordByEmail,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/signup", upload.single("profileImage"), signupUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

router.get("/author-image/:id", getAuthorImage);

router.post("/reset-password", resetUserPasswordByEmail);

export default router;