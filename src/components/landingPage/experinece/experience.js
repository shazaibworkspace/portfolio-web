import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./experience.css";

const IconFrontend = () => (
  <svg
    className="exp2-card-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 5h16v10H4V5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M8 19h8M12 15v4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const IconBackend = () => (
  <svg
    className="exp2-card-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <ellipse
      cx="12"
      cy="6"
      rx="7"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);

const IconMobile = () => (
  <svg
    className="exp2-card-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="7"
      y="2.5"
      width="10"
      height="19"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M10 18.5h4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const IconDevOps = () => (
  <svg
    className="exp2-card-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 16a4 4 0 014-4h1.2A5.5 5.5 0 0119.5 13 3.5 3.5 0 0120 20H7a3 3 0 01-3-3v-1z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M8 10V8a4 4 0 018 0v2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const IconAI = () => (
  <svg
    className="exp2-card-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 3l1.8 4.6L18.5 9.4l-3.7 2.7L16 17l-4-2.5L8 17l1.2-4.9L5.5 9.4l4.7-1.8L12 3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="19" cy="5" r="1.2" fill="currentColor" />
    <circle cx="5" cy="16" r="1.2" fill="currentColor" />
  </svg>
);

const IconLeadership = () => (
  <svg
    className="exp2-card-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M3.5 18.5c.6-2.8 2.8-4.5 5.5-4.5s4.9 1.7 5.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M13.5 14.2c1 .4 1.9 1.2 2.4 2.3.3.6.4 1.2.5 1.8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const responsibilityGroups = [
  {
    title: "Frontend and State",
    Icon: IconFrontend,
    bullets: [
      "Led the development of responsive, user-friendly web applications using React.js, TypeScript, Material UI, and Next.js.",
      "Implemented Redux Toolkit for efficient state management, resulting in highly maintainable and scalable applications.",
    ],
    chips: ["React.js", "TypeScript", "Material UI", "Next.js", "Redux Toolkit"],
  },
  {
    title: "Backend and Databases",
    Icon: IconBackend,
    bullets: [
      "Designed backend APIs with Node.js and Express.js, managed database schemas, and ensured secure data handling across MongoDB and MySQL deliveries.",
      "Developed full-stack products with NestJS using Prisma ORM with PostgreSQL and Drizzle ORM with SQLite, and worked with Firebase, Supabase, MongoDB and MySQL.",
    ],
    chips: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Drizzle",
      "SQLite",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Supabase",
    ],
  },
  {
    title: "Mobile",
    Icon: IconMobile,
    bullets: [
      "Built cross-platform Flutter apps for Android and iOS, including User, Technician, Sub-Contractor, Admin and Super Admin portals that run on the same backend APIs as the Next.js web platform (FoxtServe).",
      "Implemented push notifications for mobile and web apps.",
    ],
    chips: ["Flutter", "Android", "iOS", "Push Notifications", "FoxtServe"],
  },
  {
    title: "DevOps",
    Icon: IconDevOps,
    bullets: [
      "Built CI/CD pipelines and deployed containerized solutions using Docker and AWS, improving release reliability and performance.",
      "Handled DevOps work: CI/CD with GitHub Actions, Docker containers, AWS deployments, Ubuntu servers, Redis caching and Wrangler database migrations/deployments.",
    ],
    chips: [
      "GitHub Actions",
      "Docker",
      "AWS",
      "Ubuntu",
      "Redis",
      "Wrangler",
    ],
  },
  {
    title: "AI Engineering",
    Icon: IconAI,
    bullets: [
      "Practiced AI engineering: integrating AI capabilities into web and mobile products and using AI-assisted tools (Cursor AI, GitHub Copilot, Trae.ai, Antigravity) to speed up delivery and code quality.",
    ],
    chips: ["Cursor AI", "GitHub Copilot", "Trae.ai", "Antigravity"],
  },
  {
    title: "Delivery and Leadership",
    Icon: IconLeadership,
    bullets: [
      "Delivered 30 web projects across industries such as healthcare, retail, e-commerce, real estate, and social media, with a focus on performance optimization.",
      "Mentored a team of 10 full-stack developers and designers, ensuring high-quality deliverables and adherence to project timelines.",
    ],
    chips: [
      "Healthcare",
      "Retail",
      "E-commerce",
      "Real Estate",
      "Social Media",
    ],
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="container-fluid experience-section">
      <div
        className="container experince container animated-element"
        data-aos="zoom-in"
      >
        <div className="common-heading">
          <h1>Working Experiences</h1>
        </div>

        <div className="exp2-layout">
          <div className="exp2-timeline" aria-hidden="true">
            <span className="exp2-timeline-dot"></span>
            <span className="exp2-timeline-line"></span>
          </div>

          <div className="exp2-main">
            <div className="exp2-header-card" data-aos="fade-up" data-aos-delay="0">
              <div className="exp2-header-text">
                <h2>Full Stack Developer | Web, App & AI</h2>
                <p className="exp2-company">Kodex Technologies</p>
              </div>
              <div className="exp2-date-pill">
                <span className="exp2-present-dot" aria-hidden="true"></span>
                <span>Jun 2024 – Present</span>
              </div>
            </div>

            <div className="exp2-stats" data-aos="fade-up" data-aos-delay="100">
              <div className="exp2-stat-card">
                <span className="exp2-stat-number">30+</span>
                <span className="exp2-stat-label">Web Projects</span>
              </div>
              <div className="exp2-stat-card">
                <span className="exp2-stat-number">10</span>
                <span className="exp2-stat-label">Team Members Mentored</span>
              </div>
              <div className="exp2-stat-card">
                <span className="exp2-stat-number">5</span>
                <span className="exp2-stat-label">
                  Flutter Apps
                  <span className="exp2-stat-sub">
                    User, Technician, Sub-Contractor, Admin, Super Admin
                  </span>
                </span>
              </div>
            </div>

            <div className="exp2-groups">
              {responsibilityGroups.map((group, index) => {
                const Icon = group.Icon;
                return (
                  <article
                    className="exp2-group-card"
                    key={group.title}
                    data-aos="fade-up"
                    data-aos-delay={(index + 2) * 100}
                  >
                    <div className="exp2-group-header">
                      <span className="exp2-group-icon-wrap">
                        <Icon />
                      </span>
                      <h3>{group.title}</h3>
                    </div>
                    <ul className="exp2-bullets">
                      {group.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="exp2-chips">
                      {group.chips.map((chip) => (
                        <span className="exp2-chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
