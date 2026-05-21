import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/chargesentry.css";

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
    intro:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    cleanEntry:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    revenue:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    accuracy:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    reconciliation:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    review:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
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
    "Daily charge entry services for all patient encounters: same day or within 24 hours",
    "Manual and EHR-integrated charge entry medical billing workflows",
    "Review superbills and reconcile all charges for complete medical charge capture",
    "Validate procedure codes and diagnosis codes through accurate medical billing data entry",
    "Review modifier usage for compliance and reimbursement accuracy",
    "Verify place of service, location, and rendering provider details",
    "Identify missing charges through healthcare charge capture gap analysis",
    "Detect unauthorized, duplicate, or incomplete charges before claim submission",
    "Support multi-specialty and multi-location charge entry workflows",
    "Provide daily charge reconciliation reports for accurate charge entry control",
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
      desc: "Patient encounters, superbills, and EHR data are reviewed for complete charge capture.",
    },
    {
      image: images.reconciliation,
      title: "Code & Modifier Check",
      desc: "Procedure codes, diagnosis codes, modifiers, place of service, and provider details are validated.",
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
    "Modifier Review",
    "Location & Provider Verification",
    "Missing Charge Detection",
    "Daily Charge Reconciliation",
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
              One incorrect code, one missed modifier, or one unentered service
              can lead to a denial, underpayment, or lost revenue. Medical charge
              capture is one of the most important control points in the revenue
              cycle.
            </p>

            <p>
              Revno RCM helps ensure every billable service is entered accurately,
              every required detail is verified, and every claim starts from a
              clean foundation before it reaches the payer.
            </p>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Request Charge Entry Support →
            </button>
          </div>

          <div className="charges-image-wrap charges-reveal">
            <img src={images.intro} alt="Medical charge entry services" />

            <div className="charges-image-badge top">
              <strong>Accurate Entry</strong>
              <span>Code & modifier checks</span>
            </div>

            <div className="charges-image-badge middle">
              <strong>Clean Claims</strong>
              <span>Reduced billing errors</span>
            </div>

            <div className="charges-image-badge bottom">
              <strong>Fast Posting</strong>
              <span>Same-day workflow</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="charges-section charges-soft">
        <div className="charges-container charges-split-grid reverse">
          <div className="charges-image-wrap charges-reveal">
            <img src={images.cleanEntry} alt="Clean charge entry workflow" />

            <div className="charges-image-badge top">
              <strong>Superbill Review</strong>
              <span>Complete capture</span>
            </div>

            <div className="charges-image-badge bottom">
              <strong>EHR Workflow</strong>
              <span>Integrated support</span>
            </div>
          </div>

          <div className="charges-copy charges-reveal">
            <span className="charges-kicker">What We Do</span>

            <h2>Clean Charge Entry From Documentation to Claim</h2>

            <div className="charges-title-line" />

            <p>
              Your clinical documentation, superbills, and EHR data contain the
              complete patient encounter story. Our charge entry team converts
              that information into clean, complete, and submission-ready claims.
            </p>

            <p>
              Provider details, date of service, procedure codes, diagnosis
              codes, modifiers, place of service, and location are verified to
              reduce denials, missed charges, and delayed billing timelines.
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
              Our charge entry workflow is designed to prevent revenue leakage,
              reduce claim errors, and improve billing consistency.
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
              Charge capture failures happen when services are rendered but never
              billed correctly. These gaps can quietly reduce revenue and create
              preventable financial leakage across the billing cycle.
            </p>

            <p>
              Our healthcare charge capture services help ensure each billable
              service is entered, validated, reconciled, and converted into a
              collectible claim.
            </p>
          </div>

          <div className="charges-image-wrap charges-reveal">
            <img src={images.revenue} alt="Revenue leakage prevention" />

            <div className="charges-image-badge top">
              <strong>Revenue Protection</strong>
              <span>Identify missed charges</span>
            </div>

            <div className="charges-image-badge bottom">
              <strong>Daily Reports</strong>
              <span>Charge reconciliation</span>
            </div>
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
              Revno RCM follows a structured charge entry lifecycle to ensure
              each patient encounter is reviewed, coded, validated, and
              reconciled with accuracy.
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

      {/* BENEFITS */}
      <section className="charges-section charges-white">
        <div className="charges-container">
          <div className="charges-head charges-reveal">
            <span>Key Benefits</span>
            <h2>Better Charge Capture. Fewer Errors. Faster Billing.</h2>
            <p>
              Accurate charge entry improves billing speed, reduces revenue
              leakage, and helps claims move cleanly through the revenue cycle.
            </p>
          </div>

          <div className="charges-benefit-grid">
            {benefits.map((item) => (
              <div className="charges-benefit-card charges-reveal" key={item}>
                <strong>✓</strong>
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
            A missed charge is money left on the table. Revno RCM helps close
            charge capture gaps and preserve every dollar your practice earns.
          </p>

          <button type="button" onClick={() => goToPage("/contact-us")}>
            Request Charge Entry Support →
          </button>
        </div>
      </section>
    </main>
  );
}