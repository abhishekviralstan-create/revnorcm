import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import API from "../api";
import "./BlogDetails.css";

const CommentIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M21 11.5C21 16.194 16.97 20 12 20C10.832 20 9.715 19.79 8.69 19.406L4 21L5.514 16.876C3.944 15.43 3 13.536 3 11.5C3 6.806 7.03 3 12 3C16.97 3 21 6.806 21 11.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M8 10.5H16M8 13.5H13"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export default function BlogDetails() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const [comment, setComment] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await API.get(`/blogs/${slug}`);
        setBlog(res.data.blog);
      } catch (error) {
        console.log(error.response?.data?.message || "Blog not found");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const handleCommentChange = (e) => {
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
    } catch (error) {
      alert(error.response?.data?.message || "Comment submit failed");
    }
  };

  if (loading) {
    return (
      <div className="revnoBlogDetailsLoading">
        <p>Loading article...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="revnoBlogDetailsLoading">
        <div>
          <p>Blog not found.</p>
          <Link to="/news-blogs">Back to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle || blog.title}</title>

        <meta
          name="description"
          content={blog.metaDescription || blog.excerpt}
        />

        <meta
          name="keywords"
          content={
            Array.isArray(blog.keywords)
              ? blog.keywords.join(", ")
              : blog.keywords || ""
          }
        />

        <meta name="robots" content={blog.robots || "index, follow"} />
        <meta name="publisher" content={blog.publisher || "Revno RCM"} />
        <meta name="author" content={blog.author?.name || "Revno RCM"} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta
          property="og:description"
          content={blog.metaDescription || blog.excerpt}
        />
        <meta
          property="og:url"
          content={`https://www.revnorcm.com/news-blogs/${blog.slug}`}
        />
        <meta
          property="og:image"
          content={`${import.meta.env.VITE_API_URL}/blogs/image/${blog._id}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle || blog.title} />
        <meta
          name="twitter:description"
          content={blog.metaDescription || blog.excerpt}
        />
        <meta
          name="twitter:image"
          content={`${import.meta.env.VITE_API_URL}/blogs/image/${blog._id}`}
        />

        <link
          rel="canonical"
          href={`https://www.revnorcm.com/news-blogs/${blog.slug}`}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": blog.schemaType || "BlogPosting",
            headline: blog.h1 || blog.title,
            name: blog.title,
            description: blog.metaDescription || blog.excerpt,
            image: `${import.meta.env.VITE_API_URL}/blogs/image/${blog._id}`,
            author: {
              "@type": "Person",
              name: blog.author?.name || "Revno RCM",
            },
            publisher: {
              "@type": "Organization",
              name: blog.publisher || "Revno RCM",
              logo: {
                "@type": "ImageObject",
                url: "https://www.revnorcm.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.revnorcm.com/news-blogs/${blog.slug}`,
            },
            datePublished: blog.publishedAt,
            dateModified: blog.updatedAt || blog.publishedAt,
            keywords: Array.isArray(blog.keywords)
              ? blog.keywords.join(", ")
              : blog.keywords || "",
          })}
        </script>
      </Helmet>

      <main className="revnoBlogDetails">
        {/* HERO */}
        <section
          className="revnoBlogHero"
          style={{
            backgroundImage: `url(${import.meta.env.VITE_API_URL}/blogs/image/${blog._id})`,
          }}
        >
          <div className="revnoBlogHeroOverlay"></div>

          <div className="revnoBlogContainer revnoBlogHeroContent">
            <div className="revnoHeroTop">
              {/* <Link to="/news-blogs" className="revnoBackLink">
                ← Back to Blogs
              </Link> */}

              {blog.category && (
                <span className="revnoBlogCategory">{blog.category}</span>
              )}
            </div>

            <h1>{blog.h1 || blog.title}</h1>

            {blog.excerpt && (
              <p className="revnoBlogExcerpt">{blog.excerpt}</p>
            )}

            <div className="revnoBlogMeta">
              {blog.author && (
                <button
                  type="button"
                  className="revnoAuthorChip"
                  onClick={() => setSelectedAuthor(blog.author)}
                >
                  <img
                    src={`${import.meta.env.VITE_API_URL}/auth/author-image/${blog.author._id}`}
                    alt={blog.author.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(blog.author?.name || "Author") +
                        "&background=029A82&color=fff&size=120";
                    }}
                  />

                  <span>
                    <strong>{blog.author.name}</strong>
                    <small>{blog.author.authorRole || "Author"}</small>
                  </span>
                </button>
              )}

              <span className="revnoBlogDate">
                {blog.publishedAt
                  ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  : ""}
              </span>
            </div>
          </div>
        </section>

        {/* FEATURED IMAGE */}
        <section className="revnoBlogFeatureCompact">
          <div className="revnoBlogContainer">
            <div className="revnoBlogFeatureCard">
              <img
                src={`${import.meta.env.VITE_API_URL}/blogs/image/${blog._id}`}
                alt={blog.title}
                className="revnoBlogFeatureCompactImg"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="revnoBlogContentWrap">
          <div className="revnoBlogContentGrid">
            <article
              className="revnoBlogArticle"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <aside className="revnoBlogSidebar">
              <div className="revnoSidebarBox">
                <h3>Article Details</h3>

                <p>
                  <strong>Category</strong>
                  <span>{blog.category || "Blog"}</span>
                </p>

                <p>
                  <strong>Author</strong>
                  <span>{blog.author?.name || "Author"}</span>
                </p>

                <p>
                  <strong>Published</strong>
                  <span>
                    {blog.publishedAt
                      ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                      : ""}
                  </span>
                </p>
              </div>

              <div className="revnoSidebarBox dark">
                <h3>Need RCM Support?</h3>
                <p>
                  Improve collections, reduce denials, and streamline medical
                  billing with Revno RCM.
                </p>
                <Link to="/contact-us">Get Free Audit</Link>
              </div>
            </aside>
          </div>
        </section>

        {/* COMMENTS */}
        <section className="revnoCommentsSection">
          <div className="revnoBlogContainer">
            <div className="revnoCommentsBox">
              <div className="revnoCommentsHeader">
                <div className="revnoCommentsIcon">
                  <CommentIcon />
                </div>

                <div>
                  <h2>Comments</h2>
                  <p>
                    Share your thoughts, questions, or feedback about this
                    article.
                  </p>
                </div>
              </div>

              <form className="revnoCommentForm" onSubmit={submitComment}>
                <div className="revnoCommentRow">
                  <div className="revnoInputGroup">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={comment.name}
                      onChange={handleCommentChange}
                      required
                    />
                  </div>

                  <div className="revnoInputGroup">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={comment.email}
                      onChange={handleCommentChange}
                    />
                  </div>
                </div>

                <div className="revnoInputGroup">
                  <label>Your Comment</label>
                  <textarea
                    name="message"
                    placeholder="Write your comment here..."
                    value={comment.message}
                    onChange={handleCommentChange}
                    required
                  />
                </div>

                <button type="submit" className="revnoPostCommentBtn">
                  <CommentIcon />
                  Post Comment
                </button>
              </form>

              <div className="revnoCommentList">
                {blog.comments?.length > 0 ? (
                  blog.comments.map((item) => (
                    <div className="revnoCommentCard" key={item._id}>
                      <div className="revnoCommentAvatar">
                        {item.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>

                      <div className="revnoCommentContent">
                        <div className="revnoCommentTop">
                          <strong>{item.name}</strong>
                          <span>
                            {new Date(item.createdAt).toLocaleString()}
                          </span>
                        </div>

                        <p>{item.message}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="revnoNoComments">
                    <CommentIcon />
                    <p>No comments yet. Be the first to comment.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* AUTHOR POPUP */}
      {selectedAuthor && (
        <div
          className="revnoAuthorModalOverlay"
          onClick={() => setSelectedAuthor(null)}
        >
          <div className="revnoAuthorModal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="revnoAuthorModalClose"
              onClick={() => setSelectedAuthor(null)}
            >
              ×
            </button>

            <img
              src={`${import.meta.env.VITE_API_URL}/auth/author-image/${selectedAuthor._id}`}
              alt={selectedAuthor.name}
              className="revnoAuthorModalImg"
              onError={(e) => {
                e.currentTarget.src =
                  "https://ui-avatars.com/api/?name=" +
                  encodeURIComponent(selectedAuthor?.name || "Author") +
                  "&background=029A82&color=fff&size=200";
              }}
            />

            <h2>{selectedAuthor.name}</h2>

            <p className="revnoAuthorRole">
              {selectedAuthor.authorRole || "Author"}
            </p>

            <div className="revnoAuthorInfo">
              {selectedAuthor.email && (
                <p>
                  <strong>Email:</strong> {selectedAuthor.email}
                </p>
              )}

              {selectedAuthor.dob && (
                <p>
                  <strong>DOB:</strong>{" "}
                  {new Date(selectedAuthor.dob).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              )}

              {selectedAuthor.experience && (
                <p>
                  <strong>Experience:</strong> {selectedAuthor.experience}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}