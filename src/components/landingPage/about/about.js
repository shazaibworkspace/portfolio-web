import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="container-fluid about-section" id="about">
      <div className="container about-container ">
        <div className="common-heading">
          <h1>About Me</h1>
          <p>
            On a mission to be the world's No. 1 full-stack developer, I’m
            mastering React.js and front-end development to become the ultimate
            Web Development Hero!
          </p>
        </div>
        <div
          className="about-container-content animated-element"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="about-container-left d-none">
            <img src="" alt="img" />
          </div>
          <div className="about-container-right">
            <h1>
              Hi There<span>✌</span>
            </h1>
            <p>
              I am a senior full-stack developer with over 3 years of extensive
              experience in building high-performance web applications using
              modern technologies. My expertise lies in creating dynamic and
              responsive user interfaces, ensuring seamless user experiences,
              and delivering scalable, maintainable solutions.
            </p>
            <p>
              As a Full-Stack Developer specializing in MERN and MEAN stacks,
              I build powerful frontend experiences while delivering backend
              APIs, database design, and deployable cloud-ready applications.
              My toolkit includes React.js, Next.js, Express.js, NestJS,
              MongoDB, MySQL, PostgreSQL, Docker, AWS, Redis, Ubuntu, and
              GitHub Actions.
            </p>
            <p>
              Technical Specifications:
              <br />
              <strong>Front-End Technologies:</strong> React.js, Next.js, Redux
              Toolkit, TypeScript, Vite, SCSS
              <br />
              <strong>Back-End Technologies:</strong> Node.js, Express.js,
              NestJS, MongoDB, MySQL, PostgreSQL
              <br />
              <strong>DevOps & Tools:</strong> Docker, AWS, Redis, Ubuntu,
              GitHub Actions (CI/CD)
              <br />
              <strong>State Management:</strong> Advanced knowledge of Redux
              Toolkit, Context API, and React Query for efficient state
              handling.
            </p>

            <p>
              I pride myself on bridging the gap between technical and business
              needs by collaborating effectively with developers, designers,
              stakeholders, and product managers to ensure alignment and project
              success.
            </p>
            <p>
              Please contact me at any time when it is convenient for you to
              discuss further.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
