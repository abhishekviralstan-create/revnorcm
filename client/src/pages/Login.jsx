import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import "../css/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("blog_token", res.data.token);
      localStorage.setItem("blog_user", JSON.stringify(res.data.user));

      if (res.data.user.access) {
        navigate("/dashboard");
      } else {
        navigate("/access-pending");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-page">
      <div className="login-bg-grid"></div>
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

      <div className="login-card">

        <div className="login-header">
          <span>Author Dashboard</span>
          <h1>Welcome Back</h1>
          <p>Login to manage your blogs and content dashboard.</p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="login-field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={loading} className="login-btn">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="login-links">
          <p>
            New author? <Link to="/signup">Create account</Link>
          </p>

          <p>
            Forgot password?{" "}
            <Link to="/admin/reset-password">Reset Password</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;