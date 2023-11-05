import React, { useEffect, useState } from "react";
import "../../styles/header.css";
import twitter from "../../assets/icons/xx.svg";
import facebook from "../../assets/icons/FacebookLogo.svg";
import instagram from "../../assets/icons/InstagramLogo.svg";
import youtube from "../../assets/icons/YoutubeLogo.svg";

const Header = () => {
  const memConClasses = ["mem-con1", "mem-con2", "mem-con3"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % memConClasses.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="members">
        {memConClasses.map((className, index) => (
          <div
            key={index}
            className={`mem-con ${className} ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div className="mem-a">
              {index === 0 && (
                <>
                  <p className="mem-oro">50+</p>
                  <p className="mem-oro2-1">Registered Members</p>
                </>
              )}
              {index === 1 && (
                <>
                  <p className="mem-oro">10+</p>
                  <p className="mem-oro2-2">Awards</p>
                </>
              )}
              {index === 2 && (
                <>
                  <p className="mem-oro">15</p>
                  <p className="mem-oro2-2">Social Events</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="socials">
        <a href="/#">
          <img src={twitter} alt="twitter" className="socials-img" />
        </a>
        <a href="/#">
          <img src={facebook} alt="facebook" className="socials-img" />
        </a>
        <a href="/#">
          <img src={instagram} alt="instagram" className="socials-img" />
        </a>
        <a href="/#">
          <img src={youtube} alt="youtube" className="socials-img" />
        </a>
      </div>
      <div className="fabric-a"></div>
    </>
  );
};

export default Header;
