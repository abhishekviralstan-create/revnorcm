import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/coding.css";

import {
  FaArrowRight,
  FaCheckCircle,
  FaRegFileAlt,
  FaShieldAlt,
  FaMoneyBillWave,
  FaChartPie,
} from "react-icons/fa";

/* ORIGINAL IMAGES */
import codingImg from "../assests/services/medical-coding.png";
import billingImg from "../assests/services/medical-billing.png";
import reportingImg from "../assests/services/reporting-analytics.webp";

export default function Coding({ onNavigate }) {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const revealItems = document.querySelectorAll(".coding-reveal");

    revealItems.forEach((item, index) => {
      item.style.setProperty("--coding-delay", `${Math.min(index * 70, 420)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("coding-show");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -70px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const features = [
    "Diagnosis coding to ICD-10-CM with full compliance of specificity and hierarchy",
    "Assigning procedure and service codes by CPT and HCPCS coding standards",
    "E&M coding in compliance with updated documentation guidelines",
    "Application of modifiers for accuracy and reimbursement improvement",
    "Specialty-specific medical coding support across multiple specialties",
    "HCC coding support for risk adjustment workflows",
    "Coding audits and documentation improvement programs",
    "Query management and physician education support",
    "Annual code update training and implementation support",
    "Adherence to CMS, AHA, and AMA coding guidelines by certified coders",
  ];

  const benefits = [
    "Better clean claim submission rates with lower denials",
    "Maximized reimbursement with accurate CPT coding and modifier usage",
    "Reduced audit risk with ICD-10 and HCPCS guideline compliance",
    "Certified medical coders available across specialty workflows",
    "24–48 hour turnaround after receipt of documentation for most coding work",
  ];

  const processSteps = [
    {
      icon: <FaRegFileAlt />,
      title: "Documentation Review",
      text: "We review provider notes, encounter details, diagnosis support, and procedure documentation before code assignment.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Compliant Code Selection",
      text: "Certified coders assign ICD-10, CPT, HCPCS, modifiers, and E&M codes using payer and regulatory guidelines.",
    },
    {
      icon: <FaChartPie />,
      title: "Audit & Accuracy Checks",
      text: "Coding quality checks help reduce missed codes, incorrect modifiers, undercoding, overcoding, and denial risk.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Clean Claim Support",
      text: "Accurate coding supports cleaner claims, better reimbursement, faster billing, and stronger revenue cycle performance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Medical Coding Services | AAPC Certified Coders | Revno RCM</title>

        <meta
          name="description"
          content="Expert medical coding with AAPC/AHIMA certified professionals. ICD-10, CPT, and HCPCS coding for all specialties."
        />

        <meta
          name="keywords"
          content="medical coding services, AAPC certified coders, AHIMA certified coders, certified medical coders, ICD-10 coding, CPT coding, HCPCS coding, healthcare coding services, specialty medical coding, audit-ready documentation, coding error reduction"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/medical-coding" />

        <meta
          property="og:title"
          content="Medical Coding Services | AAPC Certified Coders | Revno RCM"
        />
        <meta
          property="og:description"
          content="Expert ICD-10, CPT, and HCPCS medical coding by AAPC/AHIMA certified professionals with audit-ready documentation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/medical-coding" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Medical Coding Services | AAPC Certified Coders | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="AAPC/AHIMA certified medical coders for ICD-10, CPT, and HCPCS coding across all specialties."
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
                "@id": "https://www.revnorcm.com/medical-coding/#service",
                name: "Medical Coding Services",
                provider: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
                serviceType: [
                  "Medical Coding Services",
                  "ICD-10 Coding",
                  "CPT Coding",
                  "HCPCS Coding",
                  "Specialty Medical Coding",
                  "Coding Audit Support",
                ],
                description:
                  "Revno RCM provides expert medical coding services by certified professionals for ICD-10, CPT, and HCPCS coding across all specialties.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Healthcare Providers",
                },
                url: "https://www.revnorcm.com/medical-coding",
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
                    name: "RCM Services",
                    item: "https://www.revnorcm.com/rcm-services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Medical Coding",
                    item: "https://www.revnorcm.com/medical-coding",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="coding-page">
        {/* HERO */}
        <section className="coding-page-hero">
          <div className="coding-container">
            <div className="coding-breadcrumb coding-reveal">
              <button type="button" onClick={() => onNavigate?.("home") || goToPage("/")}>
                Home
              </button>
              <span>›</span>
              <button type="button" onClick={() => goToPage("/rcm-services")}>
                RCM Services
              </button>
              <span>›</span>
              <strong>Medical Coding</strong>
            </div>

            <h1 className="coding-reveal">Medical Coding Services</h1>

            <p className="coding-reveal">
              Certified medical coders for ICD-10, CPT, HCPCS, modifiers, E&M coding,
              audit-ready documentation, and cleaner claim submission.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="coding-section">
          <div className="coding-container coding-split">
            <div className="coding-content coding-reveal coding-left">
              <span className="coding-kicker">Medical Coding Accuracy</span>
              <h2>Accurate Coding Protects Your Revenue</h2>
              <div className="coding-title-line" />

              <p>
                Wrong or inconsistent coding can cost your practice thousands in denials,
                underpayments, payer disputes, and delayed reimbursements.
              </p>

              <p>
                Revno RCM supports healthcare providers with accurate ICD-10, CPT,
                HCPCS, E&M, modifier, and specialty-specific coding so every encounter
                is coded with confidence.
              </p>

              <button
                type="button"
                className="coding-primary-btn"
                onClick={() => goToPage("/contact-us")}
              >
                Talk to Our Coding Team <FaArrowRight />
              </button>
            </div>

            <div className="coding-image-card coding-reveal coding-right">
              <img src={codingImg} alt="Medical coding services" />
              <div className="coding-image-badge">
                <strong>ICD-10 + CPT + HCPCS</strong>
                <span>Certified coding support for clean claims.</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="coding-section coding-soft-section">
          <div className="coding-container">
            <div className="coding-section-head coding-reveal">
              <span className="coding-kicker">Coding Workflow</span>
              <h2>Certified Coding Support From Documentation to Claim</h2>
              <p>
                A structured medical coding workflow designed to improve accuracy,
                reduce denials, and support compliant reimbursement.
              </p>
            </div>

            <div className="coding-process-grid">
              {processSteps.map((item, index) => (
                <article className="coding-process-card coding-reveal" key={item.title}>
                  <div className="coding-process-icon">{item.icon}</div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="coding-section">
          <div className="coding-container coding-split">
            <div className="coding-image-card coding-reveal coding-left">
              <img src={billingImg} alt="Medical billing and coding accuracy" />
              <div className="coding-image-badge">
                <strong>Clean Claim Coding</strong>
                <span>Lower denials. Better reimbursement.</span>
              </div>
            </div>

            <div className="coding-content coding-reveal coding-right">
              <span className="coding-kicker">Why This Matters</span>
              <h2>Medical Coding Is the Fuel of Your Revenue Cycle</h2>
              <div className="coding-title-line" />

              <p>
                Medical coding connects clinical documentation to reimbursement. When
                codes are incomplete, inaccurate, or unsupported, claims can be denied,
                delayed, downcoded, or paid incorrectly.
              </p>

              <p>
                Our coding team helps identify documentation gaps, apply accurate codes,
                support modifier usage, and reduce audit exposure across specialty workflows.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="coding-section coding-soft-section">
          <div className="coding-container">
            <div className="coding-section-head coding-reveal">
              <span className="coding-kicker">What We Do</span>
              <h2>Outsource Medical Coding by Certified Experts</h2>
              <p>
                From ICD-10 diagnosis coding to CPT, HCPCS, E&M, modifiers, coding audits,
                and documentation improvement, Revno RCM supports accurate coding operations.
              </p>
            </div>

            <div className="coding-feature-grid">
              {features.map((item, index) => (
                <article className="coding-feature-card coding-reveal" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="coding-section">
          <div className="coding-container coding-split">
            <div className="coding-content coding-reveal coding-left">
              <span className="coding-kicker">Key Benefits</span>
              <h2>Cleaner Claims Start With Accurate Coding</h2>
              <div className="coding-title-line" />

              <div className="coding-benefit-list">
                {benefits.map((item) => (
                  <div className="coding-benefit-item coding-reveal" key={item}>
                    <strong>
                      <FaCheckCircle />
                    </strong>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="coding-image-card coding-reveal coding-right">
              <img src={reportingImg} alt="Medical coding reporting and audit support" />
              <div className="coding-image-badge">
                <strong>Audit-Ready Accuracy</strong>
                <span>Better documentation. Stronger compliance.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="coding-cta">
          <div className="coding-container coding-cta-inner coding-reveal">
            <span className="coding-kicker">Free Coding Assessment</span>
            <h2>Mistakes in Code Are Silent Revenue Killers</h2>
            <p>
              Let certified coders review your coding process, reduce avoidable denials,
              improve reimbursement accuracy, and protect your revenue cycle.
            </p>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Get a Free Coding Assessment <FaArrowRight />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}