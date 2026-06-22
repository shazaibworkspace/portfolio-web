import React, { useState, useEffect } from "react";
import "./banner.css";
import { NavLink } from "react-router-dom";
import UserIcon from "../../../assets/images/user-icon.png";
import ReactIcon from "../../../assets/images/reactjs-icon.png";
import NodeIcon from "../../../assets/images/node-icon.png";
import MongoIcon from "../../../assets/images/mongo-icon.png";
import GitIcon from "../../../assets/images/git-icon.png";
import DockerIcon from "../../../assets/images/docker.png";

import scrollSection from "../../common/scrollSection/scrollSection";

const Banner = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const words = [
    "passionate",
    "fast-learner",
    "self-taught",
    "experienced",
    "committed",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const handleClick = (sectionId) => {
    scrollSection(sectionId);
  };
  const openPdf = () => {
    const file = process.env.PUBLIC_URL + "/cv.pdf";
    console.log(file);
    window.open(file, "_blank");
  };
  return (
    <>
      <div className="container-fluid banner-section" id="home">
        <div className="container banner-container">
          <div className="banner-container-left">
            <p className="banner-welcome">WELCOME TO MY CREATIVE JOURNEY!</p>
            <h1 className="banner-heading">
              Hi, I’m Muhammad Shazaib <span className="wave">👋</span>
            </h1>
            <h2 className="banner-subheading">
              A{" "}
              <div className="animated-word-wrapper">
                <span className={fade ? "animated-word fade" : "animated-word"}>
                  {words[wordIndex]}
                </span>
              </div>{" "}
              software engineer
            </h2>
            <div className="banner-btn-wrapper">
              <NavLink className="btn-primary" onClick={openPdf}>Resume</NavLink>
              <NavLink className="btn-secondary" onClick={() => handleClick("contact")}>
                <img src={UserIcon} alt="img" />
                Contact Me
              </NavLink>
            </div>
          </div>
          <div className="banner-container-right">
            <div className="tech-icons-container">
              <div className="tech-icon tech-icon-1">
                <img src={ReactIcon} alt="React" />
              </div>
              <div className="tech-icon tech-icon-2">
                <img src={NodeIcon} alt="Node.js" />
              </div>
              <div className="tech-icon tech-icon-3">
                <img src={MongoIcon} alt="MongoDB" />
              </div>
              <div className="tech-icon tech-icon-4">
                <img src={GitIcon} alt="Git" />
              </div>
              <div className="tech-icon tech-icon-5">
                <img src={DockerIcon} alt="Docker" />
              </div>
              <div className="floating-circle circle-1"></div>
              <div className="floating-circle circle-2"></div>
              <div className="floating-circle circle-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
