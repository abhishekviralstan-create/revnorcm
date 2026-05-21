import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/hippa.css";

export default function HIPAA() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbwQ8h_9U6PYpUiGU0m5yC6_7mZXgOnKjsqc1S3XlTNE8tYItimZrGwXvANJyBVG_j943w/exec";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceType: "",
    monthlyClaimVolume: "",
    challenges: "",
  });

  const features = [
    "Secure PHI and ePHI handling across billing and RCM workflows",
    "Encrypted document exchange for medical billing information",
    "Access control for patient data, billing records, and claim documents",
    "HIPAA-focused staff training and secure data handling practices",
    "Administrative safeguards for privacy, policies, and documentation",
    "Technical safeguards for secure communication and digital workflows",
    "Physical safeguards for controlled access and protected information",
    "Regular monitoring to reduce privacy and compliance risks",
    "Secure revenue cycle support for healthcare providers across the US",
    "Compliance-focused billing processes designed to protect patient trust",
  ];

  const policies = [
    {
      title: "Confidentiality Policy",
      desc: "We protect patient information with controlled access, secure handling, and confidentiality-focused billing workflows.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Security Policy",
      desc: "Our secure process helps protect healthcare data through encryption, access control, and compliance monitoring.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Employee Policy",
      desc: "Team members follow internal training, confidentiality practices, and secure PHI handling standards.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const benefits = [
    "HIPAA-compliant billing and RCM processes",
    "Secure handling of PHI and ePHI",
    "Reduced data exposure and compliance risk",
    "Encrypted communication and document exchange",
    "Better control over patient privacy",
    "Reliable compliance support for healthcare providers",
  ];

  const trustStats = [
    {
      value: "PHI",
      label: "Protected Health Information Handling",
    },
    {
      value: "ePHI",
      label: "Secure Electronic Patient Data Workflow",
    },
    {
      value: "RCM",
      label: "Compliance-Focused Billing Operations",
    },
  ];

  const faqs = [
    {
      question: "What makes Revno RCM HIPAA-compliant?",
      answer:
        "Revno RCM follows secure workflows for patient data handling, encrypted communication, controlled access, compliance training, and protected billing documentation.",
    },
    {
      question: "Do you protect PHI and ePHI during billing operations?",
      answer:
        "Yes. Our billing and RCM processes are designed to protect PHI and ePHI through secure document exchange, controlled access, and compliance-focused handling.",
    },
    {
      question: "Why is HIPAA compliance important for medical billing?",
      answer:
        "Medical billing involves sensitive patient information, insurance details, claims, coding data, and payment records. HIPAA compliance helps reduce privacy risks and protect patient trust.",
    },
    {
      question: "Can Revno RCM help reduce compliance risks?",
      answer:
        "Yes. We support healthcare providers with secure billing workflows, documentation discipline, trained teams, and compliance-focused revenue cycle processes.",
    },
    {
      question: "Do you support US healthcare providers?",
      answer:
        "Yes. Revno RCM provides HIPAA-compliant medical billing and revenue cycle support for healthcare providers across the United States.",
    },
  ];

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      practiceType: "",
      monthlyClaimVolume: "",
      challenges: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      page: "HIPAA Compliance",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      practiceType: formData.practiceType,
      monthlyClaimVolume: formData.monthlyClaimVolume,
      challenges: formData.challenges,
      submittedAt: new Date().toLocaleString(),
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload).toString(),
      });

      alert("Form submitted successfully. Our team will contact you soon.");
      resetForm();
    } catch (error) {
      console.error("Google Sheet submit error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const items = document.querySelectorAll(".hipaa-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hipaa-reveal-show");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    items.forEach((item, index) => {
      item.style.setProperty("--hipaa-delay", `${Math.min(index * 70, 420)}ms`);
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <main className="hipaa-page">
      <Helmet>
        <title>
          HIPAA-Compliant Medical Billing | Secure RCM Services | Revno RCM
        </title>

        <meta
          name="description"
          content="Revno RCM provides HIPAA-compliant medical billing and secure RCM services with encrypted workflows, patient data protection, and compliance-focused revenue cycle support."
        />

        <meta
          name="keywords"
          content="HIPAA-compliant medical billing, secure RCM services, HIPAA compliance, patient data protection, healthcare data security, secure medical billing"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link
          rel="canonical"
          href="https://www.revnorcm.com/hipaa-compliance"
        />

        <meta
          property="og:title"
          content="HIPAA-Compliant Medical Billing | Secure RCM Services | Revno RCM"
        />
        <meta
          property="og:description"
          content="Secure medical billing and HIPAA-focused revenue cycle support for healthcare providers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta
          property="og:url"
          content="https://www.revnorcm.com/hipaa-compliance"
        />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HIPAA-Compliant Medical Billing | Secure RCM Services"
        />
        <meta
          name="twitter:description"
          content="Protect patient data and manage medical billing with HIPAA-focused RCM workflows."
        />
        <meta name="twitter:image" content="https://www.revnorcm.com/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.revnorcm.com/#organization",
                name: "Revno RCM",
                url: "https://www.revnorcm.com/",
                logo: "https://www.revnorcm.com/logo.png",
              },
              {
                "@type": "Service",
                name: "HIPAA-Compliant Medical Billing",
                provider: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
                serviceType: [
                  "HIPAA-Compliant Medical Billing",
                  "Secure RCM Services",
                  "Patient Data Protection",
                  "Healthcare Data Security",
                ],
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                url: "https://www.revnorcm.com/hipaa-compliance",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
          })}
        </script>
      </Helmet>

      {/* COMPACT HERO */}
      <section className="hipaa-hero">
        <div className="hipaa-container hipaa-reveal">
          <div className="hipaa-breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>
            <span>›</span>
            <span>HIPAA Compliance</span>
          </div>

          <h1>HIPAA-Compliant Medical Billing</h1>

          <p>
            Protect patient data, reduce compliance risk, and manage medical
            billing workflows with secure HIPAA-focused revenue cycle support.
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="hipaa-trust-strip">
        <div className="hipaa-container">
          <div className="hipaa-trust-grid">
            {trustStats.map((item) => (
              <div className="hipaa-trust-card hipaa-reveal" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="hipaa-section hipaa-white">
        <div className="hipaa-container hipaa-split-grid">
          <div className="hipaa-copy hipaa-reveal">
            <span className="hipaa-kicker">What We Do</span>

            <h2>Secure HIPAA Compliance Support for Healthcare Providers</h2>

            <div className="hipaa-line" />

            <p>
              At Revno RCM, security and privacy are built into every billing,
              coding, credentialing, and revenue cycle process. Our
              HIPAA-compliant workflow helps protect patient data while
              supporting reliable medical billing operations.
            </p>

            <p>
              We follow compliance-focused safeguards for data transmission,
              documentation, access control, and secure communication so your
              practice can operate with confidence.
            </p>

            <button type="button" className="hipaa-btn" onClick={() => goToPage("/contact-us")}>
              Request Compliance Review →
            </button>
          </div>

          <div className="hipaa-image-card hipaa-reveal">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=80"
              alt="HIPAA secure healthcare billing"
            />

            <div className="hipaa-floating-card">
              <strong>HIPAA-Focused</strong>
              <span>Secure billing operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="hipaa-section hipaa-soft">
        <div className="hipaa-container hipaa-features-layout">
          <div className="hipaa-feature-image hipaa-reveal">
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1100&q=80"
              alt="HIPAA secure medical billing support"
            />

            <div>
              <span>HIPAA Secure</span>
              <h3>Protected Revenue Cycle Workflow</h3>
              <p>Secure billing operations with patient data protection.</p>
            </div>
          </div>

          <div className="hipaa-copy hipaa-reveal">
            <span className="hipaa-kicker">Key Features & Capabilities</span>

            <h2>Complete HIPAA Compliance Support</h2>

            <div className="hipaa-line" />

            <div className="hipaa-feature-list">
              {features.map((item) => (
                <div className="hipaa-feature-item" key={item}>
                  <strong>✓</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY MATTERS */}
      <section className="hipaa-section hipaa-white">
        <div className="hipaa-container hipaa-split-grid reverse">
          <div className="hipaa-image-card hipaa-reveal">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1100&q=80"
              alt="Healthcare compliance and data protection"
            />

            <div className="hipaa-floating-card green">
              <strong>Protected Data</strong>
              <span>Secure PHI workflows</span>
            </div>
          </div>

          <div className="hipaa-copy hipaa-reveal">
            <span className="hipaa-kicker">Why This Matters</span>

            <h2>Compliance Gaps Can Directly Hurt Trust & Cash Flow</h2>

            <div className="hipaa-line" />

            <p>
              When patient data is not handled securely, healthcare practices can
              face operational disruption, privacy risk, and loss of patient
              trust. HIPAA-compliant billing protects both your practice and
              your patients.
            </p>

            <p>
              Revno RCM helps reduce risk by building secure data handling,
              encrypted communication, and compliance-focused workflows into your
              revenue cycle operations.
            </p>
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="hipaa-section hipaa-soft">
        <div className="hipaa-container">
          <div className="hipaa-head hipaa-reveal">
            <span>Credibility</span>
            <h2>Compliance Policies We Follow</h2>
            <p>
              Our HIPAA-focused processes are designed to protect patient trust,
              improve security discipline, and support reliable billing
              operations.
            </p>
          </div>

          <div className="hipaa-policy-grid">
            {policies.map((policy, index) => (
              <article className="hipaa-policy-card hipaa-reveal" key={policy.title}>
                <div className="hipaa-policy-image">
                  <img src={policy.image} alt={policy.title} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="hipaa-policy-body">
                  <h3>{policy.title}</h3>
                  <p>{policy.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="hipaa-benefit-section">
        <div className="hipaa-container hipaa-benefit-layout">
          <div className="hipaa-copy white hipaa-reveal">
            <span className="hipaa-kicker">Key Benefits</span>

            <h2>Secure RCM Support Built Around Compliance</h2>

            <p>
              Our HIPAA-focused medical billing support helps providers protect
              patient information, reduce compliance risk, and run revenue cycle
              operations with stronger control.
            </p>
          </div>

          <div className="hipaa-benefit-list">
            {benefits.map((item) => (
              <div className="hipaa-benefit-item hipaa-reveal" key={item}>
                <strong>✓</strong>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT FORM */}
      <section className="hipaa-section hipaa-white">
        <div className="hipaa-container hipaa-audit-layout">
          <div className="hipaa-copy hipaa-reveal">
            <span className="hipaa-kicker">Free RCM Audit</span>

            <h2>Request a HIPAA-Focused Billing Review</h2>

            <div className="hipaa-line" />

            <p>
              Share your practice details and our team will review your billing,
              compliance, denial, and revenue cycle challenges.
            </p>

            <p>
              This form connects to your same Google Sheet endpoint and keeps
              the HIPAA page lead capture separate from the hero section.
            </p>
          </div>

          <div className="hipaa-form-card hipaa-reveal">
            <form onSubmit={handleSubmit}>
              <div className="hipaa-form-row">
                <div className="hipaa-field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Dr. Amanda"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="hipaa-field">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Collins"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="hipaa-field">
                <label>Practice Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="billing@yourpractice.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="hipaa-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="hipaa-form-row">
                <div className="hipaa-field">
                  <label>Practice Type / Specialty</label>
                  <input
                    type="text"
                    name="practiceType"
                    placeholder="Cardiology, Dental..."
                    value={formData.practiceType}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="hipaa-field">
                  <label>Monthly Claim Volume</label>
                  <input
                    type="text"
                    name="monthlyClaimVolume"
                    placeholder="500 - 1000 claims"
                    value={formData.monthlyClaimVolume}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="hipaa-field">
                <label>What billing challenges are you facing?</label>
                <textarea
                  name="challenges"
                  placeholder="High denial rates, slow collections, payer disputes..."
                  value={formData.challenges}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? "Submitting..."
                  : "Request Free RCM Audit & Consultation →"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hipaa-faq-section">
        <div className="hipaa-container">
          <div className="hipaa-head hipaa-reveal">
            <span>Frequently Asked Questions</span>
            <h2>HIPAA Compliance FAQs</h2>
            <p>
              Answers to common questions about secure medical billing and
              compliance-focused RCM support.
            </p>
          </div>

          <div className="hipaa-faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`hipaa-faq-item hipaa-reveal ${
                  activeFaq === index ? "active" : ""
                }`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="hipaa-faq-question"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>
                  <strong>{activeFaq === index ? "−" : "+"}</strong>
                </button>

                {activeFaq === index && (
                  <div className="hipaa-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hipaa-final-cta">
        <div className="hipaa-container hipaa-reveal">
          <h2>Need HIPAA-Compliant Medical Billing Support?</h2>

          <p>
            Connect with Revno RCM for secure revenue cycle management,
            protected patient data handling, and compliance-focused billing
            operations.
          </p>

          <button type="button" onClick={() => goToPage("/contact-us")}>
            Get Free Compliance Consultation →
          </button>
        </div>
      </section>
    </main>
  );
}