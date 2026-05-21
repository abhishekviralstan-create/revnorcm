import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/rcm.css";

export default function RCM() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const steps = [
    {
      title: "Patient Registration & Insurance Verification",
      desc: "Demographics, eligibility, and coverage are verified before service to reduce avoidable eligibility-related claim rejections.",
    },
    {
      title: "Prior Authorization & Pre-Certification",
      desc: "Authorization requirements are handled before services are rendered to reduce payer denials and reimbursement delays.",
    },
    {
      title: "Medical Coding",
      desc: "Certified coders assign accurate ICD-10, CPT, and HCPCS codes to support compliance and appropriate reimbursement.",
    },
    {
      title: "Charge Capture & Claims Submission",
      desc: "Charges are reviewed, claims are scrubbed, and submissions are sent cleanly to payers for faster payment cycles.",
    },
    {
      title: "Payment Posting & Reconciliation",
      desc: "ERA/EOB payments are posted accurately with reconciliation to identify underpayments, adjustments, and patient balances.",
    },
    {
      title: "Denial Management & Appeals",
      desc: "Denied claims are analyzed by root cause, corrected, appealed, and followed up within payer timelines.",
    },
    {
      title: "A/R Follow-Up & Reporting",
      desc: "Outstanding claims are tracked with structured follow-up, monthly reporting, and KPI visibility for better cash flow control.",
    },
  ];

  const stats = [
    {
      value: "End-to-End",
      label: "Revenue Cycle Support",
    },
    {
      value: "Cleaner",
      label: "Claims Before Submission",
    },
    {
      value: "Lower",
      label: "Denials & AR Pressure",
    },
  ];

  const flowItems = [
    "Registration & Eligibility",
    "Prior Authorization",
    "Medical Coding",
    "Claims Scrubbing",
    "Payment Posting",
    "Denial Management",
    "A/R Follow-Up",
  ];

  const benefits = [
    {
      title: "Faster Reimbursements",
      desc: "Cleaner claim workflows help reduce delays and improve payment turnaround.",
    },
    {
      title: "Reduced Denials",
      desc: "Eligibility checks, authorization tracking, and coding audits help prevent avoidable denials.",
    },
    {
      title: "Improved Cash Flow",
      desc: "Structured AR follow-up and payment posting give better control over outstanding revenue.",
    },
    {
      title: "Clear Reporting",
      desc: "Revenue cycle dashboards help providers understand collections, denials, AR, and payer trends.",
    },
    {
      title: "Compliance-Focused Billing",
      desc: "HIPAA-compliant workflows and trained billing teams support secure revenue cycle operations.",
    },
    {
      title: "Dedicated RCM Support",
      desc: "Your practice receives responsive support for billing, coding, claims, denials, and reporting.",
    },
  ];

  const auditPoints = [
    "Claim rejection and denial pattern review",
    "Eligibility and authorization workflow analysis",
    "Coding, modifier, and documentation gap review",
    "AR aging and payer follow-up assessment",
    "Payment posting and underpayment visibility",
    "Revenue cycle improvement recommendations",
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".rcm-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rcm-reveal-show");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    items.forEach((item, index) => {
      item.style.setProperty("--rcm-delay", `${Math.min(index * 70, 420)}ms`);
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <main className="rcm-page">
      <Helmet>
        <title>
          Revenue Cycle Management Services | End-to-End RCM | Revno RCM
        </title>

        <meta
          name="description"
          content="Complete RCM solutions from patient registration to final payment. Boost collections, reduce AR days, and improve cash flow with Revno RCM’s end-to-end revenue cycle management services."
        />

        <meta
          name="keywords"
          content="revenue cycle management services, end-to-end RCM, medical billing services, healthcare revenue cycle management, AR follow up, denial management, payment posting, medical coding services, HIPAA compliant billing, healthcare billing company"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="publisher" content="Revno RCM" />
        <meta name="author" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/rcm-services" />

        <meta
          property="og:title"
          content="Revenue Cycle Management Services | End-to-End RCM | Revno RCM"
        />

        <meta
          property="og:description"
          content="Complete RCM solutions from patient registration to final payment. Reduce denials, improve collections, and streamline healthcare revenue operations with Revno RCM."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.revnorcm.com/rcm-services" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Revenue Cycle Management Services | End-to-End RCM | Revno RCM"
        />

        <meta
          name="twitter:description"
          content="Boost collections, reduce AR days, and improve healthcare cash flow with Revno RCM’s complete revenue cycle management services."
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
                sameAs: [
                  "https://www.facebook.com/revnorcm",
                  "https://www.linkedin.com/company/revnorcm",
                  "https://www.instagram.com/revnorcm",
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://www.revnorcm.com/rcm-services/#webpage",
                url: "https://www.revnorcm.com/rcm-services",
                name: "Revenue Cycle Management Services | End-to-End RCM | Revno RCM",
                description:
                  "Complete RCM solutions from patient registration to final payment. Boost collections, reduce AR days, and improve cash flow.",
                isPartOf: {
                  "@id": "https://www.revnorcm.com/#website",
                },
              },
              {
                "@type": "Service",
                "@id": "https://www.revnorcm.com/rcm-services/#service",
                name: "Revenue Cycle Management Services",
                provider: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
                serviceType: [
                  "Revenue Cycle Management",
                  "Medical Billing Services",
                  "Medical Coding",
                  "Denial Management",
                  "AR Follow Up",
                  "Payment Posting",
                  "Eligibility Verification",
                ],
                description:
                  "Revno RCM provides complete end-to-end revenue cycle management solutions for healthcare providers to improve reimbursements and reduce claim denials.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Healthcare Providers",
                },
                url: "https://www.revnorcm.com/rcm-services",
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
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* COMPACT HERO */}
      <section className="rcm-hero">
        <div className="rcm-container rcm-reveal">
          <div className="rcm-breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>
            <span>›</span>
            <span>Services</span>
            <span>›</span>
            <span>RCM Services</span>
          </div>

          <h1>End-to-End Revenue Cycle Management Services</h1>

          <p>
            Complete RCM support from patient registration to final payment —
            designed to reduce denials, improve collections, shorten AR days,
            and strengthen healthcare cash flow.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="rcm-stats-section">
        <div className="rcm-container">
          <div className="rcm-stats-grid">
            {stats.map((item) => (
              <div className="rcm-stat-card rcm-reveal" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="rcm-process-section">
        <div className="rcm-container rcm-split-grid">
          <div className="rcm-copy rcm-reveal">
            <span className="rcm-kicker">Complete Lifecycle</span>

            <h2>How Revno RCM Works — Step by Step</h2>

            <div className="rcm-title-line" />

            <p>
              Our revenue cycle process connects front-end verification, coding,
              claims, payment posting, denial resolution, and AR follow-up into
              one structured workflow.
            </p>

            <p>
              Each step is built to reduce avoidable errors, improve first-pass
              acceptance, and help your practice get paid faster.
            </p>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Request Free RCM Audit →
            </button>
          </div>

          <div className="rcm-flow-panel rcm-reveal">
            <div className="rcm-flow-orbit" />

            <div className="rcm-flow-list">
              {flowItems.map((item, index) => (
                <div
                  className={`rcm-flow-item ${
                    index === 2 ? "highlight" : ""
                  }`}
                  key={item}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="rcm-flow-badges">
              <span>✓ First-Pass Acceptance</span>
              <span>✓ Reduced AR Days</span>
              <span>✓ Lower Denials</span>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS CARDS */}
      <section className="rcm-steps-section">
        <div className="rcm-container">
          <div className="rcm-head rcm-reveal">
            <span>RCM Workflow</span>
            <h2>Every Step Built for Cleaner Claims & Faster Payments</h2>
            <p>
              Revno RCM helps healthcare providers reduce friction across the
              entire billing lifecycle with structured, measurable workflows.
            </p>
          </div>

          <div className="rcm-steps-grid">
            {steps.map((item, index) => (
              <article className="rcm-step-card rcm-reveal" key={item.title}>
                <div className="rcm-step-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

  {/* AUDIT */}
      <section className="rcm-audit-section">
        <div className="rcm-container rcm-audit-layout">
          <div className="rcm-copy white rcm-reveal">
            <span className="rcm-kicker">Free Revenue Cycle Review</span>

            <h2>Find Out Where Revenue Is Slipping Through</h2>

            <p>
              Our RCM specialists review your billing process, identify denial
              patterns, check workflow gaps, and show opportunities to improve
              collections.
            </p>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Start Your Free Audit →
            </button>
          </div>

          <div className="rcm-audit-card rcm-reveal">
            {auditPoints.map((item) => (
              <div className="rcm-audit-point" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* BENEFITS */}
      <section className="rcm-benefits-section">
        <div className="rcm-container">
          <div className="rcm-head rcm-reveal">
            <span>Benefits</span>
            <h2>What Your Practice Gains With Revno RCM</h2>
            <p>
              Our end-to-end RCM process supports stronger billing operations,
              fewer revenue leaks, and better financial visibility.
            </p>
          </div>

          <div className="rcm-benefits-grid">
            {benefits.map((item) => (
              <article className="rcm-benefit-card rcm-reveal" key={item.title}>
                <div className="rcm-benefit-icon">✓</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    

      {/* CTA */}
      <section className="rcm-final-cta">
        <div className="rcm-container rcm-reveal">
          <h2>Ready to Optimize Your Revenue Cycle?</h2>

          <p>
            Our RCM specialists will audit your current process and show you
            exactly where revenue is slipping through.
          </p>

          <button type="button" onClick={() => goToPage("/contact-us")}>
            Request Your Free RCM Audit →
          </button>
        </div>
      </section>
    </main>
  );
}