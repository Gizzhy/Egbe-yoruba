import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ".././styles/navbar.css";
import logo22 from "../assets/images/isokan22.jpeg";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const toggleRef = useRef(null);

  const closeMobileNav = () => setMobileNavVisible(false);

  useEffect(() => {
    setActiveLink(location.pathname);
    setMobileNavVisible(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMobileNavVisible) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileNavVisible(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileNavVisible]);

  return (
    <>
      <nav className="nav-container" aria-label="Main">
        <a href="/#">
          <img
            src={logo22}
            className="logo"
            alt="Egbe Isokan Omo Yoruba Germany home"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </a>
        <ul className="nav-list">
          <li
            className={`nav-link nav-item ${
              activeLink === "/" ? "active" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>

          <li
            className={`nav-link nav-item ${
              activeLink?.startsWith("/about") ? "active" : ""
            }`}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            className={`nav-link nav-item ${
              activeLink?.startsWith("/articles") ? "active" : ""
            }`}
          >
            <Link to="/articles">Articles</Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/#events">Upcoming Events</Link>
          </li>
          <li
            className={`nav-item nav-link ${
              activeLink === "/gallery" ? "active" : ""
            }`}
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            <a href="/gallery">Gallery</a>
          </li>
        </ul>
        <div className="nav-end">
          <div className="con-b">
            <a
              href="/contact"
              className="contact-button"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="1900"
            >
              Contact
            </a>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className={`nav-icon ${isMobileNavVisible ? "open" : ""}`}
            onClick={() => setMobileNavVisible((v) => !v)}
            aria-expanded={isMobileNavVisible}
            aria-controls="mobile-nav"
            aria-label={isMobileNavVisible ? "Close menu" : "Open menu"}
          >
            <span className="bar1"></span>
            <span className="bar2"></span>
          </button>
        </div>
        <div
          id="mobile-nav"
          className={`mobile-nav ${isMobileNavVisible ? "show" : ""}`}
          onClick={(e) => e.target.closest("a") && closeMobileNav()}
        >
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/articles">ARTICLES</a>
          <Link to="/#events">UPCOMING EVENTS</Link>
          <a href="/gallery">GALLERY</a>
          <a href="/contact">CONTACT</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
