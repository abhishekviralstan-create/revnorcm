import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    authorRole: "",
    experience: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 1024 * 1024) {
      setError("Profile image must be less than 1 MB");
      return;
    }

    setError("");
    setProfileImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (profileImage) {
        data.append("profileImage", profileImage);
      }

      const res = await API.post("/auth/signup", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      localStorage.setItem("blog_token", res.data.token);
      localStorage.setItem("blog_user", JSON.stringify(res.data.user));

      if (res.data.user.access) {
        navigate("/dashboard");
      } else {
        navigate("/access-pending");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card auth-card-wide" onSubmit={handleSignup}>
        <h1>Create Account</h1>
        <p>Start publishing professional blogs.</p>

        {error && <div className="error-box">{error}</div>}

        <label>Profile Image</label>
        <input type="file" accept="image/*" onChange={handleImage} />

        {preview && (
          <img src={preview} alt="Profile preview" className="profile-preview" />
        )}

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />

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

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />

        <label>Role</label>
        <input
          type="text"
          name="authorRole"
          placeholder="Medical Billing Specialist"
          value={form.authorRole}
          onChange={handleChange}
        />

        <label>Experience</label>
        <textarea
          name="experience"
          placeholder="Write author experience, expertise, background..."
          value={form.experience}
          onChange={handleChange}
          rows="4"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Signup"}
        </button>

        <div className="auth-links">
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>

          <span>
            Forgot password?{" "}
            <Link to="/admin/reset-password">Reset Password</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;