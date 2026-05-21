import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/about.css";

export default function About() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const images = {
    heroPanel:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",

    whoWeAre:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80",

    rcmEligibility:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",

    rcmCoding:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",

    rcmClaims:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",

    rcmAR:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",

    whyChoose:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",

    iso:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",

    hipaa:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",

    valueAccuracy:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",

    valueDenials:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",

    valueHipaa:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",

    valueReports:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",

    valueContract:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",

    valueSupport:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=900&q=80",

    certification:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",

    security:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
  };

  const rcmFlow = [
    {
      image: images.rcmEligibility,
      title: "Eligibility & Authorization",
      text: "Verify patient coverage, payer rules, and authorization requirements before the visit.",
    },
    {
      image: images.rcmCoding,
      title: "Coding & Claim Accuracy",
      text: "Improve ICD-10, CPT, modifier, and documentation accuracy before submission.",
    },
    {
      image: images.rcmClaims,
      title: "Claim Submission",
      text: "Submit cleaner claims and reduce avoidable billing errors across payer workflows.",
    },
    {
      image: images.rcmAR,
      title: "AR & Denial Follow-Up",
      text: "Track unpaid claims, manage denials, and accelerate reimbursement cycles.",
    },
  ];

  const whyChooseAbout = [
    "10+ years of specialty-focused RCM expertise",
    "Complete end-to-end revenue cycle support",
    "HIPAA-compliant billing and secure data handling",
    "Dedicated account managers for every practice",
  ];

  const specialtyTags = [
    "Family Medicine",
    "Internal Medicine",
    "Cardiology",
    "Orthopedics",
    "Behavioral Health",
    "Physical Therapy",
    "Urgent Care",
    "Home Health",
    "Dermatology",
    "Neurology",
    "OB/GYN",
    "Radiology",
    "Podiatry",
    "Psychiatry",
    "Dental",
    "Chiropractic",
  ];

  const aboutTrustCerts = [
    {
      image: images.iso,
      title: "ISO Certified",
      text: "Quality-driven process standards for reliable billing operations and structured workflows.",
    },
    {
      image: images.hipaa,
      title: "HIPAA Compliant",
      text: "Secure data handling, privacy-focused workflows, and compliance-first billing support.",
    },
  ];

  const values = [
    {
      image: images.valueAccuracy,
      title: "Specialty-Focused Expertise",
      text: "Deep billing experience across multiple healthcare specialties with payer-specific workflows.",
    },
    {
      image: images.valueDenials,
      title: "Proactive Denial Prevention",
      text: "We identify denial risks early and fix issues before claims turn into rejections.",
    },
    {
      image: images.valueHipaa,
      title: "HIPAA-Certified Team",
      text: "Compliance-trained billing specialists follow secure workflows and privacy-first processes.",
    },
    {
      image: images.valueReports,
      title: "Real-Time Reporting",
      text: "Clear dashboards and revenue visibility help you track collections, AR, and performance.",
    },
    {
      image: images.valueContract,
      title: "No Long-Term Contracts",
      text: "We focus on measurable results and re-earn your business through consistent performance.",
    },
    {
      image: images.valueSupport,
      title: "Dedicated Support",
      text: "Responsive account managers support your practice with regular updates and follow-ups.",
    },
  ];

  const certs = [
    "AAPC CPC",
    "AAPC CRC",
    "AAPC CPMA",
    "AHIMA CCS",
    "AHIMA RHIT",
    "HIPAA Certified",
  ];

  const integrations = [
    "Epic",
    "Athenahealth",
    "eClinicalWorks",
    "Kareo",
    "DrChrono",
    "Nexgen",
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-reveal-show");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    items.forEach((item, index) => {
      item.style.setProperty("--about-delay", `${Math.min(index * 70, 420)}ms`);
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <main className="about-page">
      <Helmet>
        <title>About Revno RCM | Expert RCM & Medical Billing Company</title>

        <meta
          name="description"
          content="Learn about Revno RCM, a trusted medical billing and revenue cycle management company helping healthcare providers reduce denials, improve collections, and strengthen revenue performance."
        />

        <meta
          name="keywords"
          content="about Revno RCM, medical billing company, RCM company, revenue cycle management company, healthcare billing experts, HIPAA compliant billing company, medical billing experts, healthcare revenue cycle services"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/about-us" />

        <meta
          property="og:title"
          content="About Revno RCM | Expert RCM & Medical Billing Company"
        />
        <meta
          property="og:description"
          content="Revno RCM helps healthcare providers streamline medical billing, reduce claim denials, improve collections, and manage revenue cycle operations with secure, reliable support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/about-us" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Revno RCM | Medical Billing & RCM Experts"
        />
        <meta
          name="twitter:description"
          content="A trusted medical billing and revenue cycle management company focused on cleaner claims, faster payments, and stronger healthcare revenue performance."
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
                description:
                  "Revno RCM is a medical billing and revenue cycle management company helping healthcare providers reduce denials, improve collections, and optimize revenue performance.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://www.revnorcm.com/#website",
                url: "https://www.revnorcm.com/",
                name: "Revno RCM",
                publisher: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
              },
              {
                "@type": "AboutPage",
                "@id": "https://www.revnorcm.com/about-us/#webpage",
                url: "https://www.revnorcm.com/about-us",
                name: "About Revno RCM | Expert RCM & Medical Billing Company",
                description:
                  "Learn about Revno RCM, a trusted medical billing and revenue cycle management company serving healthcare providers nationwide.",
                isPartOf: {
                  "@id": "https://www.revnorcm.com/#website",
                },
                about: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.revnorcm.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "About Us",
                    item: "https://www.revnorcm.com/about-us",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="about-premium-hero">
        <div className="about-hero-glow about-hero-glow-one" />
        <div className="about-hero-glow about-hero-glow-two" />

        <div className="about-container about-premium-hero-inner">
          <div className="about-hero-copy about-reveal">
            <div className="about-breadcrumb">
              <button type="button" onClick={() => goToPage("/")}>
                Home
              </button>
              <span>›</span>
              <span>About Us</span>
            </div>
            <h1>About Revno RCM</h1>

            <p>
              A trusted medical billing and HIPAA-compliant RCM company helping
              healthcare providers take control of collections, compliance, claim
              performance, and long-term revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section about-white">
        <div className="about-container">
          <div className="about-intro-card about-reveal">
            <div className="about-intro-content">
              <span className="about-sec-kicker">Who We Are</span>

              <h2>Built for Healthcare Providers Who Want Financial Control</h2>

              <div className="about-title-line" />

              <p>
                Revno RCM is a medical billing company and trusted HIPAA-compliant
                billing partner built with one clear mission — helping healthcare
                providers take full control of their revenue cycle without
                overloading staff, time, or compliance resources.
              </p>

              <p>
                We understand the daily pressure physicians, practice managers,
                and healthcare administrators face: strict payer regulations,
                changing coding rules, claim denials, delayed reimbursements, and
                the challenge of getting paid correctly for every encounter.
              </p>

              <p>
                Revno RCM was created to solve these problems. Our certified
                medical billing experts, coders, and compliance specialists work
                as an extension of your practice — not just as another vendor.
              </p>
            </div>

            <div className="about-who-image-wrap">
              <img src={images.whoWeAre} alt="Revno RCM healthcare billing team" />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-section">
        <div className="about-container">
          <div className="mission-card about-reveal">
            <span className="about-sec-kicker">Our Mission</span>

            <h2>Transparent, Data-Driven RCM That Protects Every Dollar</h2>

            <p>
              We provide transparent, data-driven, and result-oriented RCM services
              so healthcare providers can focus on patient care while we ensure
              every dollar is captured, tracked, and optimized.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section about-what-section">
        <div className="about-container about-split-grid">
          <div className="about-section-copy about-reveal">
            <span className="about-sec-kicker">What We Do</span>

            <h2>What Is Revenue Cycle Management?</h2>

            <div className="about-title-line" />

            <p>
              Revenue Cycle Management, or RCM, is the complete financial process
              that keeps a healthcare organization running smoothly. It starts
              before the patient visit with eligibility checks and authorization,
              then continues through coding, claim submission, payment posting,
              denial management, and final collections.
            </p>

            <p>
              When RCM is managed properly, your practice gets paid faster, avoids
              avoidable denials, improves cash flow, and reduces administrative
              pressure on your internal team.
            </p>

            <button
              type="button"
              className="about-primary-btn"
              onClick={() => goToPage("/rcm-services")}
            >
              Explore RCM Services →
            </button>
          </div>

          <div className="about-rcm-flow-grid about-reveal">
            {rcmFlow.map((item) => (
              <div className="about-rcm-flow-card" key={item.title}>
                <div className="about-flow-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-section about-why-section">
        <div className="about-container about-split-grid reverse">
          <div className="about-why-image-wrap about-reveal">
            <img src={images.whyChoose} alt="Revno RCM healthcare billing support" />

            <div className="about-image-badge top">
              <strong>Cleaner Claims</strong>
              <span>Fewer billing errors</span>
            </div>

            <div className="about-image-badge middle">
              <strong>Lower Denials</strong>
              <span>Better payer follow-up</span>
            </div>

            <div className="about-image-badge bottom">
              <strong>Faster Payments</strong>
              <span>Improved cash flow</span>
            </div>
          </div>

          <div className="about-section-copy about-reveal">
            <span className="about-sec-kicker">Why Choose Us</span>

            <h2>Why Healthcare Providers Choose Revno RCM</h2>

            <div className="about-title-line" />

            <p>
              We combine specialty billing knowledge, denial prevention,
              compliance-focused workflows, and real-time reporting to help
              healthcare providers build a stronger financial operation.
            </p>

            <div className="about-points-list">
              {whyChooseAbout.map((item) => (
                <div className="about-point" key={item}>
                  <span className="about-point-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="about-primary-btn"
              onClick={() => goToPage("/contact-us")}
            >
              Request An Appointment →
            </button>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="about-section about-specialties-section">
        <div className="about-container">
          <div className="about-center-head about-reveal">
            <span className="about-sec-kicker">Specialties</span>

            <h2>Industries & Specialties We Serve</h2>

            <p>
              Revno RCM supports healthcare providers across multiple specialties
              with dedicated billing and coding workflows that match
              specialty-specific payer rules, documentation standards, and
              compliance requirements.
            </p>
          </div>

          <div className="about-specialty-grid">
            {specialtyTags.map((tag) => (
              <span className="about-specialty-pill about-reveal" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="about-center-action about-reveal">
            <button
              type="button"
              className="about-primary-btn"
              onClick={() => goToPage("/contact-us")}
            >
              Talk to Our Billing Team →
            </button>
          </div>
        </div>
      </section>

      {/* COMPLIANCE TRUST */}
      <section className="about-section about-trust-section">
        <div className="about-container about-split-grid">
          <div className="about-section-copy about-reveal">
            <span className="about-sec-kicker">Compliance & Trust</span>

            <h2>Our Certifications</h2>

            <div className="about-title-line" />

            <p>
              Revno RCM follows secure, compliant, and quality-focused billing
              processes. Our standards support accurate healthcare billing, safe
              data handling, and reliable revenue cycle operations.
            </p>
          </div>

          <div className="about-trust-grid">
            {aboutTrustCerts.map((cert) => (
              <div className="about-trust-card about-reveal" key={cert.title}>
                <div className="about-trust-image">
                  <img src={cert.image} alt={cert.title} />
                </div>

                <h3>{cert.title}</h3>

                <p>{cert.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="about-section about-white about-sets-section">
        <div className="about-container">
          <div className="about-center-head about-reveal">
            <span className="about-sec-kicker">What Sets Us Apart</span>

            <h2>Why Providers Choose Revno RCM</h2>

            <p>
              Our process is built around cleaner claims, compliance,
              transparency, and measurable financial improvement.
            </p>
          </div>

          <div className="about-cards-grid about-premium-value-grid">
            {values.map((item, index) => (
              <div className="about-feature-card about-reveal" key={item.title}>
                <div className="about-feature-image">
                  <img src={item.image} alt={item.title} />

                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="about-feature-body">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   

      {/* TECHNOLOGY */}
      <section className="about-section about-white">
        <div className="about-container">
          <div className="technology-card about-reveal">
            <div>
              <span className="about-sec-kicker">Technology & Integrations</span>

              <h2>Seamless EHR Integrations</h2>

              <div className="about-title-line" />

              <p>
                We integrate with top EHR systems with minimal setup and zero
                workflow disruption.
              </p>
            </div>

            <div className="tags">
              {integrations.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-band">
        <div className="about-container about-reveal">
          <h2>Ready to Work With a Trusted RCM Partner?</h2>

          <p>
            Increase collections, reduce denials, and take control of your revenue
            cycle today.
          </p>

          <button type="button" onClick={() => goToPage("/contact-us")}>
            Schedule a Free Consultation →
          </button>
        </div>
      </section>
    </main>
  );
}