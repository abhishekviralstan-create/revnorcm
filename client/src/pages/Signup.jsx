import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import "../css/signup.css";

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
    <section className="signup-page">
      <div className="signup-grid-bg"></div>
      <div className="signup-glow signup-glow-one"></div>
      <div className="signup-glow signup-glow-two"></div>

      <div className="signup-wrapper">
        <div className="signup-info">
          <span className="signup-badge">Author Registration</span>

          <h1>Create your author account</h1>

          <p>
            Join the blog dashboard to publish professional articles, manage
            your author profile and submit content for approval.
          </p>

          <div className="signup-info-cards">
            <div>
              <strong>Profile Approval</strong>
              <span>Your account will be reviewed before dashboard access.</span>
            </div>

            <div>
              <strong>Professional Blogs</strong>
              <span>Create and manage high-quality blog content easily.</span>
            </div>

            <div>
              <strong>Secure Dashboard</strong>
              <span>Your author profile and content stay protected.</span>
            </div>
          </div>
        </div>

        <form className="signup-card" onSubmit={handleSignup}>
          <div className="signup-card-header">
            <h2>Create Account</h2>
            <p>Start publishing professional blogs.</p>
          </div>

          {error && <div className="signup-error">{error}</div>}

          <div className="signup-upload-block">
            <div className="signup-upload-preview">
              {preview ? (
                <img src={preview} alt="Profile preview" />
              ) : (
                <span>+</span>
              )}
            </div>

            <div className="signup-upload-content">
              <label htmlFor="profileImage">Profile Image</label>
              <p>Upload JPG, PNG or WEBP image under 1 MB.</p>

              <input
                id="profileImage"
                type="file"
                accept="image/*"
                onChange={handleImage}
              />
            </div>
          </div>

          <div className="signup-form-grid">
            <div className="signup-field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="signup-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="signup-field">
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

            <div className="signup-field">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
              />
            </div>

            <div className="signup-field signup-full">
              <label>Role</label>
              <input
                type="text"
                name="authorRole"
                placeholder="Medical Billing Specialist"
                value={form.authorRole}
                onChange={handleChange}
              />
            </div>

            <div className="signup-field signup-full">
              <label>Experience</label>
              <textarea
                name="experience"
                placeholder="Write author experience, expertise, background..."
                value={form.experience}
                onChange={handleChange}
                rows="4"
              />
            </div>
          </div>

          <button className="signup-btn" type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </button>

          <div className="signup-links">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>

            <p>
              Forgot password?{" "}
              <Link to="/admin/reset-password">Reset Password</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;