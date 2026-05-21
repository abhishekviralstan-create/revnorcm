import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("blog_user"));

  const handleLogout = () => {
    localStorage.removeItem("blog_token");
    localStorage.removeItem("blog_user");
    navigate("/login");
  };

  const userId = user?.id || user?._id;

  const profileImage = userId
    ? `${import.meta.env.VITE_API_URL}/auth/author-image/${userId}?t=${Date.now()}`
    : "";

  return (
    <div className="revnoDash">
      <div className="revnoDash__container">
        <header className="revnoDash__header">
          <div className="revnoDash__profile">
            <div className="revnoDash__avatarBox">
              <img
                src={profileImage}
                alt={user?.name || "Author"}
                className="revnoDash__avatar"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://ui-avatars.com/api/?name=" +
                    encodeURIComponent(user?.name || "Author") +
                    "&background=029A82&color=fff&size=200";
                }}
              />
            </div>

            <div className="revnoDash__profileText">
              <span>Author Dashboard</span>
              <h1>{user?.name || "Author Name"}</h1>
              <p>{user?.authorRole || user?.role || "Author"}</p>

              <div className="revnoDash__badges">
                {user?.email && <small>{user.email}</small>}

                <small className={user?.access ? "isApproved" : "isPending"}>
                  {user?.access ? "Access Approved" : "Access Pending"}
                </small>
              </div>
            </div>
          </div>

          <button className="revnoDash__logout" onClick={handleLogout}>
            Logout
          </button>
        </header>

        <section className="revnoDash__cards">
          <Link to="/dashboard/create-blog" className="revnoDash__card">
            <div className="revnoDash__icon">01</div>
            <h2>Create Blog</h2>
            <p>
              Add a new blog with featured image, SEO meta, category, excerpt
              and rich content.
            </p>
            <strong>Open Section →</strong>
          </Link>

          <Link to="/dashboard/manage-blogs" className="revnoDash__card">
            <div className="revnoDash__icon">02</div>
            <h2>Manage Blogs</h2>
            <p>
              Edit, update or delete your published blogs from one central
              dashboard.
            </p>
            <strong>Manage Now →</strong>
          </Link>

          <Link to="/news-blogs" className="revnoDash__card">
            <div className="revnoDash__icon">03</div>
            <h2>View Website Blogs</h2>
            <p>
              Preview how your blogs appear on the website frontend in a
              responsive layout.
            </p>
            <strong>Preview Blogs →</strong>
          </Link>
        </section>
      </div>
    </div>
  );
}