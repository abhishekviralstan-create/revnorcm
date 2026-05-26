import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/about.css";
import aboutDoctorImg from "../assests/home/about-us-page.png";
import aboutMenImg from "../assests/home/why-choose.png";
import eligibility from "../assests/home/Eligibility.jpg"
import coding from "../assests/home/coding.webp"
import iso from "../assests/home/iso.jpg"
import hippa from "../assests/home/hippa.jpg"
import claim from "../assests/home/claim.png"
import rndenial from "../assests/home/rndenial.webp"
import accuracy from "../assests/home/Accuracy.avif";
import denial from "../assests/home/Denials.avif"
import hippa2 from "../assests/home/hippa.avif"
import reporting from "../assests/home/reporting.avif"
import contract from "../assests/home/contracts.avif"
import support from "../assests/home/support.png"

export default function About() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const images = {


    whoWeAre: aboutDoctorImg,

    rcmEligibility: eligibility,

    rcmCoding: coding,

    rcmClaims: claim,

    rcmAR: rndenial,

    whyChoose: aboutMenImg,

    iso: iso,

    hipaa: hippa,

    valueAccuracy: accuracy,

    valueDenials: denial,

    valueHipaa: hippa2,

    valueReports: reporting,

    valueContract: contract,

    valueSupport: support,

  };

  const rcmFlow = [
    {
      image: images.rcmEligibility,
      title: "Eligibility & Authorization",
      text: "Pre-visit verification of patient coverage, payer rules, and authorization requirements.",
    },
    {
      image: images.rcmCoding,
      title: "Coding & Claim Accuracy",
      text: "Before submitting, enhance accuracy with ICD-10, CPT modifiers and documentation.",
    },
    {
      image: images.rcmClaims,
      title: "Claim Submission",
      text: "Make clean claims submission and eliminate avoidable billing errors throughout the clinical, financial, and payor continuum.",
    },
    {
      image: images.rcmAR,
      title: "AR & Denial Follow-Up",
      text: "Monitor unpaid claims, denial management, and speed up the reimbursement cycle.",
    },
  ];

  const whyChooseAbout = [
    "Over 10 years of RCM focused on specific specialties",
    "Complete end-to-end revenue cycle support",
    "Billing compliant with HIPAA and secure data processing",
    "Account Managers for each practice",
  ];


  const aboutTrustCerts = [
    {
      image: images.iso,
      title: "ISO Certified",
      text: "Quality-driven process standards for reliable billing operations and structured workflows.",
    },
    {
      image: images.hipaa,
      title: "HIPAA Compliant",
      text: "Secure data handling, privacy-focused workflows, and compliance-first billing support.",
    },
  ];

  const values = [
    {
      image: images.valueAccuracy,
      title: "Specialty-Focused Expertise",
      text: "We have broad billing experience across specialty types with payer-specific workflows.",
    },
    {
      image: images.valueDenials,
      title: "Proactive Denial Prevention",
      text: "We caught denial risks in advance and stop the issues so claims never grow to be denials.",
    },
    {
      image: images.valueHipaa,
      title: "HIPAA-Certified Team",
      text: "Compliance-trained billers work within secure workflows and privacy-first processes.",
    },
    {
      image: images.valueReports,
      title: "Real-Time Reporting",
      text: "Insightful dashboards and monetization visibility empowers you to track your collections, AR and overall performance.",
    },
    {
      image: images.valueContract,
      title: "No Long-Term Contracts",
      text: "We deliver measurable outcomes and earn your business over and over again through repeatable performance.",
    },
    {
      image: images.valueSupport,
      title: "Dedicated Support",
      text: "You have dedicated account managers who routinely update contacts and follow up with them.",
    },
  ];

  const certs = [
    "AAPC CPC",
    "AAPC CRC",
    "AAPC CPMA",
    "AHIMA CCS",
    "AHIMA RHIT",
    "HIPAA Certified",
  ];
  const specialtyLogos = [
    { title: "Family Medicine", logo: "/logos/specialties/family-medicine.jpg" },
    { title: "Internal Medicine", logo: "/logos/specialties/internal-medicine.jpg" },
    { title: "Cardiology", logo: "/logos/specialties/cardiology.jpg" },
    { title: "Orthopedics", logo: "/logos/specialties/orthopedics.jpg" },
    { title: "Behavioral Health", logo: "/logos/specialties/behavioral-health.jpg" },
    { title: "Physical Therapy", logo: "/logos/specialties/physical-therapy.jpg" },
    { title: "Urgent Care", logo: "/logos/specialties/urgent-care.png" },
    { title: "Home Health", logo: "/logos/specialties/home-health.jpg" },
    { title: "Dermatology", logo: "/logos/specialties/dermatology.jpg" },
    { title: "Neurology", logo: "/logos/specialties/neurology.jpg" },
    { title: "OB/GYN", logo: "/logos/specialties/ob-gyn.jpg" },
    { title: "Radiology", logo: "/logos/specialties/radiology.jfif" },
    { title: "Podiatry", logo: "/logos/specialties/podiatry.PNG" },
    { title: "Psychiatry", logo: "/logos/specialties/psychiatry.jpg" },
    { title: "Dental", logo: "/logos/specialties/dental.png" },
    { title: "Chiropractic", logo: "/logos/specialties/chiropractic.jpg" },
  ];

  const integrationLogos = [
    { title: "Epic", logo: "/logos/ehr/epic.png" },
    { title: "Athenahealth", logo: "/logos/ehr/athenahealth.png" },
    { title: "eClinicalWorks", logo: "/logos/ehr/eclinicalworks.png" },
    { title: "Kareo", logo: "/logos/ehr/kareo.jpg" },
    { title: "DrChrono", logo: "/logos/ehr/drchrono.webp" },
    { title: "Nexgen", logo: "/logos/ehr/nexgen.png" },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-reveal-show");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    items.forEach((item, index) => {
      item.style.setProperty("--about-delay", `${Math.min(index * 70, 420)}ms`);
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <main className="about-page">
      <Helmet>
        <title>About Revno RCM | Expert RCM & Medical Billing Company</title>

        <meta
          name="description"
          content="Learn about Revno RCM, a trusted medical billing and revenue cycle management company helping healthcare providers reduce denials, improve collections, and strengthen revenue performance."
        />

        <meta
          name="keywords"
          content="about Revno RCM, medical billing company, RCM company, revenue cycle management company, healthcare billing experts, HIPAA compliant billing company, medical billing experts, healthcare revenue cycle services"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/about-us" />

        <meta
          property="og:title"
          content="About Revno RCM | Expert RCM & Medical Billing Company"
        />
        <meta
          property="og:description"
          content="Revno RCM helps healthcare providers streamline medical billing, reduce claim denials, improve collections, and manage revenue cycle operations with secure, reliable support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/about-us" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Revno RCM | Medical Billing & RCM Experts"
        />
        <meta
          name="twitter:description"
          content="A trusted medical billing and revenue cycle management company focused on cleaner claims, faster payments, and stronger healthcare revenue performance."
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
                description:
                  "Revno RCM is a medical billing and revenue cycle management company helping healthcare providers reduce denials, improve collections, and optimize revenue performance.",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://www.revnorcm.com/#website",
                url: "https://www.revnorcm.com/",
                name: "Revno RCM",
                publisher: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
              },
              {
                "@type": "AboutPage",
                "@id": "https://www.revnorcm.com/about-us/#webpage",
                url: "https://www.revnorcm.com/about-us",
                name: "About Revno RCM | Expert RCM & Medical Billing Company",
                description:
                  "Learn about Revno RCM, a trusted medical billing and revenue cycle management company serving healthcare providers nationwide.",
                isPartOf: {
                  "@id": "https://www.revnorcm.com/#website",
                },
                about: {
                  "@id": "https://www.revnorcm.com/#organization",
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
                    name: "About Us",
                    item: "https://www.revnorcm.com/about-us",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="about-premium-hero">
        <div className="about-hero-glow about-hero-glow-one" />
        <div className="about-hero-glow about-hero-glow-two" />

        <div className="about-container about-premium-hero-inner">
          <div className="about-hero-copy about-reveal">
            <div className="about-breadcrumb">
              <button type="button" onClick={() => goToPage("/")}>
                Home
              </button>
              <span>›</span>
              <span>About Us</span>
            </div>
            <h1>About Revno RCM</h1>

            <p>
              A Trusted RCM company helping healthcare providers take control of collections, compliance, claim performance and long-term revenue growth that is HIPAA-compliant and trusted with the billing.

            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section about-white">
        <div className="about-container">
          <div className="about-intro-card about-reveal">
            <div className="about-intro-content">
              <span className="about-sec-kicker">Who We Are</span>

              <h2>Designed for the Healthcare Provider.</h2>

              <div className="about-title-line" />

              <p>
                Revno RCM is an all-in-one medical billing company and HIPAA-compliant billing partner with one mission statement — support healthcare providers in taking complete charge of their revenue cycle without putting anyone over the limit on staff, time, or compliance.
              </p>



              <p>
                Revno RCM is here to solve these problems. Working as part of your practice, our certified medical billing experts, coders and compliance specialists are not just another vendor.
              </p>
            </div>

            <div className="about-home-style-image about-who-image-wrap">
              <img
                src={images.whoWeAre}
                alt="Revno RCM healthcare billing team"
                className="about-transparent-doctor-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-section">
        <div className="about-container">
          <div className="mission-card about-reveal">
            <span className="about-sec-kicker">Our Mission</span>

            <h2>Transparent, Data-Driven Protection For Every Dollar
            </h2>

            <p>
              Our revenue cycle management services are transparent, data-driven and results-oriented so providers get to spend their time ensuring the care of patients while we utilize every single dollar that needs to be captured, tracked and optimized.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section about-what-section">
        <div className="about-container about-split-grid">
          <div className="about-section-copy about-reveal">
            <span className="about-sec-kicker">What We Do</span>

            <h2>What Is Revenue Cycle Management?</h2>

            <div className="about-title-line" />

            <p>
              This is called Revenue Cycle Management, or RCM, the comprehensive financial process that allows a health care organization to function. The process begins before the patient even walks in for their visit, with eligibility and authorization checks; proceeds through coding, claim submission, payment posting, denial management, and finally collections.
            </p>

            <p>
              With RCM done right, your practice is paid faster without avoidable denials while improving cash flow and relieving administrative burden on your staff.

            </p>

            <button
              type="button"
              className="about-primary-btn"
              onClick={() => goToPage("/rcm-services")}
            >
              Explore RCM Services →
            </button>
          </div>

          <div className="about-rcm-flow-grid about-reveal">
            {rcmFlow.map((item) => (
              <div className="about-rcm-flow-card" key={item.title}>
                <div className="about-flow-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-section about-why-section">
        <div className="about-container about-split-grid reverse">
          <div className="about-home-style-image about-why-image-wrap about-reveal">
            <img
              src={images.whyChoose}
              alt="Revno RCM healthcare billing support"
              className="about-transparent-doctor-img"
            />
          </div>

          <div className="about-section-copy about-reveal">
            <span className="about-sec-kicker">Why Choose Us</span>

            <h2>Why Healthcare Providers Choose Revno RCM</h2>

            <div className="about-title-line" />

            <p>
              Specialty billing intelligence, denial avoidance, compliance-driven workflows, and instant reporting all combine to help providers strengthen their financial operation.

            </p>

            <div className="about-points-list">
              {whyChooseAbout.map((item) => (
                <div className="about-point" key={item}>
                  <span className="about-point-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="about-primary-btn"
              onClick={() => goToPage("/contact-us")}
            >
              Request An Appointment →
            </button>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="about-section about-specialties-section">
        <div className="about-container">
          <div className="about-center-head about-reveal">
            <span className="about-sec-kicker">Specialties</span>

            <h2>Industries & Specialties We Serve</h2>

            <p>
              With dedicated billing and coding workflows aligned to specialty-specific payer rules, documentation standards and compliance requirements, Revno RCM serves healthcare providers across multiple specialties.

            </p>
          </div>

          <div className="about-specialty-logo-grid">
            {specialtyLogos.map((item) => (
              <div className="about-specialty-logo-card about-reveal" key={item.title}>
                <img src={item.logo} alt={`${item.title} billing specialty`} loading="lazy" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <div className="about-center-action about-reveal">
            <button
              type="button"
              className="about-primary-btn"
              onClick={() => goToPage("/contact-us")}
            >
              Talk to Our Billing Team →
            </button>
          </div>
        </div>
      </section>

      {/* COMPLIANCE TRUST */}
      <section className="about-section about-trust-section">
        <div className="about-container about-split-grid">
          <div className="about-section-copy about-reveal">
            <span className="about-sec-kicker">Compliance & Trust</span>

            <h2>Our Certifications</h2>

            <div className="about-title-line" />

            <p>
              Billing Processes at Revno RCM are Secure,-Compliant and Quality Driven. Our standards enable health care billers to accurately implement, process & handle data in a safe manner and subsequently settle revenue cycles reliably.

            </p>
          </div>

          <div className="about-trust-grid">
            {aboutTrustCerts.map((cert) => (
              <div className="about-trust-card about-reveal" key={cert.title}>
                <div className="about-trust-image">
                  <img src={cert.image} alt={cert.title} />
                </div>

                <h3>{cert.title}</h3>

                <p>{cert.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="about-section about-white about-sets-section">
        <div className="about-container">
          <div className="about-center-head about-reveal">
            <span className="about-sec-kicker">What Sets Us Apart</span>

            <h2>Why Providers Choose Revno RCM</h2>

            <p>
              Our system is built around cleaner claims, compliance with those clearer two roles and, therefore for the organization transparency that sees through it, where the financial benefits become measurable.

            </p>
          </div>

          <div className="about-cards-grid about-premium-value-grid">
            {values.map((item, index) => (
              <div className="about-feature-card about-reveal" key={item.title}>
                <div className="about-feature-image">
                  <img src={item.image} alt={item.title} />

                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="about-feature-body">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* TECHNOLOGY */}
      <section className="about-section about-white">
        <div className="about-container">
          <div className="technology-card about-reveal">
            <div>
              <span className="about-sec-kicker">Technology & Integrations</span>

              <h2>Seamless EHR Integrations</h2>

              <div className="about-title-line" />

              <p>
                We connect with leading EHRs with no setup and zero workflow change.
              </p>
            </div>

            <div className="ehr-logo-grid">
              {integrationLogos.map((item) => (
                <div className="ehr-logo-card" key={item.title}>
                  <img src={item.logo} alt={`${item.title} EHR integration`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-band">
        <div className="about-container about-reveal">
          <h2>Ready to Work With a Trusted RCM Partner?</h2>

          <p>
            Boost collections, decrease denials and take control of your revenue cycle now.
          </p>

          <button type="button" onClick={() => goToPage("/contact-us")}>
            Schedule a Free Consultation →
          </button>
        </div>
      </section>
    </main>
  );
}