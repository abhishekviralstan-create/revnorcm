import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/denial.css";

import {
  FaArrowRight,
  FaCheckCircle,
  FaRegFileAlt,
  FaShieldAlt,
  FaMoneyBillWave,
  FaFolderOpen,
} from "react-icons/fa";

/* ORIGINAL IMAGES */
import denialImg from "../assests/home/eligibilityImg.png";
import rcmImg from "../assests/home/charges-intro.png";
import reportingImg from "../assests/home/entry.png";

export default function Denial({ onNavigate }) {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const revealItems = document.querySelectorAll(".denial-reveal");

    revealItems.forEach((item, index) => {
      item.style.setProperty("--denial-delay", `${Math.min(index * 70, 420)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("denial-show");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -70px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const features = [
    "Systematic AR follow-up on 30, 60, 90, and 120+ day claims",
    "Denial analysis with root cause categorization by payer",
    "Claim denial appeals submission for all denial types",
    "Claim resubmission with corrected errors and documentation",
    "Peer-to-peer review coordination and authorization appeals",
    "Medicare and Medicaid redetermination and reconsideration",
    "Denial trend reporting and prevention strategies",
    "Insurance claim status checks through EDI, portals, and calls",
    "Secondary and tertiary claim processing after primary",
    "Write-off justification and bad debt analysis reporting",
  ];

  const benefits = [
    "20–40% recovery of previously denied revenue",
    "Reduced AR days with structured follow-up",
    "Lower denial rates through root cause fixes",
    "Weekly transparency with AR and denial reports",
    "Avoidance of timely filing write-offs",
  ];

  const processSteps = [
    {
      icon: <FaFolderOpen />,
      title: "AR Review",
      text: "We review aging reports, unpaid claims, payer buckets, denial categories, and claim priority to identify recoverable revenue.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Root Cause Analysis",
      text: "Denials are categorized by payer, reason code, authorization issue, coding gap, eligibility error, or documentation problem.",
    },
    {
      icon: <FaRegFileAlt />,
      title: "Appeals & Resubmission",
      text: "Corrected claims, supporting documentation, reconsiderations, and appeals are submitted before payer deadlines.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Revenue Recovery",
      text: "Recovered claims are tracked, reported, reconciled, and used to prevent future revenue leakage across your workflow.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Denial Management Services | Recover Lost Revenue | Revno RCM</title>

        <meta
          name="description"
          content="Reclaim denied claims and prevent future denials with Revno RCM. Process optimization with improved recovery, appeals management, and AR follow-up."
        />

        <meta
          name="keywords"
          content="denial management services, AR denial management, claim denial appeals, medical billing denial management, accounts receivable management healthcare, AR follow up services, denied claims recovery, root cause denial analysis, healthcare revenue recovery, reduce claim denials"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/denial-management" />

        <meta
          property="og:title"
          content="Denial Management Services | Recover Lost Revenue | Revno RCM"
        />
        <meta
          property="og:description"
          content="Reclaim denied claims, improve recovery rates, and prevent future denials with appeals management, root cause analysis, and process optimization."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/denial-management" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Denial Management Services | Recover Lost Revenue | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Recover denied claims and prevent revenue leakage with Revno RCM’s denial management and AR follow-up services."
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
                "@id": "https://www.revnorcm.com/denial-management/#service",
                name: "Denial Management Services",
                provider: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
                serviceType: [
                  "Denial Management Services",
                  "AR Management Medical Billing",
                  "Claim Denial Appeals",
                  "Accounts Receivable Management Healthcare",
                  "AR Follow Up Services",
                  "Denied Claims Recovery",
                  "Root Cause Analysis",
                ],
                description:
                  "Revno RCM provides denial management services to recover denied claims, prevent future denials, improve AR follow-up, and reduce revenue leakage.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Healthcare Providers",
                },
                url: "https://www.revnorcm.com/denial-management",
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
                    name: "Denial Management",
                    item: "https://www.revnorcm.com/denial-management",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="denial-page">
        {/* HERO */}
        <section className="denial-page-hero">
          <div className="denial-container">
            <div className="denial-breadcrumb denial-reveal">
              <button type="button" onClick={() => onNavigate?.("home") || goToPage("/")}>
                Home
              </button>
              <span>›</span>
              <button type="button" onClick={() => goToPage("/rcm-services")}>
                RCM Services
              </button>
              <span>›</span>
              <strong>Denial Management</strong>
            </div>

            <h1 className="denial-reveal">AR & Denial Management Services</h1>

            <p className="denial-reveal">
              Recover denied claims, reduce aging AR, prevent future denials, and strengthen
              your cash flow with structured follow-up and appeals support.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="denial-section">
          <div className="denial-container denial-split">
            <div className="denial-content denial-reveal denial-left">
              <span className="denial-kicker">Revenue Recovery</span>
              <h2>Fix Aging AR Before It Hurts Your Practice</h2>
              <div className="denial-title-line" />

              <p>
                Aging AR, denied claims, and delayed payments are not just billing issues.
                They are signals of deeper revenue cycle gaps that can directly impact the
                financial health of your practice.
              </p>

              <p>
                Revno RCM helps identify recoverable claims, organize payer follow-up,
                submit appeals, correct errors, and prevent revenue from becoming a write-off.
              </p>

              <button
                type="button"
                className="denial-primary-btn"
                onClick={() => goToPage("/contact-us")}
              >
                Talk to Our AR Team <FaArrowRight />
              </button>
            </div>

            <div className="denial-image-card denial-reveal denial-right">
              <img src={denialImg} alt="Denial management services" />
              <div className="denial-image-badge">
                <strong>AR + Denial Recovery</strong>
                <span>Recover more. Write off less.</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="denial-section denial-soft-section">
          <div className="denial-container">
            <div className="denial-section-head denial-reveal">
              <span className="denial-kicker">Recovery Workflow</span>
              <h2>Complete AR & Denial Management Support</h2>
              <p>
                A structured denial recovery process designed to prioritize claims,
                find root causes, submit appeals, and reduce future denial risk.
              </p>
            </div>

            <div className="denial-process-grid">
              {processSteps.map((item, index) => (
                <article className="denial-process-card denial-reveal" key={item.title}>
                  <div className="denial-process-icon">{item.icon}</div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="denial-section">
          <div className="denial-container denial-split">
            <div className="denial-image-card denial-reveal denial-left">
              <img src={rcmImg} alt="AR follow up and denial workflow" />
              <div className="denial-image-badge">
                <strong>Structured Follow-Up</strong>
                <span>Every claim worked with priority.</span>
              </div>
            </div>

            <div className="denial-content denial-reveal denial-right">
              <span className="denial-kicker">What We Do</span>
              <h2>Complete AR Follow-Up and Denial Recovery</h2>
              <div className="denial-title-line" />

              <p>
                We review your AR aging report, prioritize claims by payer and urgency,
                and follow up systematically on unpaid, underpaid, rejected, and denied claims.
              </p>

              <p>
                Our team performs root cause analysis, builds strong appeals, tracks
                deadlines, and implements corrective actions to reduce repeated denials.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="denial-section denial-soft-section">
          <div className="denial-container">
            <div className="denial-section-head denial-reveal">
              <span className="denial-kicker">Key Features & Capabilities</span>
              <h2>Structured Denial Recovery Support</h2>
              <p>
                From payer follow-up to appeal submission and trend reporting, Revno RCM
                helps your practice work denials before they become lost revenue.
              </p>
            </div>

            <div className="denial-feature-grid">
              {features.map((item, index) => (
                <article className="denial-feature-card denial-reveal" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="denial-section">
          <div className="denial-container denial-split">
            <div className="denial-content denial-reveal denial-left">
              <span className="denial-kicker">Why It Matters</span>
              <h2>Denied Claims Become Lost Revenue If Ignored</h2>
              <div className="denial-title-line" />

              <p>
                Many denied claims are recoverable, but only when they are worked quickly,
                documented properly, and appealed within payer deadlines. Unworked denials
                eventually become write-offs.
              </p>

              <p>
                Revno RCM helps protect earned revenue with disciplined follow-up, stronger
                appeal documentation, and reporting that helps prevent repeated denial patterns.
              </p>

              <div className="denial-benefit-list">
                {benefits.map((item) => (
                  <div className="denial-benefit-item denial-reveal" key={item}>
                    <strong>
                      <FaCheckCircle />
                    </strong>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="denial-image-card denial-reveal denial-right">
              <img src={reportingImg} alt="Denial reports and AR analytics" />
              <div className="denial-image-badge">
                <strong>Denial Intelligence</strong>
                <span>Track trends. Prevent repeat issues.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="denial-cta">
          <div className="denial-container denial-cta-inner denial-reveal">
            <span className="denial-kicker">Free AR Review</span>
            <h2>Your Denied Claims Are Real Money</h2>
            <p>
              Let Revno RCM recover what you have already earned through structured AR
              follow-up, denial appeals, payer communication, and root cause prevention.
            </p>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Start Recovering Revenue <FaArrowRight />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}