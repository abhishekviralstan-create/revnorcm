import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/chargesentry.css";
import intro from "../assests/home/charges-entry.jpg"
import entry from "../assests/home/charges-entry2.jpg"
import charges from "../assests/home/collage1.png";
import accuracy from "../assests/home/about-small-2.jpeg"
import code from "../assests/home/code.avif"
import reconcelletion from "../assests/home/reconcelletion.webp"
export default function ChargesEntry({ onNavigate }) {
  const navigate = useNavigate();

  const goToPage = (path) => {
    if (path === "/" && onNavigate) {
      onNavigate("home");
      return;
    }

    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const images = {
    intro:intro,
    cleanEntry:entry,
    revenue:charges,

    accuracy:accuracy,
    reconciliation:code,
    review:reconcelletion,
  };

  const stats = [
    {
      value: "99.9%",
      label: "Charge Entry Accuracy Focus",
    },
    {
      value: "24hr",
      label: "Same-Day Entry Workflow",
    },
    {
      value: "100%",
      label: "Charge Capture Visibility",
    },
  ];

  const features = [
    "Daily entry of charges for all patient encounters: on the same day or within 24 hours",
    "Medical billing workflows that include charge entry (manual and integrated with EHR)",
    "Conduct superbill reviews and reconcile all charges for a full-line item medical charge capture",
    "Attestations and Medical Billing Data Entry",
    "Utilization of modifiers with auditing to ensure compliance and accurate reimbursement",
    "Check details for place of service, location and rendering provider",
    "Healthcare charge capture gap analysis to identify missing charges",
    "Identify improper, duplicate and partial payment charges prior to claim submission",
    "Provides workflows for charge entry (for both multi-specialty and multi-location settings)",
    "Daily charge reconciliation reports to ensure that charges are entered correctly.",
  ];

  const benefits = [
    "Multi-level quality checks help reduce charge entry errors in medical billing data",
    "Same-day charge entry shortens your billing cycle and improves claim movement",
    "Missing charge identification protects revenue that may otherwise go unbilled",
    "Standardized formatting reduces re-filing, clearinghouse rejections, and payer denials",
    "Scalable charge entry support manages volume spikes without staffing pressure",
  ];

  const processCards = [
    {
      image: images.accuracy,
      title: "Encounter Review",
      desc: "A review of all patient encounters, superbills, and EHR data are examined for full charge capture.",
    },
    {
      image: images.reconciliation,
      title: "Code & Modifier Check",
      desc: "Validation of procedure codes, diagnosis codes, modifiers, place of service & provider.",
    },
    {
      image: images.review,
      title: "Charge Reconciliation",
      desc: "Daily reconciliation helps identify missing, duplicate, unauthorized, or incomplete charges.",
    },
  ];

  const flowItems = [
    "Patient Encounter Review",
    "Superbill / EHR Data Check",
    "Procedure Code Validation",
    "Diagnosis Code Matching",
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".charges-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("charges-reveal-show");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    items.forEach((item, index) => {
      item.style.setProperty(
        "--charges-delay",
        `${Math.min(index * 70, 420)}ms`
      );
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <main className="charges-page">
      <Helmet>
        <title>Medical Charge Entry Services | Accurate & Timely | Revno RCM</title>

        <meta
          name="description"
          content="Professional charge entry services with 99.9% accuracy. Reduce billing errors and accelerate reimbursement cycles with same-day charge posting."
        />

        <meta
          name="keywords"
          content="medical charge entry services, charge entry services, medical billing charge entry, accurate charge entry, same-day charge posting, healthcare charge capture, medical billing data entry, revenue leakage prevention, charge capture services, EHR charge entry"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/charges-entry" />

        <meta
          property="og:title"
          content="Medical Charge Entry Services | Accurate & Timely | Revno RCM"
        />
        <meta
          property="og:description"
          content="Professional charge entry services with 99.9% accuracy, same-day posting, fewer billing errors, and faster reimbursement cycles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/charges-entry" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Medical Charge Entry Services | Accurate & Timely | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Reduce billing errors, prevent revenue leakage, and accelerate reimbursement cycles with accurate same-day medical charge entry services."
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
                "@type": "WebPage",
                "@id": "https://www.revnorcm.com/charges-entry/#webpage",
                url: "https://www.revnorcm.com/charges-entry",
                name: "Medical Charge Entry Services | Accurate & Timely | Revno RCM",
                description:
                  "Professional charge entry services with 99.9% accuracy, same-day posting, fewer billing errors, and faster reimbursement cycles.",
                isPartOf: {
                  "@id": "https://www.revnorcm.com/#website",
                },
                about: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
              },
              {
                "@type": "Service",
                "@id": "https://www.revnorcm.com/charges-entry/#service",
                name: "Medical Charge Entry Services",
                provider: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
                serviceType: [
                  "Medical Charge Entry Services",
                  "Charge Entry Medical Billing",
                  "Healthcare Charge Capture",
                  "Medical Billing Data Entry",
                  "Same-Day Charge Posting",
                  "Revenue Leakage Prevention",
                ],
                description:
                  "Revno RCM provides accurate and timely medical charge entry services with 99.9% accuracy to reduce billing errors, prevent revenue leakage, and accelerate reimbursement cycles.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Healthcare Providers",
                },
                url: "https://www.revnorcm.com/charges-entry",
                offers: {
                  "@type": "Offer",
                  name: "Medical Charge Entry Services Quote",
                  url: "https://www.revnorcm.com/contact-us",
                  availability: "https://schema.org/InStock",
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
                    name: "RCM Services",
                    item: "https://www.revnorcm.com/rcm-services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Charge Entry",
                    item: "https://www.revnorcm.com/charges-entry",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* COMPACT HERO */}
      <section className="charges-hero">
        <div className="charges-container charges-reveal">
          <div className="charges-breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>
            <span>›</span>
            <span>RCM Services</span>
            <span>›</span>
            <span>Charges Entry</span>
          </div>

          <h1>Charges Entry Services</h1>

          <p>
            Accurate medical charge capture, clean claims, fewer billing errors,
            and faster revenue flow through same-day charge entry support.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="charges-stats-section">
        <div className="charges-container">
          <div className="charges-stats-grid">
            {stats.map((item) => (
              <div className="charges-stat-card charges-reveal" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="charges-section charges-white">
        <div className="charges-container charges-split-grid">
          <div className="charges-copy charges-reveal">
            <span className="charges-kicker">Introduction</span>

            <h2>Medical Charge Capture Is the Make-or-Break Point</h2>

            <div className="charges-title-line" />

            <p>
             Even just one incorrect code, a missed modifier, or a reported but unentered service will result in the denial of payment and lost revenue. Medical charge capture is among the most critical control points of the revenue cycle.
            </p>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Request Charge Entry Support →
            </button>
          </div>

          <div className="charges-clean-image-wrap charges-reveal">
            <img
              src={images.intro}
              alt="Medical charge entry services"
              className="charges-clean-image"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="charges-section charges-soft">
        <div className="charges-container charges-split-grid reverse">
          <div className="charges-clean-image-wrap charges-reveal">
            <img
              src={images.revenue}
              alt="Revenue leakage prevention"
              className="charges-clean-image"
            />
          </div>

          <div className="charges-copy charges-reveal">
            <span className="charges-kicker">What We Do</span>

            <h2>Clean Charge Entry From Documentation to Claim</h2>

            <div className="charges-title-line" />

            <p>
             Your clinical documentation, superbills and EHR data include the full story of any patient encounter. The accounts receivables information that our charge entry team converts into clean, completed and submission ready claims.

            </p>

            <p>
             To avoid denials, missed charges and delayed billing timelines, provider details, date of service, procedure codes, diagnosis codes, modifiers, place of service and location are verified.

            </p>
          </div>
        </div>
      </section>

      {/* PROCESS CARDS */}
      <section className="charges-section charges-white">
        <div className="charges-container">
          <div className="charges-head charges-reveal">
            <span>Charge Entry Workflow</span>
            <h2>Built for Accuracy Before Claim Submission</h2>
            <p>
              Charge entry workflow prevents revenue leakage and claim errors, at the same time achieving consistency in billing.

            </p>
          </div>

          <div className="charges-process-grid">
            {processCards.map((item, index) => (
              <article className="charges-process-card charges-reveal" key={item.title}>
                <div className="charges-process-image">
                  <img src={item.image} alt={item.title} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="charges-process-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="charges-section charges-soft">
        <div className="charges-container">
          <div className="charges-head charges-reveal">
            <span>Key Features & Capabilities</span>
            <h2>Complete Charge Entry Support</h2>
            <p>
              From daily entry to charge reconciliation, Revno RCM supports
              accurate and timely medical billing data entry across specialties.
            </p>
          </div>

          <div className="charges-feature-grid">
            {features.map((item, index) => (
              <div className="charges-feature-card charges-reveal" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="charges-section charges-white">
        <div className="charges-container charges-split-grid">
          <div className="charges-copy charges-reveal">
            <span className="charges-kicker">Why This Matters</span>

            <h2>Missed Charges Are Revenue Left on the Table</h2>

            <div className="charges-title-line" />

            <p>
            Charge capture failures occur when services are performed but not accurately charged. Such gaps can deplete revenue quietly and cause avoidable bleeding of financial resources throughout the billing cycle.

            </p>

            <p>
         The healthcare charge capture services provide accuracy where every single billable service is entered, validated, reconciled and converted to a collectible claim.

            </p>
          </div>

          <div className="charges-clean-image-wrap charges-reveal">
            <img
              src={images.cleanEntry}
              alt="Clean charge entry workflow"
              className="charges-clean-image"
            />
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="charges-section charges-soft">
        <div className="charges-container charges-flow-layout">
          <div className="charges-copy charges-reveal">
            <span className="charges-kicker">Charge Lifecycle</span>

            <h2>From Encounter Review to Reconciliation</h2>

            <div className="charges-title-line" />

            <p>
             Revno RCM has a well-defined charge entry lifecycle to validate and establish the accuracy of obtaining each and every patient encounter.

            </p>
          </div>

          <div className="charges-flow-panel charges-reveal">
            {flowItems.map((item, index) => (
              <div className="charges-flow-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      {/* CTA */}
      <section className="charges-final-cta">
        <div className="charges-container charges-reveal">
          <h2>Close Every Loophole in Your Charge Capture Process</h2>

          <p>
           As the old adage goes, a missed charge is money left on the table. Revno RCM closes charge capture gaps and sustains every dollar your practice earns.

          </p>

          <button type="button" onClick={() => goToPage("/contact-us")}>
            Request Charge Entry Support →
          </button>
        </div>
      </section>
    </main>
  );
}