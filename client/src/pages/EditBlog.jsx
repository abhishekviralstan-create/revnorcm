import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import API from "../api";
import "./BlogAdmin.css";

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

export default function EditBlog() {
  const { id } = useParams();
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

  const [oldImage, setOldImage] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [newPreview, setNewPreview] = useState("");
  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const makeSlug = (value) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await API.get(`/blogs/edit/${id}`);
        const blog = res.data.blog;

        setForm({
          title: blog.title || "",
          slug: blog.slug || "",
          metaTitle: blog.metaTitle || "",
          metaDescription: blog.metaDescription || "",
          keywords: Array.isArray(blog.keywords)
            ? blog.keywords.join(", ")
            : blog.keywords || "",
          h1: blog.h1 || "",
          excerpt: blog.excerpt || "",
          category: blog.category || "",
          content: blog.content || "",
          publishedAt: blog.publishedAt
            ? new Date(blog.publishedAt).toISOString().slice(0, 16)
            : "",
        });

        setOldImage(`${import.meta.env.VITE_API_URL}/blogs/image/${blog._id}`);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load blog");
      } finally {
        setPageLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

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
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
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
    setNewImage(file);
    setNewPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      if (newImage) {
        data.append("featuredImage", newImage);
      }

      await API.put(`/blogs/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/dashboard/manage-blogs");
    } catch (err) {
      setError(err.response?.data?.message || "Blog update failed");
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="blogAdminPage">
        <div className="blogAdminContainer">
          <p>Loading blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blogAdminPage">
      <div className="blogAdminContainer">
        <div className="blogAdminTopbar">
          <div>
            <h1>Edit Blog</h1>
            <p>Author: {user?.name}</p>
          </div>

          <Link to="/dashboard/manage-blogs">Back to Manage Blogs</Link>
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
              placeholder="Update your article content..."
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
              {loading ? "Updating..." : "Update Blog"}
            </button>
          </div>

          <aside className="blogAdminSide">
            <div className="blogAdminSideBox">
              <h3>Featured Image</h3>

              {oldImage && !newPreview && (
                <img
                  src={oldImage}
                  alt="Old blog"
                  className="blogAdminImagePreview"
                />
              )}

              {newPreview && (
                <img
                  src={newPreview}
                  alt="New preview"
                  className="blogAdminImagePreview"
                />
              )}

              <label>Change Image</label>
              <input type="file" accept="image/*" onChange={handleImage} />

              <p className="blogAdminHelp">Max image size: 1 MB</p>
            </div>

            <div className="blogAdminSideBox">
              <label>Category *</label>
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
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
                Publisher, robots and schema are automatically managed.
              </p>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}