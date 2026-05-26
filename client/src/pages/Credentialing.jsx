import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/credentialing.css";

import {
  FaArrowRight,
  FaCheckCircle,
  FaRegFileAlt,
  FaShieldAlt,
  FaUserMd,
  FaClock,
} from "react-icons/fa";

/* ORIGINAL IMAGES */
import credentialingImg from "../assests/services/Credentialing.webp";
import rcmImg from "../assests/services/RCM.png";
import reportingImg from "../assests/home/delay.jpg";

export default function Credentialing({ onNavigate }) {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const revealItems = document.querySelectorAll(".cred-reveal");

    revealItems.forEach((item, index) => {
      item.style.setProperty("--cred-delay", `${Math.min(index * 70, 420)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("cred-show");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -70px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const payers = [
    {
      name: "Medicare",
      logo: "/payers/medicare.png",
    },
    {
      name: "Medicaid",
      logo: "/payers/medicaid.png",
    },
    {
      name: "Aetna",
      logo: "/payers/aetna.png",
    },
    {
      name: "Cigna",
      logo: "/payers/cigna.png",
    },
    {
      name: "UnitedHealthcare",
      logo: "/payers/united-healthcare.png",
    },
    {
      name: "BCBS",
      logo: "/payers/bcbs.png",
    },
    {
      name: "Humana",
      logo: "/payers/humana.png",
    },
    {
      name: "Molina",
      logo: "/payers/molina.png",
    },
    {
      name: "WellCare",
      logo: "/payers/wellcare.png",
    },
    {
      name: "Tricare",
      logo: "/payers/tricare.png",
    },
  ];

  const checks = [
    "CAQH profile creation and ongoing maintenance",
    "Initial payer enrollment for commercial and government insurers",
    "Medicare and Medicaid enrollment with CMS-855 applications",
  ];

  const processSteps = [
    {
      icon: <FaRegFileAlt />,
      title: "Document Collection",
      text: "We organize provider documents, licenses, certifications, NPIs, malpractice details, CAQH access, and payer requirements.",
    },
    {
      icon: <FaUserMd />,
      title: "CAQH & Profile Setup",
      text: "Provider profiles are created, updated, attested, and maintained to support faster payer application processing.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Payer Enrollment",
      text: "Applications are submitted to Medicare, Medicaid, commercial payers, and insurance panels with clean tracking.",
    },
    {
      icon: <FaClock />,
      title: "Follow-Up & Approval",
      text: "Our team tracks payer status, responds to requests, manages revalidation, and helps providers get in-network faster.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Provider Credentialing Services | Fast Enrollment | Revno RCM</title>

        <meta
          name="description"
          content="Streamline provider credentialing and payer enrollment with Revno RCM. We handle CAQH, Medicare, Medicaid, and commercial payers for faster approvals."
        />

        <meta
          name="keywords"
          content="provider credentialing services, payer enrollment services, medical credentialing services, CAQH credentialing, Medicare enrollment, Medicaid enrollment, commercial payer enrollment, physician credentialing, healthcare provider enrollment, insurance panel enrollment"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/credentialing" />

        <meta
          property="og:title"
          content="Provider Credentialing Services | Fast Enrollment | Revno RCM"
        />
        <meta
          property="og:description"
          content="Revno RCM handles CAQH, Medicare, Medicaid, and commercial payer enrollment to reduce admin burden and speed up provider approvals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/credentialing" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Provider Credentialing Services | Fast Enrollment | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Fast provider credentialing and payer enrollment support for CAQH, Medicare, Medicaid, and commercial payers."
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
                "@id": "https://www.revnorcm.com/credentialing/#service",
                name: "Provider Credentialing Services",
                provider: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
                serviceType: [
                  "Provider Credentialing Services",
                  "Payer Enrollment Services",
                  "CAQH Credentialing",
                  "Medicare Enrollment",
                  "Medicaid Enrollment",
                  "Commercial Payer Enrollment",
                  "Insurance Panel Enrollment",
                  "Physician Credentialing",
                ],
                description:
                  "Revno RCM provides provider credentialing and payer enrollment services for CAQH, Medicare, Medicaid, and commercial payers to reduce administrative burden and speed up approvals.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Healthcare Providers",
                },
                url: "https://www.revnorcm.com/credentialing",
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
                    name: "Credentialing",
                    item: "https://www.revnorcm.com/credentialing",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="cred-page">
        {/* HERO */}
        <section className="cred-page-hero">
          <div className="cred-container">
            <div className="cred-breadcrumb cred-reveal">
              <button type="button" onClick={() => onNavigate?.("home") || goToPage("/")}>
                Home
              </button>
              <span>›</span>
              <button type="button" onClick={() => goToPage("/rcm-services")}>
                RCM Services
              </button>
              <span>›</span>
              <strong>Credentialing</strong>
            </div>

            <h1 className="cred-reveal">Provider Credentialing & Payer Enrollment Services</h1>

            <p className="cred-reveal">
              Get providers in-network faster with CAQH management, payer enrollment,
              re-credentialing, status tracking, and approval follow-up.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="cred-section">
          <div className="cred-container cred-split">
            <div className="cred-content cred-reveal cred-left">
              <span className="cred-kicker">Why Credentialing Matters</span>
              <h2>The Gateway to Getting Paid</h2>
              <div className="cred-title-line" />

              <p>
                Until a provider is fully credentialed, claims cannot be submitted
                correctly and every delay can create revenue loss for the practice.
                Credentialing often takes 60–180 days per payer when not managed properly.
              </p>

              <p>
                Revno RCM streamlines payer enrollment, CAQH maintenance, status tracking,
                and follow-up so providers can get in-network faster and start billing sooner.
              </p>

              <button
                type="button"
                className="cred-primary-btn"
                onClick={() => goToPage("/contact-us")}
              >
                Talk to Credentialing Team <FaArrowRight />
              </button>
            </div>

            <div className="cred-image-card cred-reveal cred-right">
              <img src={credentialingImg} alt="Provider credentialing services" />
              <div className="cred-image-badge">
                <strong>Provider Enrollment</strong>
                <span>Faster approvals. Fewer delays.</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="cred-section cred-soft-section">
          <div className="cred-container">
            <div className="cred-section-head cred-reveal">
              <span className="cred-kicker">Credentialing Workflow</span>
              <h2>Complete Provider Credentialing Support</h2>
              <p>
                From CAQH setup to payer follow-up, we manage the administrative steps
                that help your providers become revenue-ready faster.
              </p>
            </div>

            <div className="cred-process-grid">
              {processSteps.map((item, index) => (
                <article className="cred-process-card cred-reveal" key={item.title}>
                  <div className="cred-process-icon">{item.icon}</div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="cred-section">
          <div className="cred-container cred-split">
            <div className="cred-image-card cred-reveal cred-left">
              <img src={rcmImg} alt="Credentialing and payer enrollment workflow" />
              <div className="cred-image-badge">
                <strong>CAQH + Payer Follow-Up</strong>
                <span>Every step tracked clearly.</span>
              </div>
            </div>

            <div className="cred-content cred-reveal cred-right">
              <span className="cred-kicker">What We Handle</span>
              <h2>Credentialing Checks Managed End-to-End</h2>
              <div className="cred-title-line" />

              <div className="cred-benefit-list">
                {checks.map((item) => (
                  <div className="cred-benefit-item cred-reveal" key={item}>
                    <strong>
                      <FaCheckCircle />
                    </strong>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PAYERS */}
        <section className="cred-section cred-soft-section">
          <div className="cred-container">
            <div className="cred-section-head cred-reveal">
              <span className="cred-kicker">Payers We Credential With</span>
              <h2>All Major Payers Covered</h2>
              <p>
                We handle insurance credentialing and payer enrollment with national
                and regional payers, including specialty plans for behavioral health,
                dental, vision, and medical practices.
              </p>
            </div>

            <div className="cred-payer-grid">
              {payers.map((payer, index) => (
                <article className="cred-payer-card cred-reveal" key={payer.name}>
                  <div className="cred-payer-logo">
                    <img src={payer.logo} alt={`${payer.name} logo`} />
                  </div>

                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{payer.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="cred-section">
          <div className="cred-container cred-split">
            <div className="cred-content cred-reveal cred-left">
              <span className="cred-kicker">Revenue Readiness</span>
              <h2>Credentialing Delays Can Block Billing Revenue</h2>
              <div className="cred-title-line" />

              <p>
                A provider may be ready to deliver care, but without approved payer
                enrollment, billing can be delayed or denied. Proper credentialing keeps
                your practice ready to submit claims without unnecessary payer barriers.
              </p>

              <p>
                Revno RCM helps reduce administrative workload while improving visibility
                into payer status, missing items, revalidation timelines, and approval progress.
              </p>
            </div>

            <div className="cred-image-card cred-reveal cred-right">
              <img src={reportingImg} alt="Provider credentialing status reports" />
              <div className="cred-image-badge">
                <strong>Status Tracking</strong>
                <span>Transparent updates for every payer.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cred-cta">
          <div className="cred-container cred-cta-inner cred-reveal">
            <span className="cred-kicker">Start Credentialing</span>
            <h2>Get In-Network Faster</h2>
            <p>
              Don’t lose another month of billing revenue to credentialing delays.
              Let Revno RCM manage CAQH, payer enrollment, re-credentialing, and
              follow-up from start to approval.
            </p>

            <button type="button" onClick={() => goToPage("/contact-us")}>
              Start Credentialing Today <FaArrowRight />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}