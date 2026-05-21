import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: [70, "Title must be 70 characters or less"],
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    h1: {
      type: String,
      required: true,
      trim: true,
    },

    excerpt: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    metaTitle: {
      type: String,
      required: true,
      trim: true,
      maxlength: [70, "Meta title must be 70 characters or less"],
    },

    metaDescription: {
      type: String,
      required: true,
      trim: true,
      maxlength: [150, "Meta description must be 150 characters or less"],
    },

    keywords: [
      {
        type: String,
        trim: true,
      },
    ],

    publisher: {
      type: String,
      default: "Revno RCM",
    },

    robots: {
      type: String,
      default: "index, follow",
    },

    schemaType: {
      type: String,
      default: "BlogPosting",
    },

    featuredImage: {
      data: Buffer,
      contentType: String,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    comments: [commentSchema],

    publishedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;