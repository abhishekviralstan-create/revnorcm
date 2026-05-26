import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/rcm.css";
import rcmProcessImg from "../assests/home/rcm-s.png";
export default function RCM() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const steps = [
    {
      title: "Patient Registration & Insurance Verification",
      desc: "Eligibility, demographics and coverage verification is done before service to minimize avoidable claim denials due to eligibility issues.",
    },
    {
      title: "Prior Authorization & Pre-Certification",
      desc: "Performing authorization prerequisites prior to services are rendered limits payer denials and extends the time before reimbursement.",
    },
    {
      title: "Medical Coding",
      desc: "Enter certified coders who assign correct ICD-10, CPT, and HCPCS codes to ensure appropriate reimbursement while supporting compliance.",
    },
    {
      title: "Charge Capture & Claims Submission",
      desc: "Instead, you can have charges scrubbed for claims so that clean submissions are sent off quickly to payers, resulting in faster payment cycles.",
    },
    {
      title: "Payment Posting & Reconciliation",
      desc: "Payments received via electronic remittance advice (ERA)/explanation of benefits (EOB) are posted correctly; reconciliation points out underpayments, adjustments, and patient balances.",
    },
    {
      title: "Denial Management & Appeals",
      desc: "Data on denied claims is analysed by root cause; corrections are made, appeals filed and followed up within payer timelines.",
    },
    {
      title: "A/R Follow-Up & Reporting",
      desc: "Structured follow-up, monthly reporting and KPI visibility are leveraged to manage claims with a view to improving cash flow.",
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
      desc: "It helps to reduce delays & fast pace payment turnaround with cleaner claim workflow",
    },
    {
      title: "Reduced Denials",
      desc: "This includes eligibility checks, authorization tracking and even coding audits to stave off avoidable denials.",
    },
    {
      title: "Improved Cash Flow",
      desc: "AR follow up and payment posting is more structured, leading to better control over outstanding revenues.",
    },
    {
      title: "Clear Reporting",
      desc: "Revenue cycle dashboards explain how the provider is performing on collections, denials, AR, and payer trends.",
    },
    {
      title: "Compliance-Focused Billing",
      desc: "Billing teams in charge of the revenue cycle are trained using HIPAA-compliant workflows.",
    },
    {
      title: "Dedicated RCM Support",
      desc: "You get responsive support for your practice, billing, coding, claims, denials and reporting.",
    },
  ];

  const auditPoints = [
    "Review of trends in claim rejection and denial",
    "Eligibility and authorization workflow analysis",
    "Gap review with respect to coding, modifier",
    "AR aging and assessment on payer follow-up",
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

          <h1>End-to-End RCM Services
          </h1>

          <p>
            Full RCM support, from patient registration to final payment  built to eliminate denials, streamline collections, reduce AR days and enhance healthcare cash flow.

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

            <h2>Revno RCM works — step by step
            </h2>

            <div className="rcm-title-line" />

            <p>
              Our RCM process integrates front-end verification, coding, claims, payment posting denial resolution and AR follow-up into one standard workflow.

            </p>

            <p>
              Every detailed process is designed to eliminate common errors, enhance first-pass acceptance and get your practice paid sooner.

            </p>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Request Free RCM Audit →
            </button>
          </div>

          <div className="rcm-process-image-wrap rcm-reveal">
            <img
              src={rcmProcessImg}
              alt="Revno RCM revenue cycle management process"
              className="rcm-process-image"
            />
          </div>
        </div>
      </section>

      {/* STEPS CARDS */}
      <section className="rcm-steps-section">
        <div className="rcm-container">
          <div className="rcm-head rcm-reveal">
            <span>RCM Workflow</span>
            <h2>Each Step Designed for Quality Claims & Quick Payments</h2>
            <p>
              Revno RCM helps healthcare providers reduce friction across the billing lifecycle with structured, tangible workflows.

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

            <h2>Identify leakages in revenue</h2>

            <p>
              Our RCM experts analyze your billing processes, denial trends, identify workflow loopholes and reveal opportunities to maximize collections.
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
              Our RCM process, from initial patient outreach to final payment, helps create a stronger billing operation with fewer revenue leaks and improved financial visibility.
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
           Your existing process will be reviewed by our RCM experts, who will pinpoint precisely where you are losing revenue.

          </p>

          <button type="button" onClick={() => goToPage("/contact-us")}>
            Request Your Free RCM Audit →
          </button>
        </div>
      </section>
    </main>
  );
}