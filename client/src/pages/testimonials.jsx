import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../css/Testimonials.css";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Practice Administrator",
    title: "Multi-Specialty Medical Group",
    quote:
      "Before Revno RCM, our billing was a nightmare. Within 6 months, our denial rate dropped significantly, AR days improved, and we captured additional revenue.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Managing Partner",
    title: "Cardiology Specialists",
    quote:
      "Cardiology billing is complex, and Revno RCM understood our coding needs. Their team helped reduce denials and gave us clearer monthly revenue cycle reports.",
  },
  {
    name: "Jennifer Roberts",
    role: "Surgery Center Director",
    title: "Orthopedic Surgery Center",
    quote:
      "Revno RCM transformed our revenue cycle from chaotic to streamlined. Clean claims improved quickly, and denied claims were followed up with discipline.",
  },
  {
    name: "David Thompson",
    role: "Chief Operating Officer",
    title: "Primary Care Network",
    quote:
      "Revno RCM brought standardization across our locations. Our staff can now focus more on patient experience instead of billing headaches.",
  },
  {
    name: "Dr. Lisa Anderson",
    role: "Pediatric Practice Owner",
    title: "Pediatric Medical Group",
    quote:
      "Revno RCM understands pediatric billing complexities, from vaccine codes to documentation. Their support improved our cash flow and reduced follow-up pressure.",
  },
  {
    name: "Dr. Robert Martinez",
    role: "Clinical Director",
    title: "Behavioral Health Center",
    quote:
      "Behavioral health billing has unique challenges, and Revno understands therapy codes, credentialing, compliance, and payer follow-up very well.",
  },
];

export default function Testimonials() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const items = document.querySelectorAll(".test-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("test-reveal-show");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    items.forEach((item, index) => {
      item.style.setProperty("--test-delay", `${Math.min(index * 80, 420)}ms`);
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <main className="testimonials-page">
      <Helmet>
        <title>Client Testimonials | Healthcare RCM Reviews | Revno RCM</title>

        <meta
          name="description"
          content="Read Revno RCM client testimonials from healthcare providers who improved denials, AR, collections, and revenue cycle performance."
        />

        <meta
          name="keywords"
          content="Revno RCM testimonials, medical billing reviews, RCM client reviews, healthcare billing testimonials, revenue cycle management reviews"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/testimonials" />

        <meta
          property="og:title"
          content="Client Testimonials | Healthcare RCM Reviews | Revno RCM"
        />
        <meta
          property="og:description"
          content="Healthcare providers share how Revno RCM improved billing performance, denials, AR, and collections."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/testimonials" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Client Testimonials | Healthcare RCM Reviews | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Read Revno RCM client reviews from healthcare providers and practice leaders."
        />
        <meta name="twitter:image" content="https://www.revnorcm.com/og-image.jpg" />
      </Helmet>

      {/* COMPACT HERO */}
      <section className="test-hero">
        <div className="test-container test-reveal">
          <div className="test-breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>
            <span>›</span>
            <span>Testimonials</span>
          </div>

          <h1>Client Testimonials</h1>

          <p>
            Hear from healthcare providers who improved collections, reduced
            denials, and strengthened revenue cycle performance with Revno RCM.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="revno-testimonial-page-section">
        <div className="test-container">
          <div className="test-head test-reveal">
            <span>Client Reviews</span>
            <h2>What Healthcare Teams Say</h2>
            <p>
              Trusted billing support, responsive communication, and clearer
              revenue visibility for healthcare providers.
            </p>
          </div>

          <div className="revno-testimonial-page-grid">
            {testimonials.map((item) => (
              <article className="revno-testimonial-page-card test-reveal" key={item.name}>
                <div className="revno-testimonial-quote">❝</div>

                <div className="revno-testimonial-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>

                <h3>{item.title}</h3>

                <p>{item.quote}</p>

                <div className="revno-testimonial-user">
                  <div className="revno-testimonial-avatar">
                    {item.name.replace("Dr. ", "").charAt(0)}
                  </div>

                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.role}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="testimonial-final-cta">
        <div className="test-container test-reveal">
          <h2>Ready to Improve Your Revenue Cycle?</h2>

          <p>
            Partner with Revno RCM to reduce billing pressure, strengthen claim
            performance, and improve collections.
          </p>

          <Link to="/contact-us">Schedule Your Free Consultation →</Link>
        </div>
      </section>
    </main>
  );
}