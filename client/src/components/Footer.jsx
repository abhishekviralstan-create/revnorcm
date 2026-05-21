import { Link } from "react-router-dom";
import logo from "./logo.png";
import "../css/Footer.css";
import {
  FaYoutube,
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
export default function Footer() {
  const services = [
    ["/rcm-services", "RCM Services"],
    ["/medical-billing", "Medical Billing"],
    ["/charges-entry", "Charges Entry"],
    ["/payment-posting", "Payment Posting"],
    ["/eligibility-and-benifits", "Eligibility & Benefits Verification"],
    ["/medical-coding", "Medical Coding"],
    ["/denial-management", "Denial Management"],
    ["/credentialing", "Credentialing"],
    ["/reporting", "Reporting"],
  ];

  const company = [
    ["/", "Home"],
    ["/about-us", "About Us"],
    ["/our-case-studies", "Our Case Studies"],
    ["/our-testimonials", "Our Testimonials"],
    ["/news-blogs", "News & Blogs"],
    ["/contact-us", "Contact Us"],
  ];

  const compliance = [["/hipaa-compliance", "HIPAA Compliance"]];

  return (
    <footer className="site-footer">
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="container footer-container">
        <div className="footer-top">
          <div className="fbrand">
            <Link to="/" className="footer-logo-wrap">
              <img src={logo} alt="Revno RCM Logo" className="footer-logo" />
            </Link>

            <p>
              Expert revenue cycle management, medical billing, coding,
              credentialing, and HIPAA-compliant RCM services for healthcare
              providers across the United States.
            </p>

            <div className="footer-badges">
              <span>HIPAA Compliant</span>
              <span>AAPC Certified</span>
              <span>AHIMA Certified</span>
            </div>
          </div>

          <div className="footer-cta">
            <h3>Ready to improve your revenue cycle?</h3>
            <p>Get a free RCM audit and discover hidden revenue gaps.</p>
            <Link to="/contact-us" className="footer-cta-btn">
              Get Free Audit
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          <div className="fcol">
            <h4>RCM Services</h4>
            <ul>
              {services.map(([path, label]) => (
                <li key={path}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fcol">
            <h4>Company</h4>
            <ul>
              {company.map(([path, label]) => (
                <li key={path}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fcol">
            <h4>Compliance</h4>
            <ul>
              {compliance.map(([path, label]) => (
                <li key={path}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fcol contact-col">
            <h4>Contact</h4>

            <div className="footer-address-box">
              <h5>Operations Office - US</h5>
              <p>
               30 N Gould St Ste R Sheridan,
                <br />
               WY 82801
              </p>
            </div>

            <div className="footer-address-box">
              <h5>Corporate Office - Mohali, India</h5>
              <p>
                Vista Business Tower, D-270, First Floor-103A, Phase 8B,
                <br />
                Industrial Area, Sector 74,
                <br />
               SAS Nagar, Punjab, 160055
              </p>
            </div>

            <a href="tel:+91-9120010883" className="footer-phone">
             +91-9120010883
            </a>

            <a href="mailto:info@revnorcm.com" className="footer-mail">
              info@revnorcm.com
            </a>
            <div className="footer-social-icons">
              <a href="https://www.youtube.com/@Revnorcm" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>

              <a href="https://t.me/revnorcm" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegramPlane />
              </a>

              <a href="https://www.facebook.com/revnorcm/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="https://x.com/revnorcm" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>

              <a href="https://www.linkedin.com/company/revnorcm" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href="https://www.instagram.com/revnorcm/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bot">
          <span>
            © 2024-2026 RevnoRCM. All rights reserved. |{" "}
            <a href="https://www.revnorcm.com/">revnorcm.com</a>
          </span>

          <span className="footer-bottom-note">
            Secure Healthcare Revenue Cycle Support
          </span>
        </div>
      </div>
    </footer>
  );
}