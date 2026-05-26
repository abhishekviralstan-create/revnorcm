import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import contact from "../assests/home/free-consultation.avif";
import {
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  // support strip icons
  FaFileInvoiceDollar,
  FaBan,
  FaIdBadge,
  FaStethoscope,
  FaCreditCard,
  FaLock,
} from "react-icons/fa";
import "../css/contact.css";

export default function Contact() {
  const navigate = useNavigate();

  const GOOGLE_SHEET_WEBHOOK_URL =
    "https://script.google.com/macros/s/AKfycbwG2wY3LRGXNoytvHELIcL2SvntHXeBMufHJjg2DGhiJusNLVMIcwQoCox6pQkuS5KA4g/exec";

  const contactDetails = {
    phone: " +1 (307) 266-7879",
    email: "info@revnorcm.com",
    usOffice: {
      title: "Operations Office - US",
      address: "30 N Gould St Ste R Sheridan, WY 82801",
    },
    indiaOffice: {
      title: "Corporate Office - Mohali, India",
      address:
        "Vista Business Tower, D-270, First Floor-103A, Phase 8B, Industrial Area, Sector 74, SAS Nagar, Punjab, 160055",
    },
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/revnorcm/",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter / X",
      url: "https://x.com/revnorcm",
      icon: <FaTwitter />,
    },
    {
      name: "Telegram",
      url: "https://t.me/revnorcm",
      icon: <FaTelegram />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@Revnorcm",
      icon: <FaYoutube />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/revnorcm",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/revnorcm/",
      icon: <FaFacebookF />,
    },
  ];

  const nextSteps = [
    {
      number: "01",
      title: "Dedicated Consultant Assigned",
      desc: "A specialist will reach out within 1 business day to schedule your consultation.",
    },
    {
      number: "02",
      title: "Free Billing Workflow Review",
      desc: "We review your workflow, identify pain points, and create personalized recommendations at no cost.",
    },
    {
      number: "03",
      title: "Our Commitment to You",
      desc: "Honest expert guidance, transparent communication, and long-term revenue cycle partnership.",
    },
  ];

  const supportCards = [
    {
      title: "Medical Billing",
      icon: <FaFileInvoiceDollar />,
    },
    {
      title: "Denial Management",
      icon: <FaBan />,
    },
    {
      title: "Credentialing",
      icon: <FaIdBadge />,
    },
    {
      title: "Medical Coding",
      icon: <FaStethoscope />,
    },
    {
      title: "Payment Posting",
      icon: <FaCreditCard />,
    },
    {
      title: "HIPAA-Compliant RCM",
      icon: <FaLock />,
    },
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    practiceEmail: "",
    phone: "",
    specialty: "",
    claimVolume: "",
    billingChallenges: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handle = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!form.practiceEmail.trim()) {
      newErrors.practiceEmail = "Practice email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.practiceEmail)) {
      newErrors.practiceEmail = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{8,20}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.specialty.trim()) {
      newErrors.specialty = "Practice type / specialty is required.";
    }

    if (!form.claimVolume.trim()) {
      newErrors.claimVolume = "Monthly claim volume is required.";
    }

    if (
      form.billingChallenges.trim() &&
      form.billingChallenges.trim().length < 10
    ) {
      newErrors.billingChallenges =
        "Please write at least 10 characters about your challenge.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      practiceEmail: "",
      phone: "",
      specialty: "",
      claimVolume: "",
      billingChallenges: "",
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("firstName", form.firstName.trim());
      formData.append("lastName", form.lastName.trim());
      formData.append("practiceEmail", form.practiceEmail.trim());
      formData.append("phone", form.phone.trim());
      formData.append("specialty", form.specialty.trim());
      formData.append("claimVolume", form.claimVolume.trim());
      formData.append("billingChallenges", form.billingChallenges.trim());
      formData.append("page", "Contact Revno RCM");
      formData.append("submittedAt", new Date().toLocaleString());

      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSubmitted(true);
      setErrors({});
      resetForm();

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Google Sheet submit error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const items = document.querySelectorAll(".contact-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-reveal-show");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    items.forEach((item, index) => {
      item.style.setProperty(
        "--contact-delay",
        `${Math.min(index * 70, 420)}ms`
      );
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Revno RCM",
    url: "https://www.revnorcm.com/contact-us",
    description:
      "Contact Revno RCM for a free revenue cycle management consultation. Our medical billing and RCM experts are ready to help your practice increase collections and reduce denials.",
    mainEntity: {
      "@type": "Organization",
      name: "Revno RCM",
      url: "https://www.revnorcm.com/",
      email: contactDetails.email,
      telephone: contactDetails.phone,
      address: [
        {
          "@type": "PostalAddress",
          name: contactDetails.usOffice.title,
          streetAddress: "30 N Gould St Ste R",
          addressLocality: "Sheridan",
          addressRegion: "WY",
          postalCode: "82801",
          addressCountry: "US",
        },
        {
          "@type": "PostalAddress",
          name: contactDetails.indiaOffice.title,
          streetAddress:
            "Vista Business Tower, D-270, First Floor-103A, Phase 8B, Industrial Area, Sector 74",
          addressLocality: "SAS Nagar",
          addressRegion: "Punjab",
          postalCode: "160055",
          addressCountry: "IN",
        },
      ],
      sameAs: socialLinks.map((item) => item.url),
    },
  };

  return (
    <main className="contact-page">
      <Helmet>
        <title>
          Contact Revno RCM | Free RCM & Medical Billing Consultation
        </title>

        <meta
          name="description"
          content="Contact Revno RCM for a free revenue cycle management consultation. Our medical billing and RCM experts are ready to help your practice increase collections and reduce denials."
        />

        <meta
          name="keywords"
          content="contact medical billing company, free RCM consultation, medical billing consultation, contact Revno RCM, healthcare billing support"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/contact-us" />

        <meta
          property="og:title"
          content="Contact Revno RCM | Free RCM & Medical Billing Consultation"
        />
        <meta
          property="og:description"
          content="Connect with Revno RCM for medical billing, denial management, credentialing, coding, reporting, and HIPAA-compliant RCM support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/contact-us" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Revno RCM | Free RCM Consultation"
        />
        <meta
          name="twitter:description"
          content="Contact Revno RCM for medical billing and revenue cycle management support."
        />
        <meta name="twitter:image" content="https://www.revnorcm.com/og-image.jpg" />

        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {submitted && (
        <div className="contact-toast">
          Thank you! Your consultation request has been submitted successfully.
        </div>
      )}

      {/* COMPACT HERO */}
      <section className="contact-hero">
        <div className="contact-container contact-reveal">
          <div className="contact-breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>
            <span>›</span>
            <span>Contact Us</span>
          </div>

          <h1>Contact Revno RCM</h1>

          <p>
            Connect with our medical billing and revenue cycle experts for
            denial management, credentialing, coding, payment posting, reporting,
            and HIPAA-compliant RCM support.
          </p>
        </div>
      </section>

      {/* SUPPORT STRIP */}
      <section className="contact-support-strip">
        <div className="contact-container">
          <div className="contact-support-grid">
            {supportCards.map((item) => (
              <div className="contact-support-card contact-reveal" key={item.title}>
                <div className="contact-support-icon">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE CONSULTATION SECTION */}
      <section className="contact-audit-section">
        <div className="contact-container contact-audit-layout">
          <div className="contact-audit-image contact-reveal">
            <img src={contact} alt="Free RCM consultation" />

            <div className="audit-image-card">
              <strong>Free RCM Audit</strong>
              <span>Improve collections. Reduce denials.</span>
            </div>
          </div>

          <div className="contact-audit-form-wrap contact-reveal">
            <div className="audit-form-head">
              <span>Free Consultation</span>

              <h2>Request Free RCM Audit</h2>

              <p>
                Share your practice details and our billing team will connect
                with you to understand your revenue cycle challenges.
              </p>
            </div>

            <form className="audit-form" onSubmit={submit} noValidate>
              <div className="form-row">
                <div>
                  <label>First Name *</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handle}
                    placeholder="Dr. Ricky"
                  />
                  {errors.firstName && (
                    <small className="form-error">{errors.firstName}</small>
                  )}
                </div>

                <div>
                  <label>Last Name *</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handle}
                    placeholder="Collins"
                  />
                  {errors.lastName && (
                    <small className="form-error">{errors.lastName}</small>
                  )}
                </div>
              </div>

              <label>Practice Email *</label>
              <input
                type="email"
                name="practiceEmail"
                value={form.practiceEmail}
                onChange={handle}
                placeholder="info@revnorcm.com"
              />
              {errors.practiceEmail && (
                <small className="form-error">{errors.practiceEmail}</small>
              )}

              <label>Phone Number *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handle}
                placeholder=" +1 (307) 266-7879"
              />
              {errors.phone && (
                <small className="form-error">{errors.phone}</small>
              )}

              <div className="form-row">
                <div>
                  <label>Practice Type / Specialty *</label>
                  <input
                    name="specialty"
                    value={form.specialty}
                    onChange={handle}
                    placeholder="Cardiology, Dental, Mental Health..."
                  />
                  {errors.specialty && (
                    <small className="form-error">{errors.specialty}</small>
                  )}
                </div>

                <div>
                  <label>Monthly Claim Volume *</label>
                  <input
                    name="claimVolume"
                    value={form.claimVolume}
                    onChange={handle}
                    placeholder="Example: 500 - 1000 claims"
                  />
                  {errors.claimVolume && (
                    <small className="form-error">{errors.claimVolume}</small>
                  )}
                </div>
              </div>

              <label>What billing challenges are you facing?</label>
              <textarea
                name="billingChallenges"
                value={form.billingChallenges}
                onChange={handle}
                placeholder="e.g. High denial rates, slow collections, coding errors, payer disputes..."
              />
              {errors.billingChallenges && (
                <small className="form-error">
                  {errors.billingChallenges}
                </small>
              )}

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Request Free RCM Audit →"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-main-section">
        <div className="contact-container">
          <div className="contact-main-grid">
            <div className="contact-info-panel contact-reveal">
              <span className="section-kicker">Get In Touch</span>

              <h2>Reach Revno RCM Across the US & India</h2>

              <p>
                Connect with our team for medical billing, RCM, denial
                management, credentialing, payment posting, and HIPAA-compliant
                billing support.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-card">
                  <FaMapMarkerAlt />
                  <div>
                    <strong>{contactDetails.usOffice.title}</strong>
                    <p>{contactDetails.usOffice.address}</p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <FaMapMarkerAlt />
                  <div>
                    <strong>{contactDetails.indiaOffice.title}</strong>
                    <p>{contactDetails.indiaOffice.address}</p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <FaPhoneAlt />
                  <div>
                    <strong>Phone</strong>
                    <a href={`tel:${contactDetails.phone}`}>
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <FaEnvelope />
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${contactDetails.email}`}>
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-after-panel contact-reveal">
              <span className="section-kicker">What Happens Next</span>

              <h2>After You Contact Us</h2>

              <div className="after-steps">
                {nextSteps.map((item) => (
                  <div className="after-step" key={item.title}>
                    <div className="after-num">{item.number}</div>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-social-box">
                <h4>Follow Revno RCM</h4>

                <div className="contact-social-icons">
                  {socialLinks.map((item) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      title={item.name}
                      key={item.name}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="direct-box">
                <p>Prefer to Talk Directly?</p>
                <a href={`mailto:${contactDetails.email}`}>
                  {contactDetails.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONTACT STRIP */}
      <section className="contact-final-strip">
        <div className="contact-container contact-reveal">
          <h2>Need Medical Billing Support?</h2>

          <p>
            Get expert support for billing, coding, denial management,
            credentialing, reporting, and HIPAA-compliant RCM operations.
          </p>

          <a href={`mailto:${contactDetails.email}`}>
            Contact Revno RCM Now <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}