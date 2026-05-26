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
import paymentPostingImg from "../assests/home/revenue.png";
import rcmImg from "../assests/home/collage2.png";
import reportingImg from "../assests/home/key.png";

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
    "ERA Processing Manual & Auto Remittance Workflows",
    "Paper and Scanned Remittance Document EOB Posting",
    "Check, card, portal and statement patient payments posting",
    "Write-offs and contractual adjustment processing",
    "Underpayment identification with payer-level reporting",
    "Faster appeals and AR Follow-Up with Denial Tagging",
    "Handle refunds for secondary insurance and patient balances",
    "Day-end reconciliation and deposit tracking",
    "Overpayment identification and refund support",
    "Greater visibility for accurate patient and AR balances through real-time posting",
  ];

  const benefits = [
    "Timely / Accurate AR Aging- Same Day or next day posting.",
    "Detecting underpayment, and increased income recovery",
    "Less posting mismatches will allow for a clean reconciliation",
    "Prompt resolution of denials and preparation of appeals",
    "Enhance financial control with daily payment visibility",
  ];

  const processSteps = [
    {
      icon: <FaRegFileAlt />,
      title: "ERA & EOB Intake",
      text: "You take care of the collection process for electronic and paper remittances, organizing payment sources, confirming we have correct payer information to post.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Accurate Posting",
      text: "Cleared transaction mapping for insurance payments, patient payments, adjustments, write-offs and transfers.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Denial & Variance Flagging",
      text: "Denials, underpayments, overpayments, and unusual adjustments are prioritized for fast review and follow-up.",
    },
    {
      icon: <FaChartPie />,
      title: "Daily Reconciliation",
      text: "Reconciliation of deposits and batches, ERAs, EOBs and posted amounts ensures accurate reporting.",
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
              Cleanly reconcile and gain visibility into the revenue that flows through every ERA, EOB, insurance payment, and patient payment.

            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="pp-section">
          <div className="pp-container pp-split">
            <div className="pp-content pp-reveal pp-left">
              <span className="pp-kicker">Revenue Accuracy</span>
              <h2>The Backbone Of Your Finances
              </h2>
              <div className="pp-title-line" />

              <p>
                It is not data entry, it is payment posting. This is where the key to accurate AR, clean reporting, denial visibility and quicker follow-up lies. Posting at the wrong time or not soon enough for example can mask underpayments and skew your financials.

              </p>

              <p>
                With proper adjustments, very easy to tag denials and deposit reconciliation Revno RCM posts each insurance and patient payment exactly where it should be.

              </p>

              <button type="button" className="pp-primary-btn" onClick={() => goToPage("/contact-us")}>
                Talk to Our Billing Team <FaArrowRight />
              </button>
            </div>

            <div className="pp-image-card pp-reveal pp-right">
              <img src={paymentPostingImg} alt="Payment posting services" />
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
                A posting process that keeps your AR accurate, reconciles deposits faster and prepares your revenue cycle team to take action sooner.

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
              
            </div>

            <div className="pp-content pp-reveal pp-right">
              <span className="pp-kicker">Why It Matters</span>
              <h2>Smarter Financial Decisions</h2>
              <div className="pp-title-line" />

              <p>
                And ever posting errors have a cascading effect through AR, denial tracking, patient balances, deposit reports and revenue forecasting. Having a systematic cash posting process provides your team with accurate data that enables faster decision-making.

              </p>

              <p>
                Payment posting with Revno RCM becomes more than a back-office operation. This provides the added component of a revenue intelligence layer for your practice.

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
                Revno RCM is built to handle every payment touchpoint from remittance posting and denial identification with clear visibility and accuracy.

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
              <h2>Cleaner Posting. Faster Action.</h2>
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
            <h2>Repair Payment Posting Errors Before You Run into Problems with revenue
            </h2>
            <p>
              Let Revno RCM take care of ERA posting, EOB posting and patient payment, Adjustment and Denial tagging on a daily reconciliation basis.
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