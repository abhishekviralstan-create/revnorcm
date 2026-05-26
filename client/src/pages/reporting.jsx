import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/reporting.css";

import {
  FaArrowRight,
  FaCheckCircle,
  FaRegFileAlt,
  FaChartPie,
  FaMoneyBillWave,
  FaFolderOpen,
  FaShieldAlt,
} from "react-icons/fa";

/* ORIGINAL IMAGES */
import reportingImg from "../assests/services/reporting-analytics.webp";
import rcmImg from "../assests/home/reposting.jpg";
import billingImg from "../assests/services/medical-billing.png";

export default function Reporting({ onNavigate }) {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reporting-reveal");

    revealItems.forEach((item, index) => {
      item.style.setProperty(
        "--reporting-delay",
        `${Math.min(index * 70, 420)}ms`
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reporting-show");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -70px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const features = [
    "Monthly revenue cycle performance reports covering charges, payments, adjustments, and A/R",
    "Accounts receivable aging reports by payer, provider, and site of service",
    "Denial rate tracking and trend analysis by denial category",
    "Clean claim rate and first-pass resolution rate reporting",
    "Payer mix and reimbursement rate analysis",
    "Provider productivity and collection rate benchmarking",
    "Days in A/R reporting and cash flow projections",
    "Procedure and diagnosis code utilization analysis",
    "Custom billing KPI dashboards tailored to practice objectives",
    "Quarterly business reviews with action-focused recommendations",
  ];

  const benefits = [
    "Full financial transparency across payers, providers, and sites",
    "Proactive identification of denial patterns before they become major revenue issues",
    "Benchmark KPI dashboards to identify performance gaps",
  ];

  const processSteps = [
    {
      icon: <FaChartPie />,
      title: "KPI Dashboarding",
      text: "We build clear revenue cycle dashboards covering AR, collections, denials, clean claim rate, and payer performance.",
    },
    {
      icon: <FaRegFileAlt />,
      title: "Custom Reports",
      text: "Practice-specific reports are tailored by provider, payer, location, specialty, service line, and business objective.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Cash Flow Insights",
      text: "Track charges, payments, adjustments, reimbursement trends, payer mix, and projected cash flow with clarity.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Action Planning",
      text: "We turn reporting data into recommendations that help reduce denials, improve collections, and strengthen performance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>RCM Analytics & Reporting | Real-Time Dashboards | Revno RCM</title>

        <meta
          name="description"
          content="Data-driven insights to optimize your revenue cycle. Track KPIs, monitor cash flow, identify trends with real-time dashboards and custom reporting."
        />

        <meta
          name="keywords"
          content="RCM analytics, RCM reporting services, healthcare revenue cycle analytics, real-time RCM dashboards, medical billing reporting services, billing KPI dashboard, practice financial reporting, revenue cycle KPI tracking, custom healthcare reporting, cash flow monitoring"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/reporting" />

        <meta
          property="og:title"
          content="RCM Analytics & Reporting | Real-Time Dashboards | Revno RCM"
        />
        <meta
          property="og:description"
          content="Track KPIs, monitor cash flow, identify trends, and optimize your revenue cycle with real-time dashboards and custom reporting."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/reporting" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="RCM Analytics & Reporting | Real-Time Dashboards | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Real-time revenue cycle dashboards, KPI tracking, cash flow monitoring, and custom reporting for healthcare providers."
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
                "@id": "https://www.revnorcm.com/reporting/#service",
                name: "RCM Analytics & Reporting Services",
                provider: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
                serviceType: [
                  "RCM Analytics",
                  "Revenue Cycle Reporting",
                  "Real-Time Dashboards",
                  "KPI Tracking",
                  "Cash Flow Monitoring",
                  "Custom Healthcare Reporting",
                  "Medical Billing Analytics",
                ],
                description:
                  "Revno RCM provides analytics and reporting services that help healthcare providers track KPIs, monitor cash flow, identify revenue trends, and make informed financial decisions.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Healthcare Providers",
                },
                url: "https://www.revnorcm.com/reporting",
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
                    name: "Reporting & Analytics",
                    item: "https://www.revnorcm.com/reporting",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="reporting-page">
        {/* HERO */}
        <section className="reporting-page-hero">
          <div className="reporting-container">
            <div className="reporting-breadcrumb reporting-reveal">
              <button
                type="button"
                onClick={() => onNavigate?.("home") || goToPage("/")}
              >
                Home
              </button>
              <span>›</span>
              <button type="button" onClick={() => goToPage("/rcm-services")}>
                RCM Services
              </button>
              <span>›</span>
              <strong>Reporting</strong>
            </div>

            <h1 className="reporting-reveal">Reporting & Analytics</h1>

            <p className="reporting-reveal">
              Turn billing data into accurate, timely, and actionable revenue cycle
              insights with custom dashboards, KPI reports, and financial analytics.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="reporting-section">
          <div className="reporting-container reporting-split">
            <div className="reporting-content reporting-reveal reporting-left">
              <span className="reporting-kicker">Medical Billing Analytics</span>
              <h2>Turn Billing Data Into Clear Financial Direction</h2>
              <div className="reporting-title-line" />

              <p>
                Data-driven decisions only work when the data is accurate, timely,
                and actionable. Many healthcare practices still rely on outdated
                reports or incomplete billing data, making it difficult to understand
                the true health of their revenue cycle.
              </p>

              <p>
                Revno RCM delivers custom RCM reporting services that show financial
                performance, payer trends, denials, collections, AR movement, and the
                exact actions needed to improve results.
              </p>

              <button
                type="button"
                className="reporting-primary-btn"
                onClick={() => goToPage("/contact-us")}
              >
                Request Reporting Consultation <FaArrowRight />
              </button>
            </div>

            <div className="reporting-image-card reporting-reveal reporting-right">
              <img src={reportingImg} alt="RCM reporting and analytics dashboard" />
              <div className="reporting-image-badge">
                <strong>RCM Analytics</strong>
                <span>Clear dashboards. Smarter decisions.</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="reporting-section reporting-soft-section">
          <div className="reporting-container">
            <div className="reporting-section-head reporting-reveal">
              <span className="reporting-kicker">Reporting Workflow</span>
              <h2>Custom RCM Reporting Services for Smarter Decisions</h2>
              <p>
                We translate billing data into actionable intelligence that helps
                practices improve collections, reduce denials, and monitor performance.
              </p>
            </div>

            <div className="reporting-process-grid">
              {processSteps.map((item, index) => (
                <article
                  className="reporting-process-card reporting-reveal"
                  key={item.title}
                >
                  <div className="reporting-process-icon">{item.icon}</div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="reporting-section">
          <div className="reporting-container reporting-split">
            <div className="reporting-image-card reporting-reveal reporting-left">
              <img src={rcmImg} alt="Healthcare revenue cycle analytics" />
              <div className="reporting-image-badge">
                <strong>Revenue Cycle Visibility</strong>
                <span>Know where your revenue stands.</span>
              </div>
            </div>

            <div className="reporting-content reporting-reveal reporting-right">
              <span className="reporting-kicker">Why This Matters</span>
              <h2>RCM Without Reporting Is Like Driving Without a Dashboard</h2>
              <div className="reporting-title-line" />

              <p>
                Revenue cycle management with no reporting is like driving without
                a dashboard. You may be moving, but you cannot see performance,
                warning signs, speed, or direction.
              </p>

              <p>
                With healthcare revenue cycle analytics, your team can monitor
                real-time information, identify problems early, and respond before
                small revenue leaks become major financial issues.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="reporting-section reporting-soft-section">
          <div className="reporting-container">
            <div className="reporting-section-head reporting-reveal">
              <span className="reporting-kicker">What We Track</span>
              <h2>Revenue Cycle Reports That Actually Guide Action</h2>
              <p>
                From AR aging to clean claim rate and cash flow, Revno RCM gives
                your practice reports that are easy to understand and useful for action.
              </p>
            </div>

            <div className="reporting-feature-grid">
              {features.map((item, index) => (
                <article
                  className="reporting-feature-card reporting-reveal"
                  key={item}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="reporting-section">
          <div className="reporting-container reporting-split">
            <div className="reporting-content reporting-reveal reporting-left">
              <span className="reporting-kicker">Key Benefits</span>
              <h2>No More Guessing</h2>
              <div className="reporting-title-line" />

              <div className="reporting-benefit-list">
                {benefits.map((item) => (
                  <div
                    className="reporting-benefit-item reporting-reveal"
                    key={item}
                  >
                    <strong>
                      <FaCheckCircle />
                    </strong>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reporting-image-card reporting-reveal reporting-right">
              <img src={billingImg} alt="Medical billing reporting services" />
              <div className="reporting-image-badge">
                <strong>Financial Transparency</strong>
                <span>Reports your team can trust.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="reporting-cta">
          <div className="reporting-container reporting-cta-inner reporting-reveal">
            <span className="reporting-kicker">Dashboard Consultation</span>
            <h2>Lead Your Practice With Real Revenue Data</h2>
            <p>
              Partner with Revno RCM for medical billing reporting, RCM analytics,
              KPI dashboards, and financial insights that help you make confident decisions.
            </p>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Get Your Reporting Dashboard Consultation <FaArrowRight />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}