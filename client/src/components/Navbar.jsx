import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setAboutOpen(false);
    setServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="main-header">
      <Link to="/" onClick={closeAll} className="logo-link">
        <img src={logo} alt="Revno RCM" className="site-logo" />
      </Link>

      <nav className={`nav-menu ${mobileOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={closeAll}>
          Home
        </NavLink>

        <div className="service-dropdown">
          <button
            type="button"
            onClick={() => {
              setAboutOpen(!aboutOpen);
              setServicesOpen(false);
            }}
            className="service-btn"
          >
            About Us
            <span className={`arrow ${aboutOpen ? "open" : ""}`} />
          </button>

          {aboutOpen && (
            <div className="dropdown-menu">
              <NavLink to="/about-us" onClick={closeAll}>
                About Revno RCM
              </NavLink>
              <NavLink to="/our-case-studies" onClick={closeAll}>
                Case Studies
              </NavLink>
              <NavLink to="/our-testimonials" onClick={closeAll}>
                Testimonials
              </NavLink>
            </div>
          )}
        </div>

        <div className="service-dropdown">
          <button
            type="button"
            onClick={() => {
              setServicesOpen(!servicesOpen);
              setAboutOpen(false);
            }}
            className="service-btn"
          >
            Our Services
            <span className={`arrow ${servicesOpen ? "open" : ""}`} />
          </button>

          {servicesOpen && (
            <div className="dropdown-menu">
              <NavLink to="/rcm-services" onClick={closeAll}>
                RCM Services
              </NavLink>
              <NavLink to="/medical-billing" onClick={closeAll}>
                Medical Billing
              </NavLink>
              <NavLink to="/charges-entry" onClick={closeAll}>
                Charges Entry
              </NavLink>
              <NavLink to="/payment-posting" onClick={closeAll}>
                Payment Posting
              </NavLink>
              <NavLink to="/eligibility-and-benifits" onClick={closeAll}>
                Eligibility & Benefits Verification
              </NavLink>
              <NavLink to="/medical-coding" onClick={closeAll}>
                Medical Coding
              </NavLink>
              <NavLink to="/denial-management" onClick={closeAll}>
                Denial Management
              </NavLink>
              <NavLink to="/credentialing" onClick={closeAll}>
                Credentialing
              </NavLink>
              <NavLink to="/reporting" onClick={closeAll}>
                Reporting
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/hipaa-compliance" onClick={closeAll}>
          Hippa Compliance
        </NavLink>
        <NavLink to="/news-blogs" onClick={closeAll}>
          News & Blogs
        </NavLink>
        <NavLink to="/contact-us" onClick={closeAll}>
          Contact Us
        </NavLink>
      </nav>

      <div className="nav-actions">
        <Link to="/contact-us" className="nav-btn">
          Free Audit
        </Link>
        <Link to="/contact-us" className="nav-btn">
          Get Started
        </Link>

        <button
          type="button"
          className={`hamburger-btn ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}