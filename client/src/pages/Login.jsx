import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";

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
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <h1>Welcome Back</h1>
        <p>Login to manage your blogs.</p>

        {error && <div className="error-box">{error}</div>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

       <div className="auth-links">
  <span>
    New author? <Link to="/signup">Create account</Link>
  </span>

  <span>
    Forgot password? <Link to="/admin/reset-password">Reset Password</Link>
  </span>
</div>
      </form>
    </div>
  );
};

export default Login;