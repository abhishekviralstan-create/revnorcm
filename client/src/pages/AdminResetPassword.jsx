import React, { useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";
import "../css/forget.css";

export default function AdminResetPassword() {
  const [form, setForm] = useState({
    email: "",
    newPassword: "",
    adminSecret: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await API.post("/auth/reset-password", form);

      setMessage(res.data.message || "Password reset successfully");

      setForm({
        email: "",
        newPassword: "",
        adminSecret: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Password reset failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="admin-reset-page mt-2">
      <div className="admin-reset-grid"></div>
      <div className="admin-reset-glow admin-reset-glow-one"></div>
      <div className="admin-reset-glow admin-reset-glow-two"></div>

      <div className="admin-reset-wrapper">
        <div className="admin-reset-info">
          <h1>Reset user password securely</h1>

          <p>
            Use your admin secret to update an author password directly from the
            backend authentication system.
          </p>

          <div className="admin-reset-points">
            <div>
              <strong>Protected Reset</strong>
              <span>Requires admin secret verification</span>
            </div>

            <div>
              <strong>User Recovery</strong>
              <span>Reset author password safely</span>
            </div>

            <div>
              <strong>Instant Update</strong>
              <span>Password changes after successful request</span>
            </div>
          </div>
        </div>

        <form className="admin-reset-card" onSubmit={handleResetPassword}>
          <div className="admin-reset-icon">🔐</div>

          <div className="admin-reset-header">
            <h2>Admin Reset Password</h2>
            <p>Reset user password from backend securely.</p>
          </div>

          {message && <div className="admin-success-box">{message}</div>}
          {error && <div className="admin-error-box">{error}</div>}

          <div className="admin-reset-form">
            <div className="admin-reset-field">
              <label>User Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter user email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="admin-reset-field">
              <label>New Password</label>
              <input
                type="text"
                name="newPassword"
                placeholder="Enter new password"
                value={form.newPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="admin-reset-field">
              <label>Admin Secret</label>
              <input
                type="password"
                name="adminSecret"
                placeholder="Enter admin secret"
                value={form.adminSecret}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="admin-reset-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </div>

          <div className="admin-reset-links">
            <span>
              Back to <Link to="/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}