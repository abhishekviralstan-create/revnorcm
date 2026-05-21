import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaNewspaper } from "react-icons/fa";
import API from "../api";
import "./BlogAdmin.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeBlogId, setActiveBlogId] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await API.get(`/blogs?page=${page}&limit=9`);

      setBlogs(Array.isArray(res.data?.blogs) ? res.data.blogs : []);
      setTotalPages(res.data?.totalPages || 1);
    } catch (err) {
      setBlogs([]);
      setError(err.response?.data?.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".blogReveal");

    revealItems.forEach((item, index) => {
      item.style.setProperty("--blog-delay", `${Math.min(index * 90, 450)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("blogShow");
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [blogs, loading]);

  const handleBlogClick = (blogId) => {
    setActiveBlogId(blogId);
  };

  return (
    <>
      <Helmet>
        <title>News & Blogs | Medical Billing & RCM Insights | Revno RCM</title>

        <meta
          name="description"
          content="Read the latest medical billing, revenue cycle management, denial prevention, coding, credentialing, and healthcare compliance insights from Revno RCM."
        />

        <meta
          name="keywords"
          content="medical billing blogs, RCM insights, revenue cycle management articles, healthcare billing tips, denial management blogs, medical coding articles, Revno RCM blogs"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/news-blogs" />

        <meta
          property="og:title"
          content="News & Blogs | Medical Billing & RCM Insights | Revno RCM"
        />
        <meta
          property="og:description"
          content="Explore practical articles on medical billing, revenue cycle management, denial prevention, payment posting, coding, credentialing, and healthcare reporting."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/news-blogs" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="News & Blogs | Medical Billing & RCM Insights | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Medical billing and RCM insights for healthcare providers, clinics, billing teams, and revenue cycle leaders."
        />
        <meta name="twitter:image" content="https://www.revnorcm.com/og-image.jpg" />
      </Helmet>

      <main className="revnoBlogsPage">
        {/* HERO */}
        <section className="revnoBlogsHero">
          <div className="revnoBlogsContainer">
            <div className="revnoBlogsBreadcrumb blogReveal">
              <Link to="/">Home</Link>
              <span>›</span>
              <strong>News & Blogs</strong>
            </div>

            <span className="revnoBlogsBadge blogReveal">Revno RCM Insights</span>

            <h1 className="blogReveal">Latest News & Blogs</h1>

            <p className="blogReveal">
              Stay updated with practical medical billing, RCM, coding, denial
              prevention, credentialing, and healthcare compliance insights.
            </p>
          </div>
        </section>

        {/* BLOG LIST */}
        <section className="revnoBlogsListSection">
          <div className="revnoBlogsContainer">
            <div className="revnoBlogsSectionHead blogReveal">
              <span>Latest Articles</span>
              <h2>Medical Billing & RCM Resources</h2>
              <p>
                Helpful content created for healthcare providers, clinics, billing
                teams, and revenue cycle leaders.
              </p>
            </div>

            {error && <div className="blogAdminError blogReveal">{error}</div>}

            {loading ? (
              <div className="revnoBlogsLoading blogReveal">
                <FaNewspaper />
                <span>Loading latest blogs...</span>
              </div>
            ) : (
              <>
                <div className="revnoBlogsGrid">
                  {blogs.length > 0 ? (
                    blogs.map((blog, index) => (
                      <article
                        className={`revnoBlogCard blogReveal ${
                          activeBlogId === blog._id ? "blogClickActive" : ""
                        } ${index % 2 === 0 ? "blogFromLeft" : "blogFromRight"}`}
                        key={blog._id}
                        onMouseDown={() => handleBlogClick(blog._id)}
                      >
                        <Link
                          to={`/news-blogs/${blog.slug}`}
                          className="revnoBlogCardImage"
                          aria-label={blog.title}
                        >
                          <img
                            src={`${import.meta.env.VITE_API_URL}/blogs/image/${blog._id}`}
                            alt={blog.title}
                            loading="lazy"
                          />

                          <span>{blog.category || "RCM"}</span>
                        </Link>

                        <div className="revnoBlogCardBody">
                          <h3>
                            <Link to={`/news-blogs/${blog.slug}`}>
                              {blog.title}
                            </Link>
                          </h3>

                          <p>{blog.excerpt}</p>

                          <div className="revnoBlogCardFooter">
                            <div className="revnoBlogAuthor">
                              <img
                                src={`${import.meta.env.VITE_API_URL}/auth/author-image/${blog.author?._id}`}
                                alt={blog.author?.name || "Author"}
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.src =
                                    "https://ui-avatars.com/api/?name=" +
                                    encodeURIComponent(blog.author?.name || "Author") +
                                    "&background=029A82&color=fff&size=120";
                                }}
                              />

                              <div>
                                <strong>{blog.author?.name || "Author"}</strong>
                                <small>
                                  <FaCalendarAlt />
                                  {blog.publishedAt
                                    ? new Date(blog.publishedAt).toLocaleDateString(
                                        "en-US",
                                        {
                                          day: "2-digit",
                                          month: "short",
                                          year: "numeric",
                                        }
                                      )
                                    : "Recently Published"}
                                </small>
                              </div>
                            </div>

                            <Link
                              to={`/news-blogs/${blog.slug}`}
                              className="revnoBlogReadMore"
                              onClick={() => handleBlogClick(blog._id)}
                            >
                              Read More <FaArrowRight />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="revnoBlogsEmpty blogReveal">
                      <h3>No blogs available yet.</h3>
                      <p>New articles will appear here once published.</p>
                    </div>
                  )}
                </div>

                {blogs.length > 0 && (
                  <div className="revnoBlogsPagination blogReveal">
                    <button
                      type="button"
                      disabled={page === 1}
                      onClick={() => {
                        setPage((prev) => prev - 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      ← Previous
                    </button>

                    <span>
                      Page {page} of {totalPages}
                    </span>

                    <button
                      type="button"
                      disabled={page === totalPages}
                      onClick={() => {
                        setPage((prev) => prev + 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}