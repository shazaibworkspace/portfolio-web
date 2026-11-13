import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import OpenMenuIcon from "../../../assets/images/open-menu.png";
import CloseMenuIcon from "../../../assets/images/close-menu.png";
import WhatsappNavIcon from "../../../assets/images/whatsapp-nav.svg";
import scrollSection from "../../common/scrollSection/scrollSection";

const WHATSAPP_NUMBER = "923457043429";
const WHATSAPP_MESSAGE =
  "Hi Shazaib, I visited your portfolio and would like to connect.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleClick = (sectionId) => {
    scrollSection(sectionId);
    setActiveSection(sectionId);
  };
  return (
    <div className="navbar-section">
      <div className="container navbar-container">
        <div className="navbar-logo-wrapper">
          <h1>Muhammad Shazaib</h1>
        </div>
        <div className="navbar-link-wrapper">
          <ul className={`${isMenuOpen ? "open" : ""}`}>
            <li>
              <NavLink
                to="/"
                onClick={() => handleClick("home")}
                className={activeSection === "home" ? "nav-active" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={() => handleClick("about")}
                className={activeSection === "about" ? "nav-active" : ""}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={() => handleClick("skill")}
                className={activeSection === "skill" ? "nav-active" : ""}
              >
                Skill
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={() => handleClick("portfolio")}
                className={activeSection === "portfolio" ? "nav-active" : ""}
              >
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                onClick={() => handleClick("contact")}
                className={activeSection === "contact" ? "nav-active" : ""}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <a
            className="navbar-whatsapp-btn"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <img
              src={WhatsappNavIcon}
              alt=""
              aria-hidden="true"
              className="navbar-whatsapp-icon"
            />
            <span className="navbar-whatsapp-label">Chat</span>
          </a>
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src={isMenuOpen ? CloseMenuIcon : OpenMenuIcon} alt="img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
