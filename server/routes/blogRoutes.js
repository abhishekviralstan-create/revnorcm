import express from "express";
import {
  createBlog,
  getBlogs,
  getSingleBlog,
  getBlogById,
  getBlogImage,
  updateBlog,
  deleteBlog,
  addComment,
} from "../controllers/blogController.js";


import { protect, checkAccess } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/image/:id", getBlogImage);
router.get("/edit/:id", protect, checkAccess, getBlogById);
router.get("/:slug", getSingleBlog);

router.post(
  "/",
  protect,
  checkAccess,
  upload.single("featuredImage"),
  createBlog
);

router.put(
  "/:id",
  protect,
  checkAccess,
  upload.single("featuredImage"),
  updateBlog
);

router.delete("/:id", protect, checkAccess, deleteBlog);

router.post("/:slug/comments", addComment);

export default router;