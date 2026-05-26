import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import API from "../api";
import {
  FaRegFileAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaClock,
  FaMoneyBillWave,
  FaChartPie,
  FaShieldAlt,
  FaCoins,
  FaFolderOpen,
  FaUserMd,
  FaHandHoldingUsd,
} from "react-icons/fa";

/* SERVICE IMAGES */
import serviceImg1 from "../assests/services/RCM.png";
import serviceImg2 from "../assests/services/medical-billing.png";
import serviceImg3 from "../assests/services/medical-coding.png";
import serviceImg4 from "../assests/services/eligibility.png";
import serviceImg5 from "../assests/services/denial.webp";
import serviceImg6 from "../assests/services/Credentialing.webp";
import serviceImg7 from "../assests/services/charges-entry.webp";
import serviceImg8 from "../assests/services/payment-posting.jpg";
import serviceImg9 from "../assests/services/hippa.webp";
import serviceImg10 from "../assests/services/reporting-analytics.webp";

import centerGirl from "../assests/home/women.png";
import centerMen from "../assests/home/men.png";
import bubbleImg1 from "../assests/home/1.png";
import bubbleImg2 from "../assests/home/2.png";
import bubbleImg3 from "../assests/home/3.png";
import bubbleImg4 from "../assests/home/4.png";

/* HOME PAGE IMAGES */
import aboutMain from "../assests/home/about-main.jpg";
import technologyImg from "../assests/home/technology.jpg";
import innovationImg from "../assests/home/innovation.webp";
import integrationImg from "../assests/home/Specialties.png";
import certificationImg from "../assests/home/certifications.png";
import auditImage from "../assests/home/free-consultation.avif";

/* CERTIFICATION BADGES */
import isoBadge from "../assests/certifications/iso.png";
import hipaaBadge from "../assests/certifications/hippa.webp";
import socBadge from "../assests/certifications/socBadge.jpg";
import hitrustBadge from "../assests/certifications/hitrust.png";

