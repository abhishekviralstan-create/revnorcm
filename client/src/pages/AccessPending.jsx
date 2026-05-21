import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AccessPending() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("blog_token");
    localStorage.removeItem("blog_user");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Access Pending</h1>

        <p>
          Your account has been created successfully, but admin approval is
          required before you can access the dashboard or publish blogs.
        </p>

        <button type="button" onClick={logout}>
          Logout
        </button>

        <span>
          Go back to website <Link to="/">Home</Link>
        </span>
      </div>
    </div>
  );
}