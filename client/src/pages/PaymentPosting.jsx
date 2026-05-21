import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/paymentposting.css";

import {
  FaArrowRight,
  FaCheckCircle,
  FaRegFileAlt,
  FaMoneyBillWave,
  FaShieldAlt,
  FaChartPie,
} from "react-icons/fa";

/* ORIGINAL IMAGES */
import paymentPostingImg from "../assests/services/payment-posting.jpg";
import rcmImg from "../assests/services/RCM.png";
import reportingImg from "../assests/services/reporting-analytics.webp";

export default function PaymentPosting({ onNavigate }) {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const revealItems = document.querySelectorAll(".pp-reveal");

    revealItems.forEach((item, index) => {
      item.style.setProperty("--pp-delay", `${Math.min(index * 70, 420)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("pp-show");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -70px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const features = [
    "ERA processing for manual and auto remittance workflows",
    "EOB posting for paper and scanned remittance documents",
    "Patient payment posting from checks, cards, portals, and statements",
    "Write-offs and contractual adjustment processing",
    "Underpayment identification with payer-level reporting",
    "Denial tagging for faster AR follow-up and appeals",
    "Refund handling for secondary insurance and patient balances",
    "Day-end reconciliation and deposit tracking",
    "Overpayment identification and refund support",
    "Real-time posting for accurate patient and AR balances",
  ];

  const benefits = [
    "Accurate AR aging with same-day or next-day posting",
    "Underpayment detection and stronger revenue recovery",
    "Clean reconciliation with fewer posting mismatches",
    "Faster denial handling and appeal preparation",
    "Daily payment visibility for better financial control",
  ];

  const processSteps = [
    {
      icon: <FaRegFileAlt />,
      title: "ERA & EOB Intake",
      text: "We collect electronic and paper remittances, organize payment sources, and validate payer information before posting.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Accurate Posting",
      text: "Insurance payments, patient payments, adjustments, write-offs, and transfers are posted with clean transaction mapping.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Denial & Variance Flagging",
      text: "Denials, underpayments, overpayments, and unusual adjustments are tagged for quick review and follow-up.",
    },
    {
      icon: <FaChartPie />,
      title: "Daily Reconciliation",
      text: "Deposits, batches, ERAs, EOBs, and posted amounts are reconciled to keep reporting accurate and transparent.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Payment Posting Services | ERA & Manual Posting | Revno RCM</title>

        <meta
          name="description"
          content="Fast, accurate payment posting for insurance and patient payments. Improve financial reporting with daily reconciliation."
        />

        <meta
          name="keywords"
          content="payment posting services, ERA payment posting, electronic remittance advice, manual payment posting, EOB posting, insurance payment posting, patient payment posting, daily reconciliation, underpayment identification, denial tracking, medical billing payment posting"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/payment-posting" />

        <meta
          property="og:title"
          content="Payment Posting Services | ERA & Manual Posting | Revno RCM"
        />
        <meta
          property="og:description"
          content="Fast and accurate ERA, EOB, insurance, and patient payment posting services with daily reconciliation, denial tracking, and underpayment identification."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/payment-posting" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Payment Posting Services | ERA & Manual Posting | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Fast, accurate payment posting for ERA, EOB, insurance, and patient payments with daily reconciliation."
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
                "@id": "https://www.revnorcm.com/payment-posting/#service",
                name: "Payment Posting Services",
                provider: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
                serviceType: [
                  "Payment Posting Services",
                  "ERA Payment Posting",
                  "EOB Posting",
                  "Insurance Payment Posting",
                  "Patient Payment Posting",
                  "Daily Reconciliation",
                ],
                description:
                  "Revno RCM provides accurate payment posting services for insurance payments, patient payments, ERAs, EOBs, and manual posting with daily reconciliation.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                url: "https://www.revnorcm.com/payment-posting",
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
                    name: "Payment Posting",
                    item: "https://www.revnorcm.com/payment-posting",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="pp-page">
        {/* HERO - SAME AS YOUR SCREENSHOT STYLE */}
        <section className="pp-page-hero">
          <div className="pp-container">
            <div className="pp-breadcrumb pp-reveal">
              <button type="button" onClick={() => onNavigate?.("home") || goToPage("/")}>
                Home
              </button>
              <span>›</span>
              <button type="button" onClick={() => goToPage("/rcm-services")}>
                RCM Services
              </button>
              <span>›</span>
              <strong>Payment Posting</strong>
            </div>

            <h1 className="pp-reveal">Payment Posting Services</h1>

            <p className="pp-reveal">
              Post every ERA, EOB, insurance payment, and patient payment accurately
              with clean reconciliation and clearer revenue visibility.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="pp-section">
          <div className="pp-container pp-split">
            <div className="pp-content pp-reveal pp-left">
              <span className="pp-kicker">Revenue Accuracy</span>
              <h2>Payment Posting Is Your Financial Backbone</h2>
              <div className="pp-title-line" />

              <p>
                Payment posting is not simply data entry. It is the foundation of accurate
                AR, clean reporting, denial visibility, and faster follow-up. Incorrect or
                delayed posting can hide underpayments and distort your financial picture.
              </p>

              <p>
                Revno RCM ensures every insurance and patient payment is posted in the right
                place with accurate adjustments, denial tagging, and deposit reconciliation.
              </p>

              <button type="button" className="pp-primary-btn" onClick={() => goToPage("/contact-us")}>
                Talk to Our Billing Team <FaArrowRight />
              </button>
            </div>

            <div className="pp-image-card pp-reveal pp-right">
              <img src={paymentPostingImg} alt="Payment posting services" />
              <div className="pp-image-badge">
                <strong>ERA + EOB Posting</strong>
                <span>Accurate payments. Cleaner AR.</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="pp-section pp-soft-section">
          <div className="pp-container">
            <div className="pp-section-head pp-reveal">
              <span className="pp-kicker">What We Do</span>
              <h2>Complete Payment Posting Workflow</h2>
              <p>
                A structured posting process that keeps your AR accurate, deposits reconciled,
                and your revenue cycle team ready to act faster.
              </p>
            </div>

            <div className="pp-process-grid">
              {processSteps.map((item, index) => (
                <article className="pp-process-card pp-reveal" key={item.title}>
                  <div className="pp-process-icon">{item.icon}</div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGE + WHY */}
        <section className="pp-section">
          <div className="pp-container pp-split">
            <div className="pp-image-card pp-reveal pp-left">
              <img src={rcmImg} alt="Revenue cycle management payment posting" />
              <div className="pp-image-badge">
                <strong>Daily Reconciliation</strong>
                <span>Balanced reports. Better control.</span>
              </div>
            </div>

            <div className="pp-content pp-reveal pp-right">
              <span className="pp-kicker">Why It Matters</span>
              <h2>Accurate Posting Drives Smarter Financial Decisions</h2>
              <div className="pp-title-line" />

              <p>
                Posting errors create a domino effect across AR, denial tracking,
                patient balances, deposit reports, and revenue forecasting. A disciplined
                cash posting process gives your team reliable data for faster action.
              </p>

              <p>
                With Revno RCM, payment posting becomes more than a back-office task.
                It becomes a revenue intelligence layer for your practice.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="pp-section pp-soft-section">
          <div className="pp-container">
            <div className="pp-section-head pp-reveal">
              <span className="pp-kicker">Key Features & Capabilities</span>
              <h2>Accurate Payment Posting Support</h2>
              <p>
                From remittance posting to denial identification, Revno RCM supports every
                payment touchpoint with accuracy and transparency.
              </p>
            </div>

            <div className="pp-feature-grid">
              {features.map((item, index) => (
                <article className="pp-feature-card pp-reveal" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="pp-section">
          <div className="pp-container pp-split">
            <div className="pp-content pp-reveal pp-left">
              <span className="pp-kicker">Key Benefits</span>
              <h2>Cleaner Posting. Better Visibility. Faster Action.</h2>
              <div className="pp-title-line" />

              <div className="pp-benefit-list">
                {benefits.map((item) => (
                  <div className="pp-benefit-item pp-reveal" key={item}>
                    <strong><FaCheckCircle /></strong>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pp-image-card pp-reveal pp-right">
              <img src={reportingImg} alt="Payment posting reports and analytics" />
              <div className="pp-image-badge">
                <strong>Revenue Visibility</strong>
                <span>Reports you can trust daily.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pp-cta">
          <div className="pp-container pp-cta-inner pp-reveal">
            <span className="pp-kicker">Free RCM Audit</span>
            <h2>Fix Payment Posting Errors Before They Hurt Revenue</h2>
            <p>
              Let Revno RCM handle ERA posting, EOB posting, patient payments, adjustments,
              denial tagging, and daily reconciliation with precision.
            </p>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Get Started <FaArrowRight />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}