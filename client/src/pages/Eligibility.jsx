import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/eligibility.css";

import {
  FaArrowRight,
  FaCheckCircle,
  FaRegFileAlt,
  FaShieldAlt,
  FaMoneyBillWave,
  FaUserMd,
} from "react-icons/fa";

/* ORIGINAL IMAGES */
import eligibilityImg from "../assests/services/eligibility.png";
import billingImg from "../assests/services/medical-billing.png";
import reportingImg from "../assests/services/reporting-analytics.webp";

export default function Eligibility({ onNavigate }) {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const revealItems = document.querySelectorAll(".elig-reveal");

    revealItems.forEach((item, index) => {
      item.style.setProperty("--elig-delay", `${Math.min(index * 70, 420)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("elig-show");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -70px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const features = [
    "Live real-time eligibility verification for all payers",
    "Confirm active coverage, effective dates, and termination",
    "Deductibles, co-pay, co-insurance, and out-of-pocket checks",
    "In-network vs out-of-network benefits verification",
    "Prior authorization requirements identification",
    "COB and secondary insurance verification",
    "Specialty benefits verification for mental health, PT, and labs",
    "Verification 24–48 hours before service",
    "Patient financial responsibility calculation",
    "Detailed eligibility report for billing team",
  ];

  const benefits = [
    "Reduce claim denials with proactive verification",
    "Improve patient satisfaction with financial clarity",
    "Faster reimbursements with clean claims",
    "Lower front desk workload",
    "Improve collections with better patient counseling",
  ];

  const processSteps = [
    {
      icon: <FaRegFileAlt />,
      title: "Coverage Verification",
      text: "We verify active coverage, effective dates, plan status, and payer-specific benefit details before service.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Patient Responsibility",
      text: "Copays, deductibles, coinsurance, and out-of-pocket balances are checked to support clear patient communication.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Prior Auth Review",
      text: "Authorization requirements, referrals, and payer restrictions are identified early to prevent avoidable denials.",
    },
    {
      icon: <FaUserMd />,
      title: "Billing Team Report",
      text: "Your team receives clear eligibility notes, benefit findings, and action items before the patient visit.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Insurance Verification Services | Real-Time Eligibility Checks | Revno RCM
        </title>

        <meta
          name="description"
          content="Verify patient insurance eligibility before appointments. Improve patient collections with automated real-time insurance verification services."
        />

        <meta
          name="keywords"
          content="insurance verification services, eligibility verification services, real-time eligibility checks, patient insurance verification, benefits verification services, prior authorization services, patient eligibility check, claim denial prevention, medical billing eligibility, insurance eligibility verification"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link
          rel="canonical"
          href="https://www.revnorcm.com/eligibility-verification"
        />

        <meta
          property="og:title"
          content="Insurance Verification Services | Real-Time Eligibility Checks | Revno RCM"
        />

        <meta
          property="og:description"
          content="Reduce claim denials, prevent write-offs, and improve patient collections with automated insurance eligibility and benefits verification services."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta
          property="og:url"
          content="https://www.revnorcm.com/eligibility-verification"
        />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Insurance Verification Services | Real-Time Eligibility Checks | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Automated insurance eligibility verification services to reduce denials, prevent revenue loss, and improve patient collections."
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
                "@id":
                  "https://www.revnorcm.com/eligibility-verification/#service",
                name: "Insurance Verification Services",
                provider: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
                serviceType: [
                  "Insurance Verification Services",
                  "Eligibility Verification Services",
                  "Benefits Verification",
                  "Patient Eligibility Check",
                  "Real-Time Eligibility Verification",
                  "Prior Authorization Services",
                ],
                description:
                  "Revno RCM provides automated real-time insurance eligibility and benefits verification services to reduce claim denials, prevent write-offs, and improve patient collections.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Healthcare Providers",
                },
                url: "https://www.revnorcm.com/eligibility-verification",
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
                    name: "Eligibility Verification",
                    item: "https://www.revnorcm.com/eligibility-verification",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="elig-page">
        {/* HERO */}
        <section className="elig-page-hero">
          <div className="elig-container">
            <div className="elig-breadcrumb elig-reveal">
              <button type="button" onClick={() => onNavigate?.("home") || goToPage("/")}>
                Home
              </button>
              <span>›</span>
              <button type="button" onClick={() => goToPage("/rcm-services")}>
                RCM Services
              </button>
              <span>›</span>
              <strong>Eligibility Verification</strong>
            </div>

            <h1 className="elig-reveal">Eligibility & Benefits Verification Services</h1>

            <p className="elig-reveal">
              Verify patient coverage, benefits, copays, deductibles, and prior authorization
              requirements before service to reduce denials and protect revenue.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="elig-section">
          <div className="elig-container elig-split">
            <div className="elig-content elig-reveal elig-left">
              <span className="elig-kicker">What We Do</span>
              <h2>Eligibility Checks That Prevent Denials Before They Start</h2>
              <div className="elig-title-line" />

              <p>
                Eligibility issues are one of the most common reasons claims get denied.
                When coverage, copays, deductibles, plan limitations, or authorization
                requirements are missed before the visit, practices face avoidable denials,
                write-offs, and delayed collections.
              </p>

              <p>
                Revno RCM verifies patient insurance before service, confirms benefit
                details, calculates patient responsibility, and flags payer requirements
                so your billing team has clarity before the appointment.
              </p>

              <button
                type="button"
                className="elig-primary-btn"
                onClick={() => goToPage("/contact-us")}
              >
                Talk to Our Billing Team <FaArrowRight />
              </button>
            </div>

            <div className="elig-image-card elig-reveal elig-right">
              <img src={eligibilityImg} alt="Eligibility and benefits verification services" />
              <div className="elig-image-badge">
                <strong>Real-Time Eligibility</strong>
                <span>Coverage clarity before every visit.</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="elig-section elig-soft-section">
          <div className="elig-container">
            <div className="elig-section-head elig-reveal">
              <span className="elig-kicker">Verification Workflow</span>
              <h2>Complete Eligibility Verification Support</h2>
              <p>
                A structured verification process that gives your front desk, billing team,
                and patients better financial clarity before care is delivered.
              </p>
            </div>

            <div className="elig-process-grid">
              {processSteps.map((item, index) => (
                <article className="elig-process-card elig-reveal" key={item.title}>
                  <div className="elig-process-icon">{item.icon}</div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="elig-section">
          <div className="elig-container elig-split">
            <div className="elig-image-card elig-reveal elig-left">
              <img src={billingImg} alt="Insurance verification before medical billing" />
              <div className="elig-image-badge">
                <strong>Denial Prevention</strong>
                <span>Cleaner claims start before service.</span>
              </div>
            </div>

            <div className="elig-content elig-reveal elig-right">
              <span className="elig-kicker">Why This Matters</span>
              <h2>Eligibility Errors Turn Into Lost Revenue</h2>
              <div className="elig-title-line" />

              <p>
                Missed eligibility checks can lead to denied claims, incorrect patient
                balances, delayed follow-up, and preventable revenue leakage. Verifying
                coverage before the visit helps your team reduce billing surprises and
                submit cleaner claims.
              </p>

              <p>
                Revno RCM helps practices identify payer restrictions, secondary insurance,
                authorization requirements, and patient responsibility early in the process.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="elig-section elig-soft-section">
          <div className="elig-container">
            <div className="elig-section-head elig-reveal">
              <span className="elig-kicker">Key Features & Capabilities</span>
              <h2>Accurate Insurance Verification Services</h2>
              <p>
                From active coverage checks to prior authorization alerts, our team supports
                every eligibility touchpoint with accuracy and speed.
              </p>
            </div>

            <div className="elig-feature-grid">
              {features.map((item, index) => (
                <article className="elig-feature-card elig-reveal" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="elig-section">
          <div className="elig-container elig-split">
            <div className="elig-content elig-reveal elig-left">
              <span className="elig-kicker">Key Benefits</span>
              <h2>Cleaner Claims Start With Verified Coverage</h2>
              <div className="elig-title-line" />

              <div className="elig-benefit-list">
                {benefits.map((item) => (
                  <div className="elig-benefit-item elig-reveal" key={item}>
                    <strong>
                      <FaCheckCircle />
                    </strong>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="elig-image-card elig-reveal elig-right">
              <img src={reportingImg} alt="Eligibility verification reports" />
              <div className="elig-image-badge">
                <strong>Clear Reports</strong>
                <span>Know coverage before billing.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="elig-cta">
          <div className="elig-container elig-cta-inner elig-reveal">
            <span className="elig-kicker">Free RCM Audit</span>
            <h2>Stop Revenue Leakage Before the Claim Is Filed</h2>
            <p>
              Don’t let missed eligibility checks create denials, delays, and patient
              balance confusion. Start verifying smarter with Revno RCM.
            </p>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Free Audit <FaArrowRight />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}