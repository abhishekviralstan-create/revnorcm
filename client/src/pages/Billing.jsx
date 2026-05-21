import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../css/billing.css";

export default function Billing() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const images = {
    main:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    claim:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    coding:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    payment:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    audit:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
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
    "Remove the cost of internal billing staff — salary, training, benefits, and turnover",
    "Access specialty medical billing with certified experts for every specialty",
    "Pre-submission claim scrubbing to reduce denials and billing errors",
    "Most claims processed within 14–21 days for faster payment",
    "Stay current with ICD-10, CPT updates, and payer policy changes",
    "Scale billing capacity without hiring or layoffs",
  ];

  const processCards = [
    {
      image: images.claim,
      title: "Claim Scrubbing",
      desc: "Claims are reviewed before submission to reduce avoidable errors, missing information, and payer rejections.",
    },
    {
      image: images.coding,
      title: "Coding Accuracy",
      desc: "Billing workflows are supported by accurate ICD-10, CPT, HCPCS, and modifier checks.",
    },
    {
      image: images.payment,
      title: "Payment Tracking",
      desc: "Submitted claims, payments, adjustments, and open balances are tracked for clearer revenue visibility.",
    },
    {
      image: images.audit,
      title: "AR Follow-Up",
      desc: "Aging claims are followed with discipline so unpaid revenue does not sit unresolved.",
    },
  ];

  const specialties = [
    {
      title: "Internal Medicine & Family Practice",
      desc: "Comprehensive billing for primary care, chronic care management, preventive services, and E&M visits.",
    },
    {
      title: "Cardiology & Interventional",
      desc: "Expert billing for cardiac procedures, catheterizations, stress testing, and interventional services.",
    },
    {
      title: "Orthopedics & Sports Medicine",
      desc: "Precise coding for surgical and non-surgical orthopedic services, joint procedures, and sports injury care.",
    },
    {
      title: "Behavioral Health & Psychiatry",
      desc: "Specialized billing for mental health services, therapy, psychiatry, and substance use treatment.",
    },
    {
      title: "Physical & Occupational Therapy",
      desc: "Accurate billing for therapy services, functional evaluations, and rehabilitation programs.",
    },
    {
      title: "Emergency Medicine & Urgent Care",
      desc: "High-volume, fast-turnaround billing for emergency visits, facility fees, and urgent care encounters.",
    },
    {
      title: "OB/GYN & Women's Health",
      desc: "Global maternity billing, gynecological procedures, preventive services, and prenatal care.",
    },
    {
      title: "Radiology & Imaging",
      desc: "Technical and professional component billing for MRI, CT, X-Ray, and ultrasound services.",
    },
    {
      title: "Home Health & Hospice",
      desc: "Medicare and Medicaid billing for home health agencies, hospice providers, and DME.",
    },
  ];

  const billingFlow = [
    "Patient Demographics Review",
    "Eligibility & Benefits Check",
    "Charge Entry Validation",
    "Coding & Modifier Review",
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

          <h1>Professional Medical Billing Services for Every Specialty</h1>

          <p>
            Outsource medical billing to certified specialists — faster
            reimbursements, fewer denials, and stronger collection performance
            across multiple healthcare specialties.
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

            <h2>Precision Billing That Maximizes Collections</h2>

            <div className="billing-title-line" />

            <p>
              Medical billing is not just about submitting claims — it is a
              precision workflow that influences whether and when your practice
              receives payment. Revno RCM helps healthcare providers reduce
              billing friction, clean up claim workflows, and improve revenue
              performance.
            </p>

            <p>
              Our billing specialists support claim creation, scrubbing,
              submission, payment tracking, denial follow-up, and reporting so
              your team can focus more on patient care.
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

          <div className="billing-image-wrap billing-reveal">
            <img src={images.main} alt="Medical billing services by Revno RCM" />

            <div className="billing-image-badge top">
              <strong>Cleaner Claims</strong>
              <span>Pre-submission review</span>
            </div>

            <div className="billing-image-badge middle">
              <strong>Faster Payments</strong>
              <span>Structured claim follow-up</span>
            </div>

            <div className="billing-image-badge bottom">
              <strong>Lower Denials</strong>
              <span>Better billing control</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS CARDS */}
      <section className="billing-section billing-soft">
        <div className="billing-container">
          <div className="billing-head billing-reveal">
            <span>Billing Workflow</span>
            <h2>Built to Improve Claim Accuracy Before Submission</h2>
            <p>
              Every billing step is designed to reduce errors, improve claim
              acceptance, and keep your revenue cycle moving.
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
              Revno RCM connects patient information, eligibility checks, coding,
              charge entry, claim submission, payment posting, and AR follow-up
              into one organized billing process.
            </p>

            <p>
              This structured workflow helps prevent missed charges, reduce
              claim errors, and improve financial visibility for your practice.
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
              Specialty-specific workflows help practices manage payer rules,
              documentation standards, coding patterns, and claim requirements.
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