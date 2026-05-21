import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "../css/casestudy.css";

function Counter({ end, suffix = "", prefix = "", duration = 1400 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  const value = Number.isInteger(end) ? Math.floor(count) : count.toFixed(1);

  return (
    <>
      {prefix}
      {value}
      {suffix}
    </>
  );
}

export default function CaseStudies() {
  const navigate = useNavigate();
  const detailRef = useRef(null);

  const [activeCase, setActiveCase] = useState("denial-rate-reduction");

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const caseStudies = [
    {
      id: "denial-rate-reduction",
      number: "01",
      category: "Denial Management",
      title: "High Denial Rate Reduction",
      specialty: "Internal Medicine",
      location: "United States",
      volume: "4,500 monthly claims",
      summary:
        "Revno RCM helped an internal medicine practice reduce preventable denials by improving verification, coding accuracy, authorization tracking, and AR follow-up.",
      stat: "28% → 9%",
      statLabel: "Denial rate reduced",
      metrics: [
        { label: "Denial Rate", value: "28% → 9%" },
        { label: "Collections", value: "+35%" },
        { label: "AR Days", value: "68 → 39" },
        { label: "First-Pass Acceptance", value: "96%" },
      ],
      problems: [
        "Denial rate was at 28%",
        "Delayed reimbursements affected cash flow",
        "Frequent eligibility issues created rework",
        "Coding inconsistencies increased payer rejection risk",
      ],
      challenges: [
        "Incorrect insurance verification",
        "Missing prior authorization",
        "ICD-10 and CPT mismatch",
        "Untimely filing",
        "Weak follow-up process",
      ],
      actions: [
        {
          heading: "Front-End Improvements",
          points: [
            "Introduced real-time eligibility verification",
            "Created insurance checklist before appointments",
            "Added authorization tracking sheet",
          ],
        },
        {
          heading: "Coding Improvements",
          points: [
            "Conducted weekly coder audits",
            "Added specialty-specific coding edits",
            "Introduced modifier accuracy checks",
          ],
        },
        {
          heading: "AR & Denial Management",
          points: [
            "Segmented denials by root cause",
            "Created denial aging dashboard",
            "Daily follow-up on high-value claims",
          ],
        },
      ],
      results: [
        "Denial rate reduced from 28% to 9%",
        "Collections improved by 35%",
        "AR days reduced from 68 to 39",
        "First-pass claim acceptance increased to 96%",
      ],
      lesson:
        "Most denials were preventable through stronger front-end verification and consistent coding audits.",
    },
    {
      id: "revenue-leakage-recovery",
      number: "02",
      category: "Revenue Leakage",
      title: "Revenue Leakage Recovery",
      specialty: "Orthopedics",
      location: "United States",
      volume: "12 providers",
      summary:
        "Revno RCM identified missed revenue caused by under-coding, delayed charge entry, missing implant charges, and documentation gaps.",
      stat: "$420K",
      statLabel: "Missed annual revenue identified",
      metrics: [
        { label: "Revenue Identified", value: "$420K" },
        { label: "Clean Claim Rate", value: "97%" },
        { label: "Charge Lag", value: "7 → 1 day" },
        { label: "Providers", value: "12" },
      ],
      problems: [
        "Revenue leakage was affecting annual collections",
        "E/M levels were consistently undercoded",
        "Missed charge capture reduced reimbursement",
        "Delayed charge entry slowed claim submission",
      ],
      challenges: [
        "Surgical procedures billed incorrectly",
        "E/M levels consistently undercoded",
        "Missing implant charges",
        "Delayed charge entry",
      ],
      actions: [
        {
          heading: "Audit Phase",
          points: [
            "Completed a 3-month retrospective billing audit",
            "Compared EMR documentation with submitted claims",
            "Identified repeated charge capture gaps",
          ],
        },
        {
          heading: "Process Changes",
          points: [
            "Implemented same-day charge entry policy",
            "Provided provider documentation training",
            "Added automated charge reconciliation reports",
          ],
        },
      ],
      results: [
        "Identified $420,000 in missed annual revenue",
        "Increased clean claim rate to 97%",
        "Reduced charge lag from 7 days to 1 day",
      ],
      lesson:
        "Small documentation and charge capture gaps can create major long-term revenue loss.",
    },
    {
      id: "ar-recovery-project",
      number: "03",
      category: "AR Recovery",
      title: "AR Recovery Project",
      specialty: "Cardiology",
      location: "United States",
      volume: "$2.1M old AR backlog",
      summary:
        "Revno RCM recovered aged revenue by segmenting AR, building dedicated follow-up teams, and escalating payer issues faster.",
      stat: "$1.3M",
      statLabel: "Recovered in 6 months",
      metrics: [
        { label: "Recovered Revenue", value: "$1.3M" },
        { label: "Old AR Backlog", value: "$2.1M" },
        { label: "AR >120 Days", value: "-52%" },
        { label: "Appeal Success", value: "71%" },
      ],
      problems: [
        "No structured follow-up process",
        "Claims remained unresolved for long periods",
        "Secondary insurance was not billed consistently",
        "Appeals were not submitted on time",
      ],
      challenges: [
        "High-dollar claims sitting unresolved",
        "Timely filing risks",
        "Appeal-eligible denials not prioritized",
        "Patient balance accounts not segmented",
      ],
      actions: [
        {
          heading: "AR Segmentation",
          points: [
            "Grouped claims by high-dollar value",
            "Flagged timely filing risk accounts",
            "Separated appeal-eligible denials",
            "Organized patient balance accounts",
          ],
        },
        {
          heading: "Dedicated Teams",
          points: [
            "Insurance follow-up team",
            "Appeals team",
            "Patient collections team",
          ],
        },
        {
          heading: "Escalation Matrix",
          points: [
            "Payer escalation calls",
            "Reconsideration requests",
            "Corrected claim resubmissions",
          ],
        },
      ],
      results: [
        "Recovered $1.3 million in 6 months",
        "Reduced AR over 120 days by 52%",
        "Appeal success rate reached 71%",
      ],
      lesson:
        "Aggressive and organized AR follow-up can recover revenue that appears lost or inactive.",
    },
    {
      id: "credentialing-delays",
      number: "04",
      category: "Credentialing",
      title: "Credentialing Delays Impacting Revenue",
      specialty: "Multi-Specialty Clinic",
      location: "United States",
      volume: "8 new providers",
      summary:
        "Revno RCM helped prevent claim denials caused by providers seeing patients before payer enrollment completion.",
      stat: "40%",
      statLabel: "Credentialing turnaround reduced",
      metrics: [
        { label: "Turnaround", value: "-40%" },
        { label: "New Providers", value: "8" },
        { label: "Claims at Risk", value: "$180K" },
        { label: "Enrollment Denials", value: "Prevented" },
      ],
      problems: [
        "Providers were seeing patients before payer enrollment completion",
        "Claims were denied for non-credentialed providers",
        "Credentialing status was not tracked clearly",
      ],
      challenges: [
        "Nearly $180,000 in claims held or rejected",
        "No centralized credentialing tracker",
        "Limited weekly payer status visibility",
        "Provider onboarding was delayed",
      ],
      actions: [
        {
          heading: "Credentialing Process Control",
          points: [
            "Created credentialing tracker",
            "Started weekly payer status review",
            "Aligned enrollment completion before patient scheduling",
          ],
        },
      ],
      results: [
        "Credentialing turnaround reduced by 40%",
        "Future enrollment-related denials prevented",
        "Provider onboarding became faster and more controlled",
      ],
      lesson:
        "Credentialing delays directly affect cash flow and should be managed before patient scheduling begins.",
    },
    {
      id: "patient-collections",
      number: "05",
      category: "Patient Collections",
      title: "Patient Collections Optimization",
      specialty: "Dermatology Practice",
      location: "United States",
      volume: "Patient balance growth",
      summary:
        "Revno RCM improved patient collections through cost transparency, online payment options, installment plans, and automated reminders.",
      stat: "48%",
      statLabel: "Point-of-service collections increased",
      metrics: [
        { label: "POS Collections", value: "+48%" },
        { label: "Bad Debt", value: "-30%" },
        { label: "Payment Links", value: "Added" },
        { label: "Reminders", value: "Automated" },
      ],
      problems: [
        "Rising patient balances",
        "Low collection at front desk",
        "Poor patient payment communication",
      ],
      challenges: [
        "Patients did not understand payment responsibility",
        "No clear cost estimates before visits",
        "Limited digital payment options",
        "Manual reminders were inconsistent",
      ],
      actions: [
        {
          heading: "Financial Transparency",
          points: [
            "Provided cost estimates before visits",
            "Explained patient payment responsibility clearly",
          ],
        },
        {
          heading: "Payment Options",
          points: [
            "Added online payment links",
            "Introduced installment plans",
            "Set up automated reminders",
          ],
        },
      ],
      results: [
        "Point-of-service collections increased by 48%",
        "Patient bad debt reduced by 30%",
      ],
      lesson:
        "Patient education and convenient payment options improve collections significantly.",
    },
  ];

  const activeData = useMemo(() => {
    return caseStudies.find((item) => item.id === activeCase) || caseStudies[0];
  }, [activeCase]);

  const handleCaseSelect = (id) => {
    setActiveCase(id);

    setTimeout(() => {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  useEffect(() => {
    const items = document.querySelectorAll(".case-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("case-reveal-show");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    items.forEach((item, index) => {
      item.style.setProperty("--case-delay", `${Math.min(index * 70, 420)}ms`);
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [activeCase]);

  return (
    <main className="case-page">
      <Helmet>
        <title>RCM Case Studies | Medical Billing Success Stories | Revno RCM</title>

        <meta
          name="description"
          content="Explore Revno RCM case studies showing denial reduction, revenue leakage recovery, AR recovery, credentialing improvement, and patient collections optimization."
        />

        <meta
          name="keywords"
          content="RCM case studies, medical billing case study, denial management case study, AR recovery case study, revenue leakage recovery, credentialing case study, patient collections case study, healthcare billing results"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Revno RCM" />
        <meta name="publisher" content="Revno RCM" />

        <link rel="canonical" href="https://www.revnorcm.com/our-case-studies" />

        <meta
          property="og:title"
          content="RCM Case Studies | Medical Billing Success Stories | Revno RCM"
        />
        <meta
          property="og:description"
          content="See how Revno RCM helps healthcare practices reduce denials, recover revenue, improve AR, and optimize collections."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Revno RCM" />
        <meta property="og:url" content="https://www.revnorcm.com/our-case-studies" />
        <meta property="og:image" content="https://www.revnorcm.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="RCM Case Studies | Medical Billing Success Stories | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Explore denial reduction, revenue leakage recovery, AR recovery, credentialing, and patient collections case studies."
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
                  "Revno RCM provides medical billing and revenue cycle management services for healthcare providers.",
              },
              {
                "@type": "WebPage",
                "@id": "https://www.revnorcm.com/our-case-studies/#webpage",
                url: "https://www.revnorcm.com/our-case-studies",
                name: "RCM Case Studies | Medical Billing Success Stories | Revno RCM",
                description:
                  "Case studies showing how Revno RCM improves denial management, AR recovery, collections, credentialing, and revenue cycle performance.",
                about: {
                  "@id": "https://www.revnorcm.com/#organization",
                },
              },
              {
                "@type": "ItemList",
                itemListElement: caseStudies.map((item, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: item.title,
                  description: item.summary,
                })),
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
                    name: "Case Studies",
                    item: "https://www.revnorcm.com/our-case-studies",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="case-hero">
        <div className="case-container case-reveal">
          <div className="case-breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>
            <span>›</span>
            <span>Case Studies</span>
          </div>

          <h1>RCM Case Studies That Show Real Results</h1>

          <p>
            Explore how Revno RCM helps healthcare practices reduce denials,
            recover missed revenue, improve AR performance, speed up credentialing,
            and strengthen patient collections.
          </p>
        </div>
      </section>

      <section className="case-results-strip">
        <div className="case-container">
          <div className="case-results-grid">
            <div className="case-result-mini case-reveal">
              <h3>
                <Counter end={28} suffix="%" /> → <Counter end={9} suffix="%" />
              </h3>
              <p>Denial rate reduction</p>
            </div>

            <div className="case-result-mini case-reveal">
              <h3>
                <Counter end={420} prefix="$" suffix="K" />
              </h3>
              <p>Missed annual revenue identified</p>
            </div>

            <div className="case-result-mini case-reveal">
              <h3>
                <Counter end={1.3} prefix="$" suffix="M" />
              </h3>
              <p>AR recovered in 6 months</p>
            </div>

            <div className="case-result-mini case-reveal">
              <h3>
                <Counter end={48} suffix="%" />
              </h3>
              <p>Point-of-service collections improved</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-list-section">
        <div className="case-container">
          <div className="case-section-head case-reveal">
            <span>Success Stories</span>
            <h2>Revenue Cycle Challenges We Solved</h2>
            <p>
              Select any case study below to view the client profile, challenges,
              actions taken, results, and key lesson.
            </p>
          </div>

          <div className="case-card-grid">
            {caseStudies.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`case-success-card case-reveal ${
                  activeCase === item.id ? "active" : ""
                }`}
                onClick={() => handleCaseSelect(item.id)}
              >
                <div className="case-card-top">
                  <span className="case-card-number">{item.number}</span>
                  <small className="case-category-badge">{item.category}</small>
                </div>

                <h3>{item.title}</h3>

                <p>{item.summary}</p>

                <div className="case-card-stat">
                  <strong>{item.stat}</strong>
                  <span>{item.statLabel}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="case-detail-section" ref={detailRef}>
        <div className="case-container case-detail-layout">
          <aside className="case-detail-sidebar case-reveal">
            <span>{activeData.category}</span>
            <h2>{activeData.title}</h2>
            <p>{activeData.summary}</p>

            <div className="case-profile-box">
              <div>
                <small>Specialty</small>
                <strong>{activeData.specialty}</strong>
              </div>

              <div>
                <small>Location</small>
                <strong>{activeData.location}</strong>
              </div>

              <div>
                <small>Volume / Size</small>
                <strong>{activeData.volume}</strong>
              </div>
            </div>

            <Link to="/contact-us">Request Similar Results →</Link>
          </aside>

          <div className="case-detail-content">
            <div className="case-metric-grid">
              {activeData.metrics.map((metric) => (
                <div className="case-metric-card case-reveal" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="case-content-block case-reveal">
              <div className="case-label">Client Problem</div>
              <h3>What Was Holding the Practice Back</h3>
              <ul>
                {activeData.problems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="case-content-block case-reveal">
              <div className="case-label">Challenges Identified</div>
              <h3>Root Causes Found During Review</h3>
              <ul>
                {activeData.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="case-action-grid">
              {activeData.actions.map((action) => (
                <div className="case-action-card case-reveal" key={action.heading}>
                  <h3>{action.heading}</h3>
                  <ul>
                    {action.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="case-content-block highlight case-reveal">
              <div className="case-label">Results</div>
              <h3>Measurable Impact Achieved</h3>
              <ul>
                {activeData.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="case-lesson case-reveal">
              <span>Key Lesson</span>
              <p>{activeData.lesson}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-process-section">
        <div className="case-container">
          <div className="case-section-head case-reveal">
            <span>Our Approach</span>
            <h2>How Revno RCM Builds Case Study Results</h2>
            <p>
              Every engagement starts with revenue cycle analysis, root-cause
              identification, workflow correction, and measurable reporting.
            </p>
          </div>

          <div className="case-process-grid">
            <div className="case-process-card case-reveal">
              <span>01</span>
              <h3>Audit & Baseline Review</h3>
              <p>
                We review claims, denials, AR, payer trends, coding patterns,
                charge capture, and collection workflows.
              </p>
            </div>

            <div className="case-process-card case-reveal">
              <span>02</span>
              <h3>Root-Cause Segmentation</h3>
              <p>
                We categorize gaps by eligibility, coding, authorization,
                documentation, timely filing, AR, and patient balances.
              </p>
            </div>

            <div className="case-process-card case-reveal">
              <span>03</span>
              <h3>Workflow Optimization</h3>
              <p>
                We implement checklists, dashboards, daily follow-ups, coding
                edits, escalation workflows, and payment transparency.
              </p>
            </div>

            <div className="case-process-card case-reveal">
              <span>04</span>
              <h3>Reporting & Continuous Improvement</h3>
              <p>
                We track KPIs, monitor trends, report results, and continuously
                adjust workflows for better revenue performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-final-cta">
        <div className="case-container case-reveal">
          <h2>Want Similar Revenue Cycle Results?</h2>
          <p>
            Revno RCM can help you identify denial patterns, revenue leakage,
            aging AR, credentialing delays, and collection gaps before they keep
            hurting your cash flow.
          </p>

          <Link to="/contact-us">Request Free RCM Audit →</Link>
        </div>
      </section>
    </main>
  );
}