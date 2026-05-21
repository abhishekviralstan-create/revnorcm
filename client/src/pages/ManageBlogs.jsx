import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import "./BlogAdmin.css";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await API.get("/blogs?limit=100");
      const safeBlogs = Array.isArray(res.data?.blogs) ? res.data.blogs : [];
      setBlogs(safeBlogs);
    } catch (err) {
      setBlogs([]);
      setError(err.response?.data?.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    const ok = window.confirm("Are you sure you want to delete this blog?");
    if (!ok) return;

    try {
      await API.delete(`/blogs/${id}`);
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="blogAdminPage">
      <div className="blogAdminContainer">
        <div className="blogAdminTopbar">
          <div>
            <h1>Manage Blogs</h1>
            <p>Edit, update and delete published blogs.</p>
          </div>

          <Link to="/dashboard/create-blog">Create New Blog</Link>
        </div>

        {error && <div className="blogAdminError">{error}</div>}

        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          <div className="manageTableWrap">
            <table className="manageTable">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <tr key={blog._id}>
                      <td>
                        <img
                          src={`${import.meta.env.VITE_API_URL}/blogs/image/${blog._id}`}
                          alt={blog.title}
                          className="manageThumb"
                        />
                      </td>

                      <td>{blog.title}</td>
                      <td>{blog.category}</td>
                      <td>{blog.author?.name || "Unknown"}</td>
                      <td>
                        {blog.publishedAt
                          ? new Date(blog.publishedAt).toLocaleDateString()
                          : "-"}
                      </td>

                      <td>
                        <div className="manageActions">
                          <Link to={`/news-blogs/${blog.slug}`}>View</Link>
                          <Link to={`/dashboard/edit-blog/${blog._id}`}>Edit</Link>
                          <button type="button" onClick={() => deleteBlog(blog._id)}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No blogs found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}