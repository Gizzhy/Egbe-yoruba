// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ".././styles/navbar.css";
// import logo from "../assets/images/logo.svg";
// import logo2 from "../assets/images/isokanlogo.jpg";
import logo22 from "../assets/images/isokan22.jpeg";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  const toggleX = () => {
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2");
    bar1.classList.toggle("rotate");
    bar2.classList.toggle("rotate");
    toggleMobileNav(); // Call your toggleMobileNav function when the nav-icon is clicked
  };
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav className="nav-container">
        <a href="/#">
          <img
            src={logo22}
            className="logo"
            alt="yoruba"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </a>
        <ul className="nav-list">
          <li
            className={`nav-link nav-item ${
              activeLink === "/" ? "active" : ""
            }`}
            // data-aos="fade-left"
            // data-aos-duration="800"
            // data-aos-delay="600"
          >
            <Link to="/">Home</Link>
          </li>

          <li
            className={`nav-link nav-item ${
              activeLink === "/about" ? "active" : ""
            }`}
            // data-aos="fade-left"
            // data-aos-duration="800"
            // data-aos-delay="900"
          >
            <Link to="/about">About Us</Link>
          </li>

          {/* <Link to="/about">
            <li
              className={`nav-link nav-item ${
                activeLink === "/about" ? "active" : ""
              }`}
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              TY
            </li>
          </Link> */}
          <li
            className="nav-item nav-link"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            <a href="/gallery">Events & Gallery</a>
          </li>

          {/* <li
            className="nav-item nav-link"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="1500"
          >
            <a href="/#">NEWS</a>
          </li> */}
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
          <div className="nav-icon" onClick={toggleX}>
            {/* Call toggleX when the nav-icon is clicked */}
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
        </div>
        <div className={`mobile-nav ${isMobileNavVisible ? "show" : ""}`}>
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/gallery">EVENTS & GALLERY</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
