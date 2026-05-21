import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import API from "../api";

const SingleBlog = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState({
    name: "",
    email: "",
    message: "",
  });

  const fetchBlog = async () => {
    try {
      const res = await API.get(`/blogs/${slug}`);
      setBlog(res.data.blog);
    } catch (err) {
      console.log(err.response?.data?.message || "Blog not found");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const submitComment = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(`/blogs/${slug}/comments`, comment);

      setBlog({
        ...blog,
        comments: res.data.comments,
      });

      setComment({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Comment failed");
    }
  };

  if (!blog) {
    return <p className="loading-text">Loading blog...</p>;
  }

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.keywords?.join(", ")} />
        <link rel="canonical" href={`${window.location.origin}/blogs/${blog.slug}`} />
      </Helmet>

      <main className="single-blog-page">
        <div className="single-blog-container">
          <Link to="/blogs" className="back-link">
            ← Back to Blogs
          </Link>

          <div className="single-blog-meta">
            <span>{blog.category}</span>
            <span>By {blog.author?.name}</span>
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
          </div>

          <h1>{blog.h1}</h1>

          <img
            src={`${import.meta.env.VITE_API_URL}/blogs/image/${blog._id}`}
            alt={blog.title}
            className="single-blog-image"
          />

          <article className="newspaper-content">
            {blog.content.split("\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </article>

          <section className="comments-section">
            <h2>Comments</h2>

            <form onSubmit={submitComment} className="comment-form">
              <input
                name="name"
                placeholder="Your name"
                value={comment.name}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                placeholder="Your email"
                value={comment.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Write your comment"
                value={comment.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Post Comment</button>
            </form>

            <div className="comment-list">
              {blog.comments?.map((item) => (
                <div className="comment-card" key={item._id}>
                  <strong>{item.name}</strong>
                  <p>{item.message}</p>
                  <span>{new Date(item.createdAt).toLocaleString()}</span>
                </div>
              ))}

              {blog.comments?.length === 0 && <p>No comments yet.</p>}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SingleBlog;