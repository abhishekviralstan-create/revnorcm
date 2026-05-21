import React, { useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

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
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleResetPassword}>
        <h1>Admin Reset Password</h1>
        <p>Reset user password from backend securely.</p>

        {message && <div className="success-box">{message}</div>}
        {error && <div className="error-box">{error}</div>}

        <label>User Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter user email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>New Password</label>
        <input
          type="text"
          name="newPassword"
          placeholder="Enter new password"
          value={form.newPassword}
          onChange={handleChange}
          required
        />

        <label>Admin Secret</label>
        <input
          type="password"
          name="adminSecret"
          placeholder="Enter admin secret"
          value={form.adminSecret}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        <span>
          Back to <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}