function CountUp({ end, prefix = "", suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupLoading, setPopupLoading] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(false);
  const [homeBlogs, setHomeBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [activeBlogId, setActiveBlogId] = useState(null);
  const [serviceCardsPerView, setServiceCardsPerView] = useState(3);
  const [testimonialCardsPerView, setTestimonialCardsPerView] = useState(2);

  const [serviceIndex, setServiceIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    const revealItems = document.querySelectorAll(`
        .hero-info-card,
    .rcm-text-block,
    .about-rcm-single-visual,
    .unify-expect-card,
    .specialty-tags span,
    .revno-image-service-card,
    .cert-logo-card,
    .case-study-card,
    .testimonial-card,
    .homeDynamicCard,
    .revno-audit-image,
    .revno-audit-form-wrap
  `);
    revealItems.forEach((item, index) => {
      item.classList.add("reveal-item");

      if (item.classList.contains("about-rcm-single-visual")) {
        item.classList.add(index % 2 === 0 ? "reveal-left" : "reveal-right");
      } else if (item.classList.contains("rcm-text-block")) {
        item.classList.add(index % 2 === 0 ? "reveal-right" : "reveal-left");
      } else {
        item.classList.add("reveal-up");
      }

      item.style.setProperty("--reveal-delay", `${Math.min(index * 55, 420)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-show");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
    };
  }, [homeBlogs]);
  const handleBlogClick = (blog) => {
    if (!blog?.slug) return;

    setActiveBlogId(blog._id);

    setTimeout(() => {
      goToPage(`/news-blogs/${blog.slug}`);
      setActiveBlogId(null);
    }, 1800);
  };
  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setPopupOpen(true);
    }, 2500);

    return () => clearTimeout(popupTimer);
  }, []);

  useEffect(() => {
    if (popupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [popupOpen]);

  const closeAuditPopup = () => {
    setPopupOpen(false);
    setPopupSuccess(false);
  };
  useEffect(() => {
    const fetchHomeBlogs = async () => {
      try {
        const res = await API.get("/blogs?limit=3");
        setHomeBlogs(Array.isArray(res.data?.blogs) ? res.data.blogs : []);
      } catch (error) {
        setHomeBlogs([]);
        console.log(error.response?.data?.message || "Failed to fetch blogs");
      } finally {
        setBlogsLoading(false);
      }
    };

    fetchHomeBlogs();
  }, []);

  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;

      // Services: desktop 3, tablet 2, mobile 1
      if (width <= 640) {
        setServiceCardsPerView(1);
      } else if (width <= 1024) {
        setServiceCardsPerView(2);
      } else {
        setServiceCardsPerView(3);
      }

      // Testimonials: desktop/tablet 2, mobile 1
      if (width <= 768) {
        setTestimonialCardsPerView(1);
      } else {
        setTestimonialCardsPerView(2);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);
  const GOOGLE_SHEET_WEBHOOK_URL =
    "https://script.google.com/macros/s/AKfycbwQ8h_9U6PYpUiGU0m5yC6_7mZXgOnKjsqc1S3XlTNE8tYItimZrGwXvANJyBVG_j943w/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const phone = form.phone.value.trim();

    if (!/^[0-9+\-\s()]{8,20}$/.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    const formData = new FormData(form);

    try {
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSuccess(true);
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handlePopupSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const phone = form.phone.value.trim();

    if (!/^[0-9+\-\s()]{8,20}$/.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setPopupLoading(true);
    setPopupSuccess(false);

    const formData = new FormData(form);
    formData.append("formSource", "Home Page Popup Free Audit");

    try {
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setPopupSuccess(true);
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setPopupLoading(false);
    }
  };
  const servicesData = [
    {

      cover: serviceImg1,
      title: "Revenue Cycle Management (RCM)",
      desc: "End-to-end revenue cycle support that helps practices reduce denials, improve cash flow, and simplify billing operations.",
      page: "/rcm-services",
    },
    {
      cover: serviceImg2,
      title: "Medical Billing",
      desc: "Accurate claim submission, payment tracking, billing follow-up, and transparent reporting for faster reimbursements.",
      page: "/medical-billing",
    },
    {
      cover: serviceImg3,
      title: "Medical Coding",
      desc: "Certified coding support for ICD-10, CPT, and HCPCS accuracy with cleaner claims and stronger compliance.",
      page: "/medical-coding",
    },
    {
      cover: serviceImg4,
      title: "Eligibility & Benefits Verification",
      desc: "Verify coverage, copays, deductibles, payer rules, and authorizations before patient visits.",
      page: "/eligibility-and-benifits",
    },
    {
      cover: serviceImg5,
      title: "Denial Management",
      desc: "Identify denial trends, manage appeals, recover aging claims, and strengthen collections.",
      page: "/denial-management",
    },
    {
      cover: serviceImg6,
      title: "Provider Credentialing",
      desc: "Simplify payer enrollment, reduce paperwork, and help providers start billing sooner.",
      page: "/credentialing",
    },
    {
      cover: serviceImg7,
      title: "Charges Entry",
      desc: "Accurate charge capture that reduces claim errors and supports clean claim submission.",
      page: "/charges-entry",
    },
    {
      cover: serviceImg8,
      title: "Payment Posting",
      desc: "Post ERA, EOB, insurance, and patient payments with clean reconciliation and AR visibility.",
      page: "/payment-posting",
    },
    {
      cover: serviceImg9,
      title: "HIPAA Compliance",
      desc: "Secure billing workflows and compliant handling of patient and practice data.",
      page: "/hipaa-compliance",
    },
    {
      cover: serviceImg10,
      title: "Reporting & Analytics",
      desc: "Actionable revenue reports that help you track performance, gaps, trends, and financial health.",
      page: "/reporting",
    },
  ];
  const featuredServices = servicesData.slice(0, 4);
  const expectStats = [
    {
      icon: <FaClock />,
      end: 65,
      suffix: "%",
      label: "Reduction in Document Processing Time",
    },
    {
      icon: <FaMoneyBillWave />,
      end: 14,
      suffix: "%",
      label: "Intake Cost Savings Per Patient",
    },
    {
      icon: <FaChartPie />,
      end: 68,
      suffix: "%",
      label: "Reduction in AR Turnaround",
    },
    {
      icon: <FaRegFileAlt />,
      end: 100,
      suffix: "%",
      label: "Paperless Processes",
    },
    {
      icon: <FaUsers />,
      end: 1500,
      suffix: "+",
      label: "Employees",
    },
    {
      icon: <FaMapMarkerAlt />,
      end: 4,
      suffix: "",
      label: "Locations",
    },
  ];

  const certificationBadges = [
    { img: isoBadge, title: "ISO Certified" },
    { img: hipaaBadge, title: "HIPAA Compliant" },
    { img: socBadge, title: "SOC 2" },
    { img: hitrustBadge, title: "HITRUST" },
  ];

  const specialtyTags = [
    "Family Medicine",
    "Internal Medicine",
    "Cardiology",
    "Orthopedics",
    "Behavioral Health",
    "Physical Therapy",
    "Urgent Care",
    "Home Health",
    "Dermatology",
    "Neurology",
    "OB/GYN",
    "Radiology",
    "Podiatry",
    "Psychiatry",
    "Dental",
    "Chiropractic",
  ];

  const whyChooseItems = [
    "10+ years of specialty-focused RCM expertise",
    "Complete end-to-end revenue cycle support",
    "HIPAA-compliant billing and secure data handling",
    "Dedicated account managers for every practice",
  ];

  const caseStudies = [
    {
      icon: <FaShieldAlt />,
      metric: "28% → 9%",
      specialty: "Internal Medicine",
      title: "High Denial Rate Reduction",
      desc: "Fewer avoidable denials with enhanced eligibility checks, coding audits, authorization advancements and daily AR follow-ups.",
    },
    {
      icon: <FaCoins />,
      metric: "$420K",
      specialty: "Orthopedics",
      title: "Revenue Leakage Recovery",
      desc: "Achieved increased charge capture, documentation review, and same-day entry of the charge to recover missed revenue opportunities.",
    },
    {
      icon: <FaFolderOpen />,
      metric: "$1.3M",
      specialty: "Cardiology",
      title: "AR Recovery Project",
      desc: "AR Rework spoil the high value claims appeals, payer follow-ups and corrected claim resubmissions.",
    },
  ];
  const testimonials = [
    {
      name: "Dr. Amanda Collins",
      role: "Family Practice Owner",
      initial: "A",
      text: "Revno RCM helped us understand our billing gaps and reduced avoidable claim delays within the first few weeks.",
    },
    {
      name: "Michael Reed",
      role: "Practice Administrator",
      initial: "M",
      text: "Their reporting is clear, their follow-up is consistent, and our team finally has better revenue visibility.",
    },
    {
      name: "Dr. Sarah Mitchell",
      role: "Behavioral Health Provider",
      initial: "S",
      text: "The team is responsive and knowledgeable. They made credentialing and billing support much smoother for us.",
    },
    {
      name: "James Parker",
      role: "Clinic Operations Manager",
      initial: "J",
      text: "We saw cleaner claims, quicker updates, and better AR follow-up after moving our billing support to Revno RCM.",
    },
    {
      name: "Emily Johnson",
      role: "Dental Practice Manager",
      initial: "E",
      text: "Their specialty-focused approach helped our practice reduce confusion around payer rules and claim tracking.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % servicesData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [servicesData.length]);

  const activeServices = useMemo(() => {
    return Array.from({ length: serviceCardsPerView }, (_, index) => {
      return servicesData[(serviceIndex + index) % servicesData.length];
    });
  }, [serviceCardsPerView, serviceIndex, servicesData]);

  const activeTestimonials = useMemo(() => {
    return Array.from({ length: testimonialCardsPerView }, (_, index) => {
      return testimonials[(testimonialIndex + index) % testimonials.length];
    });
  }, [testimonialCardsPerView, testimonialIndex, testimonials]);

  const testimonialDots = testimonials.map((_, index) => index);
  const serviceDots = servicesData.map((_, index) => index);
  const goPrevService = () => {
    setServiceIndex((prev) =>
      prev === 0 ? servicesData.length - 1 : prev - 1
    );
  };

  const goNextService = () => {
    setServiceIndex((prev) => (prev + 1) % servicesData.length);
  };

  const goPrevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };
  return (
    <>
      <Helmet>
        <title>Revno RCM | Medical Billing & Revenue Cycle Management Services</title>

        <meta
          name="description"
          content="Revno RCM provides HIPAA-compliant medical billing and revenue cycle management services to reduce claim denials and optimize healthcare revenue."
        />

        <meta
          name="keywords"
          content="medical billing services, revenue cycle management, RCM services, healthcare billing, medical coding, denial management, AR follow up, payment posting, eligibility verification, HIPAA compliant billing, claims management, healthcare revenue optimization"
        />

        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="bingbot" content="index, follow" />

        <link rel="canonical" href="https://www.revnorcm.com/" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta
          property="og:title"
          content="Revno RCM | Medical Billing & Revenue Cycle Management Services"
        />
        <meta
          property="og:description"
          content="Reduce claim denials, improve revenue, and streamline your healthcare billing with Revno RCM’s complete revenue cycle management services."
        />
        <meta property="og:url" content="https://www.revnorcm.com/" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />
        <meta property="og:image:alt" content="Revno RCM Medical Billing Services" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Revno RCM | Medical Billing & RCM Services" />
        <meta
          name="twitter:description"
          content="HIPAA-compliant medical billing, coding, denial management, AR follow-up, and complete RCM solutions."
        />
        <meta name="twitter:image" content="https://www.revnorcm.com/og-image.jpg" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.revnorcm.com/#organization",
                  "name": "Revno RCM",
                  "url": "https://www.revnorcm.com/",
                  "logo": "https://www.revnorcm.com/logo.png",
                  "description": "Revno RCM provides medical billing and revenue cycle management services for healthcare providers."
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.revnorcm.com/#website",
                  "url": "https://www.revnorcm.com/",
                  "name": "Revno RCM",
                  "publisher": {
                    "@id": "https://www.revnorcm.com/#organization"
                  }
                },
                {
                  "@type": "MedicalBusiness",
                  "@id": "https://www.revnorcm.com/#medicalbusiness",
                  "name": "Revno RCM",
                  "url": "https://www.revnorcm.com/",
                  "image": "https://www.revnorcm.com/og-image.jpg",
                  "logo": "https://www.revnorcm.com/logo.png",
                  "description": "HIPAA-compliant medical billing, coding, denial management, AR follow-up, payment posting, and revenue cycle management services.",
                  "priceRange": "$$",
                  "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                  },
                  "serviceType": [
                    "Medical Billing Services",
                    "Revenue Cycle Management",
                    "Medical Coding",
                    "Denial Management",
                    "AR Follow Up",
                    "Payment Posting",
                    "Eligibility Verification"
                  ]
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <main className="unify-home">
        {/* HERO */}
        <section className="unify-hero">
          <video className="unify-hero-video" autoPlay muted loop playsInline>
            <source src="/medical-hero.mp4" type="video/mp4" />
          </video>

          <div className="unify-hero-overlay" />

          <div className="unify-hero-content">
            <h1>Trusted RCM & Medical Billing Services</h1>

            <p>
              Revno RCM enables healthcare practices across the United States to recover more
              revenue, reduce claim denials, and streamline operations.
            </p>

            <div className="unify-hero-buttons">
              <button type="button" className="hero-btn primary" onClick={() => goToPage("/contact-us")}>
                Get In Touch
              </button>

              <button type="button" className="hero-btn secondary" onClick={() => goToPage("/contact-us")}>
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* HERO INFO */}
        <section className="hero-info-strip">
          <div className="hero-info-card blue-dark" style={{ "--case-delay": "0ms" }}>
            <h3>Online Appointment</h3>
            <p>Simple steps that you need to follow and get your appointment fixed online.</p>
            <button type="button" onClick={() => goToPage("/contact-us")}>
              Make an appointment
            </button>
          </div>

          <div className="hero-info-card sky-blue" style={{ "--case-delay": "120ms" }}>
            <h3>24/7 Operation Reliability</h3>
            <p>With a rapid turnaround and 24/7 assistance, the operational dependability is outstanding.</p>
            <strong>+0 (000) 000-0000</strong>
          </div>

          <div className="hero-info-card green" style={{ "--case-delay": "240ms" }}>
            <h3>Qualified Professionals</h3>
            <p>Facility based knowledge and specialty-related experience enhances the financial well-being of your facility.</p>
            <button type="button" onClick={() => goToPage("/contact-us")}>
              Get in touch
            </button>
          </div>
        </section>

        {/* ABOUT */}
        <section className="unify-section about-rcm-section">
          <div className="unify-container unify-split-grid">
            <div className="unify-split-content rcm-text-block">
              <span className="section-kicker">About Revno RCM</span>

              <h2>Your Revenue Cycle Management Partner</h2>

              <div className="title-line" />

              <p>
                Revno RCM collaborates with health systems to enhance the ability to leverage technology and streamline billing, decrease claim inaccuracies, minimize denials in addition to delivering a seamless revenue cycle operation from patient registration through final reimbursement.

              </p>

              <p>
                Our experienced team handles medical billing, coding, eligibility verification, payment posting and denial follow-up to provide compliance-driven revenue cycle support so you can focus on patient care.

              </p>

              <button type="button" onClick={() => goToPage("/about-us")}>
                Read More <FaArrowRight />
              </button>
            </div>

            <div className="specialties-visual-wrap">
              <img
                src={centerGirl}
                alt="Medical specialties we serve"
                className="specialties-doctor-img"
              />
            </div>
          </div>
        </section>

        {/* EXPECT STATS */}
        <section className="unify-expect-section">
          <div className="unify-container">
            <div className="case-study-head">
              <span>Trust</span>
              <h2>Why 2,000+ Providers Trust Us</h2>
              <p>
                At Revno RCM, we help healthcare providers boost collections, reduce denials, and improve cash flow with smarter Revenue Cycle Management—so they can focus on quality patient care.

              </p>
            </div>

            <div className="unify-expect-grid">
              {expectStats.map((item, index) => (
                <div className="unify-expect-card" key={`${item.label}-${index}`}>
                  <div className="expect-icon">{item.icon}</div>

                  <div>
                    <h3>
                      <CountUp end={item.end} suffix={item.suffix} />
                    </h3>
                    <p>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* SPECIALTIES */}
        <section className="unify-split-section specialties-section">
          <div className="unify-container unify-split-grid">
            <div className="unify-split-content rcm-text-block">
              <span className="section-kicker">Specialties</span>

              <h2>Specialties We Serve</h2>

              <div className="title-line" />

              <p>
                RevnoRCM uses dedicated billing and coding workflows for specific specialties, based on plans from payers that serve providers within each specialty and the documentation rules associated with each specialty as well as compliance requirements.

              </p>

              <div className="specialty-tags">
                {specialtyTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <button type="button" onClick={() => goToPage("/contact-us")}>
                Talk to Our Billing Team
              </button>
            </div>
            <div className="specialties-visual-wrap">
              <img
                src={centerMen}
                alt="Medical specialties we serve"
                className="specialties-doctor-img"
              />

              <div className="specialty-bubble bubble-one">
                <img src={bubbleImg1} alt="Patient support" />
              </div>

              <div className="specialty-bubble bubble-two">
                <img src={bubbleImg2} alt="Billing analytics" />
              </div>

              <div className="specialty-bubble bubble-three">
                <img src={bubbleImg3} alt="Healthcare support" />
              </div>

              <div className="specialty-bubble bubble-four">
                <img src={bubbleImg4} alt="Compliance badge" />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="revno-feature-services">
          <div className="unify-container revno-feature-services-layout">
            <div className="revno-feature-services-content rcm-text-block">
              <span className="section-kicker">Our Services</span>

              <h2>Full Suite of Everything Your Revenue Cycle Needs</h2>

              <div className="title-line" />

              <p>
                Complete healthcare revenue cycle services — each managed by certified specialists.
              </p>

              <p>
                Explore our core services designed to reduce claim errors, improve
                reimbursements, and keep your practice financially healthy.
              </p>

              <button type="button" onClick={() => goToPage("/services")}>
                View All Services <FaArrowRight />
              </button>
            </div>

            <div className="revno-feature-services-grid">
              {featuredServices.map((service, index) => (
                <article
                  className="revno-feature-service-card"
                  key={service.title}
                  onClick={() => goToPage(service.page)}
                  role="button"
                  tabIndex={0}
                  style={{ "--service-delay": `${index * 120}ms` }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") goToPage(service.page);
                  }}
                >
                  <img src={service.cover} alt={service.title} />

                  <div className="feature-service-shade" />

                  <div className="feature-service-bottom">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{service.title}</h3>
                  </div>

                  <div className="feature-service-hover">

                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPage(service.page);
                      }}
                    >
                      Explore Service <FaArrowRight />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* CERTIFICATIONS */}
        <section className="unify-section revno-cert-section">
          <div className="unify-container revno-cert-grid">
            {/* Desktop image */}
            <div className="about-rcm-single-visual cert-desktop-image">
              <img src={certificationImg} alt="Revno RCM certifications" />
            </div>

            <div className="revno-cert-content">
              <span>Compliance & Trust</span>

              <h2>Our Certifications</h2>

              <p>
                Clean & compliant billing processes with secure and quality Focused Revno RCM Our standards enable accurate billing, and safe use of data while also ensuring quality revenue cycle operations.
              </p>

              {/* Mobile image yaha show hogi */}
              <div className="cert-mobile-image">
                <img src={certificationImg} alt="Revno RCM certifications" />
              </div>

              <div className="cert-logo-grid">
                {certificationBadges.map((cert) => (
                  <div className="cert-logo-card" key={cert.title}>
                    <img src={cert.img} alt={cert.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="case-study-section">
          <div className="unify-container">
            <div className="case-study-head">
              <span>Case Studies</span>
              <h2>RCM Case Studies That Show Real Results</h2>
              <p>
                Overview of Revno RCM and its role in making healthcare practices reduce denials and recover revenue, improve AR (Accounts Receivable) and enhance collections.
              </p>
            </div>

            <div className="case-study-grid">
              {caseStudies.map((item, index) => (
                <article
                  className="case-study-card"
                  key={item.title}
                  style={{ "--case-delay": `${index * 120}ms` }}
                >
                  <div className="case-study-top">
                    <span className="case-study-icon">{item.icon}</span>
                    <span className="case-study-specialty">{item.specialty}</span>
                  </div>

                  <strong>{item.metric}</strong>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>
                </article>
              ))}
            </div>

            <div className="case-study-action">
              <button type="button" onClick={() => goToPage("/our-case-studies")}>
                View Our Case Studies <FaArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="revno-testimonial-section">
          <div className="unify-container">
            <div className="revno-testimonial-head">
              <span>Testimonials</span>

              <h2>What Healthcare Teams Say</h2>

              <p>
                Trusted billing support, responsive communication, and clearer revenue
                visibility for healthcare providers.
              </p>
            </div>

            <div className="carousel-shell testimonial-carousel-shell">
              <button
                type="button"
                className="carousel-arrow carousel-arrow-left"
                onClick={goPrevTestimonial}
                aria-label="Previous testimonial"
              >
                ‹
              </button>

              <div className="testimonial-grid">
                {activeTestimonials.map((item, index) => (
                  <article className="testimonial-card" key={`testimonial-slot-${index}`}>
                    <FaQuoteLeft className="quote-icon" />

                    <div className="testimonial-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} />
                      ))}
                    </div>

                    <p>{item.text}</p>

                    <div className="testimonial-user">
                      <div className="testimonial-avatar">{item.initial}</div>

                      <div>
                        <h3>{item.name}</h3>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <button
                type="button"
                className="carousel-arrow carousel-arrow-right"
                onClick={goNextTestimonial}
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>

            <div className="revno-testimonial-dots">
              {testimonialDots.map((dot) => (
                <button
                  key={`testimonial-dot-${dot}`}
                  type="button"
                  className={`revno-dot ${testimonialIndex === dot ? "active" : ""}`}
                  onClick={() => setTestimonialIndex(dot)}
                  aria-label={`Go to testimonial ${dot + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* BLOGS */}
        <section className="homeDynamicBlogs">
          <div className="unify-container">
            <div className="homeDynamicHead">
              <span>Latest Articles</span>
              <h2>Medical Billing & RCM Insights</h2>
              <p>
                Expert updates, billing tips, denial prevention strategies and revenue cycle insights for healthcare providers.
              </p>
            </div>

            {blogsLoading ? (
              <p className="homeBlogsLoading">Loading latest blogs...</p>
            ) : (
              <div className="homeDynamicGrid">
                {homeBlogs.length > 0 ? (
                  homeBlogs.map((blog, index) => (
                    <article
                      className={`homeDynamicCard ${activeBlogId === blog._id ? "blog-click-active" : ""
                        } ${index % 2 === 0 ? "blog-from-left" : "blog-from-right"}`}
                      key={blog._id}
                      style={{ "--blog-delay": `${index * 140}ms` }}
                      onClick={() => handleBlogClick(blog)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleBlogClick(blog);
                      }}
                    >
                      <div className="homeDynamicImage">
                        <img
                          src={`${import.meta.env.VITE_API_URL}/blogs/image/${blog._id}`}
                          alt={blog.title}
                          loading="lazy"
                        />

                        <span>{blog.category}</span>
                      </div>

                      <div className="homeDynamicBody">
                        <h3>{blog.title}</h3>

                        <p>{blog.excerpt}</p>

                        <div className="homeDynamicAuthor">
                          <div className="homeAuthorLeft">
                            <img
                              src={`${import.meta.env.VITE_API_URL}/auth/author-image/${blog.author?._id}`}
                              alt={blog.author?.name || "Author"}
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.src =
                                  "https://ui-avatars.com/api/?name=" +
                                  encodeURIComponent(blog.author?.name || "Author") +
                                  "&background=029A82&color=fff&size=120";
                              }}
                            />

                            <div>
                              <strong>{blog.author?.name || "Author"}</strong>
                              <small>
                                {blog.publishedAt
                                  ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  })
                                  : ""}
                              </small>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBlogClick(blog);
                            }}
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <p className="homeBlogsEmpty">No blogs available yet.</p>
                )}
              </div>
            )}

            <div className="homeBlogsViewAll">
              <button type="button" onClick={() => goToPage("/news-blogs")}>
                View All Blogs
              </button>
            </div>
          </div>
        </section>

        {/* FREE CONSULTATION */}
        <section className="revno-audit-section">
          <div className="unify-container revno-audit-layout">
            <div className="revno-audit-image">
              <img src={auditImage} alt="Free RCM consultation" />

              <div className="audit-image-card">
                <strong>Free RCM Audit</strong>
                <span>Improve collections. Reduce denials.</span>
              </div>
            </div>

            <div className="revno-audit-form-wrap">
              <div className="audit-form-head">
                <span>Free Consultation</span>

                <h2>Request Free RCM Audit</h2>

                <p>
                  Send us your practice details and our billing team will reach out to understand your revenue cycle problems.

                </p>
              </div>

              <form className="audit-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div>
                    <label>First Name</label>
                    <input name="firstName" placeholder="Dr. Amanda" required />
                  </div>

                  <div>
                    <label>Last Name</label>
                    <input name="lastName" placeholder="Collins" required />
                  </div>
                </div>

                <label>Practice Email</label>
                <input
                  type="email"
                  name="practiceEmail"
                  placeholder="billing@yourpractice.com"
                  required
                />

                <label>Phone Number</label>
                <input name="phone" placeholder="+1 (555) 000-0000" required />

                <div className="form-row">
                  <div>
                    <label>Practice Type / Specialty</label>

                    <select name="specialty" required>
                      <option value="">Select specialty</option>
                      <option>Internal Medicine / Family Practice</option>
                      <option>Cardiology</option>
                      <option>Orthopedics & Sports Medicine</option>
                      <option>Behavioral Health & Psychiatry</option>
                      <option>Physical / Occupational Therapy</option>
                      <option>Emergency Medicine / Urgent Care</option>
                      <option>OB/GYN</option>
                      <option>Dermatology</option>
                      <option>Dental</option>
                      <option>Chiropractic</option>
                      <option>Neurology</option>
                      <option>Radiology</option>
                      <option>Home Health & Hospice</option>
                      <option>Podiatry / Ophthalmology</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label>Monthly Claim Volume</label>

                    <select name="claimVolume" required>
                      <option value="">Select volume</option>
                      <option>Under 200</option>
                      <option>200 – 500</option>
                      <option>500 – 2,000</option>
                      <option>2,000 – 10,000</option>
                      <option>10,000+</option>
                    </select>
                  </div>
                </div>

                <label>What billing challenges are you facing?</label>
                <textarea
                  name="billingChallenges"
                  placeholder="e.g. High denial rates, slow collections, coding errors, payer disputes..."
                />

                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Request Free RCM Audit →"}
                </button>

                {success && <p className="audit-success">Message sent successfully ✅</p>}
              </form>
            </div>
          </div>
        </section>
        {popupOpen && (
          <div className="audit-popup-overlay" onClick={closeAuditPopup}>
            <div className="audit-popup-box" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="audit-popup-close"
                onClick={closeAuditPopup}
                aria-label="Close popup"
              >
                ×
              </button>

              <div className="audit-popup-head">
                <span>Free Consultation</span>
                <h2>Request Free RCM Audit</h2>
                <p>
                  Share your practice details and our billing team will connect with you
                  to understand your revenue cycle challenges.
                </p>
              </div>

              <form className="audit-form audit-popup-form" onSubmit={handlePopupSubmit}>
                <div className="form-row">
                  <div>
                    <label>First Name</label>
                    <input name="firstName" placeholder="Dr. Amanda" required />
                  </div>

                  <div>
                    <label>Last Name</label>
                    <input name="lastName" placeholder="Collins" required />
                  </div>
                </div>

                <label>Practice Email</label>
                <input
                  type="email"
                  name="practiceEmail"
                  placeholder="billing@yourpractice.com"
                  required
                />

                <label>Phone Number</label>
                <input name="phone" placeholder="+1 (555) 000-0000" required />

                <div className="form-row">
                  <div>
                    <label>Practice Type / Specialty</label>

                    <select name="specialty" required>
                      <option value="">Select specialty</option>
                      <option>Internal Medicine / Family Practice</option>
                      <option>Cardiology</option>
                      <option>Orthopedics & Sports Medicine</option>
                      <option>Behavioral Health & Psychiatry</option>
                      <option>Physical / Occupational Therapy</option>
                      <option>Emergency Medicine / Urgent Care</option>
                      <option>OB/GYN</option>
                      <option>Dermatology</option>
                      <option>Dental</option>
                      <option>Chiropractic</option>
                      <option>Neurology</option>
                      <option>Radiology</option>
                      <option>Home Health & Hospice</option>
                      <option>Podiatry / Ophthalmology</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label>Monthly Claim Volume</label>

                    <select name="claimVolume" required>
                      <option value="">Select volume</option>
                      <option>Under 200</option>
                      <option>200 – 500</option>
                      <option>500 – 2,000</option>
                      <option>2,000 – 10,000</option>
                      <option>10,000+</option>
                    </select>
                  </div>
                </div>

                <label>What billing challenges are you facing?</label>
                <textarea
                  name="billingChallenges"
                  placeholder="e.g. High denial rates, slow collections, coding errors, payer disputes..."
                />

                <button type="submit" disabled={popupLoading}>
                  {popupLoading ? "Sending..." : "Request Free RCM Audit →"}
                </button>

                {popupSuccess && (
                  <p className="audit-success">Message sent successfully ✅</p>
                )}
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}