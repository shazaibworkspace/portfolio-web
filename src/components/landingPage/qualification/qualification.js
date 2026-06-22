import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Qualification = () => {
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
          <h1>Academic Qualifications</h1>
        </div>
        <div className="experince-container-content">
          <div className="experince-card">
            <div className="experience-container-left">
              <div className="experience-year">
                <h1>Jan 2021 - Jan 2025</h1>
                <div className="experience-colon"></div>
              </div>
            </div>
            <div className="experience-container-right">
              <h1>Bachelor of Science in Computer Science</h1>
              <p> The Islamia University of Bahawalpur</p>
              <ul>
                <li>GPA: 3.52 out of 4.00 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
