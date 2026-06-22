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
              <h1>Senior Full-Stack Developer | MERN Stack</h1>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
