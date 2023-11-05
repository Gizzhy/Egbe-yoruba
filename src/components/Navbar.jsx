import React, { useState } from "react";
import ".././styles/navbar.css";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
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

  return (
    <>
      <nav className="nav-container">
        <a href="/#">
          <img
            src={logo}
            className="logo"
            alt="yoruba"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </a>
        <ul className="nav-list">
          <li
            className="nav-item nav-link"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <a href="/#">Home</a>
          </li>
          <li
            className="nav-item nav-link"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="900"
          >
            <a href="/#">About Us</a>
          </li>
          <li
            className="nav-item nav-link"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            <a href="/#">Events & Gallery</a>
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
              href="/#"
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
          <a href="/#">ABOUT</a>
          <a href="/#">EVENTS</a>
          <a href="/#">GALLERY</a>
          <a href="/#">NEWS</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
