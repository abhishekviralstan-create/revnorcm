import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../css/billing.css";
import claim from "../assests/home/claim.png"
import coding from "../assests/home/coding.webp"
import tracking from "../assests/home/reporting.avif"
import ar from "../assests/home/about-small-2.jpeg"
import medical from "../assests/services/medical-billing.png"
export default function Billing() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const images = {
    main: medical,
    claim: claim,
    coding: coding,
    payment: tracking,
    audit: ar,
  };

  const stats = [
    {
      value: "98%",
      label: "Clean Claim Focus",
    },
    {
      value: "14–21",
      label: "Day Claim Processing Window",
    },
    {
      value: "EHR",
      label: "Compatible Billing Workflows",
    },
  ];

  const billingBenefits = [
    "Scrub Claims prior to submittal - Reduce Denials and billing errors",
    "Quick Payment- Most claims are processed within 14–21 days.",
    "Scale billing capacity without hiring or layoffs ",
  ];

  const processCards = [
    {
      image: images.claim,
      title: "Claim Scrubbing",
      desc: "Pre-submission review of claims mitigates such preventable errors, information gaps and payer-rejections.",
    },
    {
      image: images.coding,
      title: "Coding Accuracy",
      desc: "Supports billing workflow, accurate ICD-10, CPT, HCPCS and modifier checks.",
    },
    {
      image: images.payment,
      title: "Payment Tracking",
      desc: "The metric to track is submission claims, payments amount, claim adjustment & open balances for better revenue visibility.",
    },
    {
      image: images.audit,
      title: "AR Follow-Up",
      desc: "Aging claims are tracked with diligence so that accrued revenue does not remain unresolved.",
    },
  ];

  const specialties = [
    {
      title: "Internal Medicine & Family Practice",
      desc: "Overview of billing for primary care, chronic Care Management, and preventive services, E&M visits.",
    },
    {
      title: "Cardiology & Interventional",
      desc: "Cardiac procedures, catheterizations, stress testing and interventional services billed by experts.",
    },
    {
      title: "Orthopedics & Sports Medicine",
      desc: "Detailed coding accuracy for surgical and non-surgical orthopedic services, joint procedures and sports injury care.",
    },
    {
      title: "Behavioral Health & Psychiatry",
      desc: "Mental health, Psychotherapy, Psychiatry and Drug rehab billing",
    },
    {
      title: "Physical & Occupational Therapy",
      desc: "Billing For Therapy and Functional Evaluations and Rehabilitation Programs",
    },
    {
      title: "Emergency Medicine & Urgent Care",
      desc: "Emergency visit, facility fee, and urgent care encounter billing on a high-volume fast-turnaround basis",
    },
    {
      title: "OB/GYN & Women's Health",
      desc: "Global billing for obstetrics, gynecological operations, preventive care, and prenatal services.",
    },
    {
      title: "Radiology & Imaging",
      desc: "MRI billing, CT billing, x-ray billing, ultrasound expert component professional and technical",
    },
    {
      title: "Home Health & Hospice",
      desc: "Home Health Agencies, Hospice Providers and DME Medicare & Medicaid Billing.",
    },
  ];

  const billingFlow = [
    "Claim Scrubbing",
    "Electronic Claim Submission",
    "Payment Posting",
    "Denial & AR Follow-Up",
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".billing-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("billing-reveal-show");
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
        "--billing-delay",
        `${Math.min(index * 70, 420)}ms`
      );
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <main className="billing-page">
      <Helmet>
        <title>Medical Billing Services | 98% Clean Claim Rate | Revno RCM</title>

        <meta
          name="description"
          content="Outsourced medical billing that maximizes reimbursements. Expert coders, faster payments, fewer denials. Get a quote."
        />

        <meta
          name="keywords"
          content="medical billing services, outsourced medical billing, clean claim rate, 98% clean claim rate, medical billing company, healthcare billing services, EHR compatible billing, claim submission, denial reduction, faster reimbursements, HIPAA compliant medical billing"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="publisher" content="Revno RCM" />
        <meta name="author" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/medical-billing" />

        <meta
          property="og:title"
          content="Medical Billing Services | 98% Clean Claim Rate | Revno RCM"
        />
        <meta
          property="og:description"
          content="Outsourced medical billing that maximizes reimbursements with expert coders, faster payments, fewer denials, and compatibility with all major EHR systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta
          property="og:url"
          content="https://www.revnorcm.com/medical-billing"
        />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Medical Billing Services | 98% Clean Claim Rate | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Maximize reimbursements with outsourced medical billing, expert coders, faster payments, fewer denials, and EHR-compatible workflows."
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
                "@id": "https://www.revnorcm.com/medical-billing/#webpage",
                url: "https://www.revnorcm.com/medical-billing",
                name: "Medical Billing Services | 98% Clean Claim Rate | Revno RCM",
                description:
                  "Outsourced medical billing that maximizes reimbursements. Expert coders, faster payments, fewer denials, and compatibility with all major EHR systems.",
                isPartOf: {
                  "@id": "https://www.revnorcm.com/#website",
                },
                about: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
              },
              {
                "@type": "Service",
                "@id": "https://www.revnorcm.com/medical-billing/#service",
                name: "Medical Billing Services",
                provider: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
                serviceType: [
                  "Medical Billing Services",
                  "Outsourced Medical Billing",
                  "Claim Submission",
                  "Denial Reduction",
                  "EHR Compatible Billing",
                  "Clean Claim Processing",
                ],
                description:
                  "Revno RCM provides outsourced medical billing services designed to maximize reimbursements, reduce denials, speed up payments, and support all major EHR systems.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Healthcare Providers",
                },
                url: "https://www.revnorcm.com/medical-billing",
                offers: {
                  "@type": "Offer",
                  name: "Medical Billing Quote",
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
                    name: "Medical Billing",
                    item: "https://www.revnorcm.com/medical-billing",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* COMPACT HERO */}
      <section className="billing-hero">
        <div className="billing-container billing-reveal">
          <div className="billing-breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>
            <span>›</span>
            <span>RCM Services</span>
            <span>›</span>
            <span>Medical Billing</span>
          </div>

          <h1>Professional Medical Billing Services for Every Specialty
          </h1>

          <p>
            Outsource medical billing to certified experts — quicker reimbursements, lower denials, and improved collection performance with multi-specialty healthcare.

          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="billing-stats-section">
        <div className="billing-container">
          <div className="billing-stats-grid">
            {stats.map((item) => (
              <div className="billing-stat-card billing-reveal" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT BILLING */}
      <section className="billing-section billing-white">
        <div className="billing-container billing-split-grid">
          <div className="billing-copy billing-reveal">
            <span className="billing-kicker">Expert Billing</span>

            <h2>Precision Billing That Maximizes Collections
            </h2>

            <div className="billing-title-line" />

            <p>
              Medical billing is more than simply submitting claims — it is a precision workflow that can determine if and when your practice gets paid. Revno RCM reduces billing friction for providers, cleans up claim workflows and helps them in revenue performance.

            </p>

            <div className="billing-check-list">
              {billingBenefits.map((item) => (
                <div className="billing-check-item billing-reveal" key={item}>
                  <strong>✓</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Get a Free Billing Assessment →
            </button>
          </div>

          <div className="billing-clean-image-wrap billing-reveal">
            <img
              src={images.main}
              alt="Medical billing services by Revno RCM"
              className="billing-clean-image"
            />
          </div>
        </div>
      </section>

      {/* PROCESS CARDS */}
      <section className="billing-section billing-soft">
        <div className="billing-container">
          <div className="billing-head billing-reveal">
            <span>Billing Workflow</span>
            <h2>Built to Improve Claim Accuracy Before Submission
            </h2>
            <p>
              Overall designed billing processes allow for less defects, enhanced claim acceptance and a consistently flowing revenue cycle.

            </p>
          </div>

          <div className="billing-process-grid">
            {processCards.map((item, index) => (
              <article className="billing-process-card billing-reveal" key={item.title}>
                <div className="billing-process-image">
                  <img src={item.image} alt={item.title} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="billing-process-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BILLING FLOW */}
      <section className="billing-section billing-white">
        <div className="billing-container billing-flow-layout">
          <div className="billing-copy billing-reveal">
            <span className="billing-kicker">Claim Lifecycle</span>

            <h2>From Patient Data to Final Reimbursement</h2>

            <div className="billing-title-line" />

            <p>
              Revno RCM integrates end-to-end billing processes from collecting patient information, eligibility checks, coding to charge entry, claim submission, payment posting and AR follow-up all in one.

            </p>

            <p>
              This structured workflow prevents missed charges, minimizes claim denials and maximizes financial visibility for your practice.

            </p>
          </div>

          <div className="billing-flow-panel billing-reveal">
            {billingFlow.map((item, index) => (
              <div className="billing-flow-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="billing-section billing-soft">
        <div className="billing-container">
          <div className="billing-head billing-reveal">
            <span>Specialties</span>
            <h2>Medical Billing Across Every Specialty</h2>
            <p>
              Workflows specific to specialties enable practices to address payer rules, documentation standards, coding patterns, and claim requirements.

            </p>
          </div>

          <div className="billing-specialty-grid">
            {specialties.map((item, index) => (
              <article className="billing-specialty-card billing-reveal" key={item.title}>
                <div className="billing-specialty-num">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="billing-final-cta">
        <div className="billing-container billing-reveal">
          <h2>Outsource Your Medical Billing to the Experts</h2>

          <p>
            Stop chasing claims. Let Revno RCM’s certified billers maximize your
            reimbursements so you can focus on patient care.
          </p>

          <button type="button" onClick={() => goToPage("/contact-us")}>
            Get a Free Billing Assessment →
          </button>
        </div>
      </section>
    </main>
  );
}