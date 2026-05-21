import asyncHandler from "express-async-handler";
import slugify from "slugify";
import Blog from "../models/Blog.js";

/* ================= HELPERS ================= */

const cleanKeywords = (keywords) => {
  if (!keywords) return [];

  if (Array.isArray(keywords)) {
    return keywords.map((item) => item.trim()).filter(Boolean);
  }

  return keywords
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const validateSeoFields = ({ title, metaTitle, metaDescription }) => {
  if (title && title.length > 70) {
    return "Title must be 70 characters or less";
  }

  if (metaTitle && metaTitle.length > 70) {
    return "Meta title must be 70 characters or less";
  }

  if (metaDescription && metaDescription.length > 150) {
    return "Meta description must be 150 characters or less";
  }

  return null;
};

/* ================= CREATE BLOG ================= */

export const createBlog = asyncHandler(async (req, res) => {
  const {
    title,
    slug,
    metaTitle,
    metaDescription,
    keywords,
    h1,
    excerpt,
    category,
    content,
    publishedAt,
  } = req.body;

  if (
    !title ||
    !metaTitle ||
    !metaDescription ||
    !h1 ||
    !excerpt ||
    !category ||
    !content
  ) {
    res.status(400);
    throw new Error("Please fill all required blog fields");
  }

  const seoError = validateSeoFields({
    title,
    metaTitle,
    metaDescription,
  });

  if (seoError) {
    res.status(400);
    throw new Error(seoError);
  }

  if (!req.file) {
    res.status(400);
    throw new Error("Featured image is required");
  }

  const finalSlug =
    slug?.toLowerCase().trim() ||
    slugify(title, {
      lower: true,
      strict: true,
      trim: true,
    });

  const blogExists = await Blog.findOne({ slug: finalSlug });

  if (blogExists) {
    res.status(400);
    throw new Error("Blog slug already exists");
  }

  const blog = await Blog.create({
    title: title.trim(),
    slug: finalSlug,
    metaTitle: metaTitle.trim(),
    metaDescription: metaDescription.trim(),
    keywords: cleanKeywords(keywords),

    h1: h1.trim(),
    excerpt: excerpt.trim(),
    category: category.trim(),
    content,

    publisher: "Revno RCM",
    robots: "index, follow",
    schemaType: "BlogPosting",

    featuredImage: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },

    author: req.user._id,
    publishedAt: publishedAt || Date.now(),
  });

  const populatedBlog = await Blog.findById(blog._id)
    .populate("author", "name email dob authorRole experience")
    .select("-featuredImage.data");

  res.status(201).json({
    success: true,
    message: "Blog created successfully",
    blog: populatedBlog,
  });
});

/* ================= GET BLOGS ================= */

export const getBlogs = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 9;
  const category = req.query.category;

  const query = category ? { category } : {};

  const totalBlogs = await Blog.countDocuments(query);

  const blogs = await Blog.find(query)
    .populate("author", "name email dob authorRole experience")
    .select("-featuredImage.data")
    .sort({ publishedAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  res.status(200).json({
    success: true,
    page,
    totalPages: Math.ceil(totalBlogs / limit),
    totalBlogs,
    blogs,
  });
});

/* ================= GET SINGLE BLOG BY SLUG ================= */

export const getSingleBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug })
    .populate("author", "name email dob authorRole experience")
    .select("-featuredImage.data");

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.status(200).json({
    success: true,
    blog,
  });
});

/* ================= GET BLOG BY ID FOR EDIT ================= */

export const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)
    .populate("author", "name email dob authorRole experience")
    .select("-featuredImage.data");

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.status(200).json({
    success: true,
    blog,
  });
});

/* ================= GET BLOG IMAGE ================= */

export const getBlogImage = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id).select("featuredImage");

  if (!blog || !blog.featuredImage || !blog.featuredImage.data) {
    res.status(404);
    throw new Error("Image not found");
  }

  res.set("Content-Type", blog.featuredImage.contentType);
  res.set("Cache-Control", "public, max-age=86400");

  return res.send(blog.featuredImage.data);
});

/* ================= UPDATE BLOG ================= */

export const updateBlog = asyncHandler(async (req, res) => {
  const {
    title,
    slug,
    h1,
    excerpt,
    content,
    category,
    metaTitle,
    metaDescription,
    keywords,
    publishedAt,
  } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  const seoError = validateSeoFields({
    title,
    metaTitle,
    metaDescription,
  });

  if (seoError) {
    res.status(400);
    throw new Error(seoError);
  }

  const cleanSlug = slug ? slug.toLowerCase().trim() : blog.slug;

  if (cleanSlug !== blog.slug) {
    const slugExists = await Blog.findOne({ slug: cleanSlug });

    if (slugExists) {
      res.status(400);
      throw new Error("Slug already exists. Please use a different slug.");
    }
  }

  blog.title = title?.trim() || blog.title;
  blog.slug = cleanSlug;
  blog.h1 = h1?.trim() || blog.h1;
  blog.excerpt = excerpt?.trim() || blog.excerpt;
  blog.content = content || blog.content;
  blog.category = category?.trim() || blog.category;

  blog.metaTitle = metaTitle?.trim() || blog.metaTitle;
  blog.metaDescription = metaDescription?.trim() || blog.metaDescription;
  blog.keywords = cleanKeywords(keywords);

  blog.publisher = "Revno RCM";
  blog.robots = "index, follow";
  blog.schemaType = "BlogPosting";

  blog.publishedAt = publishedAt || blog.publishedAt;

  if (req.file) {
    blog.featuredImage = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };
  }

  await blog.save();

  const updatedBlog = await Blog.findById(blog._id)
    .populate("author", "name email dob authorRole experience")
    .select("-featuredImage.data");

  res.status(200).json({
    success: true,
    message: "Blog updated successfully",
    blog: updatedBlog,
  });
});

/* ================= DELETE BLOG ================= */

export const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  if (
    blog.author.toString() !== req.user._id.toString() &&
    req.user.role !== "admin"
  ) {
    res.status(403);
    throw new Error("You can delete only your own blog");
  }

  await blog.deleteOne();

  res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
  });
});

/* ================= ADD COMMENT ================= */

export const addComment = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !message) {
    res.status(400);
    throw new Error("Name and comment message are required");
  }

  const blog = await Blog.findOne({ slug: req.params.slug });

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  blog.comments.push({
    name,
    email,
    message,
  });

  await blog.save();

  res.status(201).json({
    success: true,
    comments: blog.comments,
  });
});