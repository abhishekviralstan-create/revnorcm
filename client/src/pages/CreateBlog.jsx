import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import API from "../api";
import "./createBlog.css";

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["blockquote", "code-block"],
    ["link", "image"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "list",
  "bullet",
  "align",
  "blockquote",
  "code-block",
  "link",
  "image",
];

export default function CreateBlog() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("blog_user"));

  const [form, setForm] = useState({
    title: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    h1: "",
    excerpt: "",
    category: "",
    content: "",
    publishedAt: "",
  });

  const [featuredImage, setFeaturedImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const makeSlug = (value) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setForm((prev) => ({
        ...prev,
        title: value,
        slug: prev.slug || makeSlug(value),
        metaTitle: prev.metaTitle || value,
        h1: prev.h1 || value,
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 1024 * 1024) {
      setError("Image size must be less than 1 MB");
      return;
    }

    setError("");
    setFeaturedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!featuredImage) {
      setError("Featured image is required");
      return;
    }

    if (!form.content || form.content === "<p><br></p>") {
      setError("Blog content is required");
      return;
    }

    if (form.title.length > 70) {
      setError("Title must be 70 characters or less");
      return;
    }

    if (form.metaTitle.length > 70) {
      setError("Meta title must be 70 characters or less");
      return;
    }

    if (form.metaDescription.length > 150) {
      setError("Meta description must be 150 characters or less");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        data.append(key, value);
      });

      data.append("publisher", "Revno RCM");
      data.append("robots", "index, follow");
      data.append("schemaType", "BlogPosting");
      data.append("featuredImage", featuredImage);

      await API.post("/blogs", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/dashboard/manage-blogs");
    } catch (err) {
      setError(err.response?.data?.message || "Blog create failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blogAdminPage">
      <div className="blogAdminContainer">
        <div className="blogAdminTopbar">
          <div>
            <h1>Create Blog</h1>
            <p>Author: {user?.name}</p>
          </div>

          <Link to="/dashboard">Back Dashboard</Link>
        </div>

        {error && <div className="blogAdminError">{error}</div>}

        <form onSubmit={handleSubmit} className="blogAdminFormLayout">
          <div className="blogAdminMain">
            <label>Title *</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              maxLength={70}
              required
            />
            <small className="seoCounter">{form.title.length}/70 characters</small>

            <label>Slug *</label>
            <input
              name="slug"
              value={form.slug}
              onChange={handleChange}
              required
            />

            <label>Blog H1 *</label>
            <input
              name="h1"
              value={form.h1}
              onChange={handleChange}
              required
            />

            <label>Short Paragraph / Excerpt *</label>
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              rows="4"
              placeholder="This paragraph will show on blog card."
              required
            />

            <label>Content *</label>
            <ReactQuill
              theme="snow"
              value={form.content}
              onChange={(value) =>
                setForm((prev) => ({
                  ...prev,
                  content: value,
                }))
              }
              modules={quillModules}
              formats={quillFormats}
              placeholder="Write your premium article here..."
              className="blog-rich-editor"
            />

            <label>Meta Title *</label>
            <input
              name="metaTitle"
              value={form.metaTitle}
              onChange={handleChange}
              maxLength={70}
              required
            />
            <small className="seoCounter">
              {form.metaTitle.length}/70 characters
            </small>

            <label>Meta Description *</label>
            <textarea
              name="metaDescription"
              value={form.metaDescription}
              onChange={handleChange}
              maxLength={150}
              rows="3"
              required
            />
            <small className="seoCounter">
              {form.metaDescription.length}/150 characters
            </small>

            <label>Keywords</label>
            <input
              name="keywords"
              value={form.keywords}
              onChange={handleChange}
              placeholder="medical billing, rcm services, healthcare"
            />

            <button className="blogAdminSubmit" type="submit" disabled={loading}>
              {loading ? "Publishing..." : "Publish Blog"}
            </button>
          </div>

          <aside className="blogAdminSide">
            <div className="blogAdminSideBox">
              <h3>Featured Image</h3>

              <input type="file" accept="image/*" onChange={handleImage} />
              <p className="blogAdminHelp">Max image size: 1 MB</p>

              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="blogAdminImagePreview"
                />
              )}
            </div>

            <div className="blogAdminSideBox">
              <label>Category *</label>
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Medical Billing"
                required
              />

              <label>Published At</label>
              <input
                type="datetime-local"
                name="publishedAt"
                value={form.publishedAt}
                onChange={handleChange}
              />

              <label>Author</label>
              <input value={user?.name || ""} readOnly />
            </div>

            <div className="blogAdminSideBox">
              <h3>SEO Defaults</h3>

              <label>Publisher</label>
              <input value="Revno RCM" readOnly />

              <label>Robots Tag</label>
              <input value="index, follow" readOnly />

              <label>Schema Type</label>
              <input value="BlogPosting" readOnly />

              <p className="blogAdminHelp">
                Publisher, robots tag and BlogPosting schema are automatically
                added for SEO.
              </p>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}