import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./experience.css";

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
        <div className="experince-container-content">
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>jun 2024 - Present</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Full Stack Developer | Web, App & AI</h1>
              <p>Kodex Technologies</p>
              <ul>
                <li>
                  Led the development of responsive, user-friendly web
                  applications using React.js, TypeScript, Material UI, Next.js,
                  Node.js, Express.js, and MongoDB.
                </li>
                <li>
                  Designed backend APIs, managed database schemas, and ensured
                  secure data handling across MongoDB and MySQL deliveries.
                </li>
                <li>
                  Implemented Redux Toolkit for efficient state management,
                  resulting in highly maintainable and scalable applications.
                </li>
                <li>
                  Built CI/CD pipelines and deployed containerized solutions
                  using Docker and AWS, improving release reliability and
                  performance.
                </li>
                <li>
                  Delivered 30 web projects across industries such as
                  healthcare, retail, e-commerce, real estate, and social media,
                  with a focus on performance optimization.
                </li>
                <li>
                  Mentored a team of 10 full-stack developers and designers,
                  ensuring high-quality deliverables and adherence to project
                  timelines.
                </li>
                <li>
                  Built cross-platform Flutter apps for Android and iOS,
                  including User, Technician, Sub-Contractor, Admin and Super
                  Admin portals that run on the same backend APIs as the Next.js
                  web platform (FoxtServe).
                </li>
                <li>
                  Developed full-stack products with Next.js and NestJS using
                  Prisma ORM with PostgreSQL and Drizzle ORM with SQLite, and
                  worked with Firebase, Supabase, MongoDB and MySQL; implemented
                  push notifications for mobile and web apps.
                </li>
                <li>
                  Practiced AI engineering: integrating AI capabilities into web
                  and mobile products and using AI-assisted tools (Cursor AI,
                  GitHub Copilot, Trae.ai, Antigravity) to speed up delivery and
                  code quality.
                </li>
                <li>
                  Handled DevOps work: CI/CD with GitHub Actions, Docker
                  containers, AWS deployments, Ubuntu servers, Redis caching and
                  Wrangler database migrations/deployments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
