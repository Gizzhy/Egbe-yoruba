import "./styles/aboutmiss.css";
import aboutoba from "../../assets/images/aboutoba.svg";
import aboutmiss1 from "../../assets/images/aboutmiss1.svg";
import aboutmiss2 from "../../assets/images/aboutmiss2.svg";
import aboutmiss3 from "../../assets/images/aboutmiss3.svg";
import aboutmiss4 from "../../assets/images/aboutmiss4.svg";
import aboutmiss5 from "../../assets/images/aboutmiss5.svg";
// import aboutframe from "../../assets/images/aboutframe.svg";

import React, { useState, useEffect } from "react";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const misWAColors = [
    "#FBDBB5",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
  ]; // Add desired background colors

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % misWAColors.length);
    }, 2000); // Change background color every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="about-miss-main">
        <div className="about-miss1">
          <img src={aboutoba} alt="oba" className="aboutoba" />
          <div className="about-miss1-1">
            <p className="our-goal1">OUR GOAL AND MISSION</p>
            <p className="our-goal2">
              The following are the Mission and Objectives of the association
            </p>
          </div>
        </div>
        {/* sections */}
        {/* sections */}
        {/* sections */}
        {/* sections */}

        <div className="about-sections">
          <div className="mis-w-aaa">
            <div
              className="mis-w-a2a"
              style={{
                backgroundColor:
                  misWAColors[(activeIndex + 7) % misWAColors.length],
              }}
            >
              <div className="mis-w-a1-1">
                <img
                  src={aboutmiss2}
                  alt="yoruba lady"
                  className="mission-img1-1"
                />
              </div>
              <div className="mis-w-a1-2a">
                To promote unity, friendliness and love among the Yorubas in
                Bayern/Germany and in the Diaspora irrespective of political
                inclination, creed or sex.
              </div>
            </div>
            {/* another */}
            <div
              className="mis-w-a2a"
              style={{
                backgroundColor:
                  misWAColors[(activeIndex + 6) % misWAColors.length],
              }}
            >
              <div className="mis-w-a1-1">
                <img
                  src={aboutmiss4}
                  alt="yoruba lady"
                  className="mission-img1-1"
                />
              </div>
              <div className="mis-w-a1-2a">
                To cherish, uphold and project the honour and dignity of Yoruba
                culture, language and tradition in Bayern Germany and the
                Diaspora.
              </div>
            </div>
            {/* another */}
            <div
              className="mis-w-a2a"
              style={{
                backgroundColor:
                  misWAColors[(activeIndex + 5) % misWAColors.length],
              }}
            >
              <div className="mis-w-a1-1">
                <img
                  src={aboutmiss1}
                  alt="yoruba lady"
                  className="mission-img1-1"
                />
              </div>
              <div className="mis-w-a1-2a">
                To create avenue for a social and cultural interaction among
                Yorubas and other nationalities.
              </div>
            </div>
            {/* another */}
            <div
              className="mis-w-a2a"
              style={{
                backgroundColor:
                  misWAColors[(activeIndex + 4) % misWAColors.length],
              }}
            >
              <div className="mis-w-a1-1">
                <img
                  src={aboutmiss5}
                  alt="yoruba lady"
                  className="mission-img1-1"
                />
              </div>
              <div className="mis-w-a1-2a">
                To encourage and nurture our children and youth to imbibe the
                Yoruba culture, honor and tradition.
              </div>
            </div>
            {/* another */}
            <div
              className="mis-w-a2a"
              style={{
                backgroundColor:
                  misWAColors[(activeIndex + 3) % misWAColors.length],
              }}
            >
              <div className="mis-w-a1-1">
                <img
                  src={aboutmiss2}
                  alt="yoruba lady"
                  className="mission-img1-1"
                />
              </div>
              <div className="mis-w-a1-2a">
                To support the educational development and economical
                empowerment of Yoruba community in Bayern Germany.
              </div>
            </div>
            {/* another */}
            <div
              className="mis-w-a2a"
              style={{
                backgroundColor:
                  misWAColors[(activeIndex + 2) % misWAColors.length],
              }}
            >
              <div className="mis-w-a1-1">
                <img
                  src={aboutmiss1}
                  alt="yoruba lady"
                  className="mission-img1-1"
                />
              </div>
              <div className="mis-w-a1-2a">
                To enhance the provision of full access to education and
                resources about Yoruba language and culture to all sundry
                through the media.
              </div>
            </div>
            {/* another */}
            <div
              className="mis-w-a2a"
              style={{
                backgroundColor:
                  misWAColors[(activeIndex + 1) % misWAColors.length],
              }}
            >
              <div className="mis-w-a1-1">
                <img
                  src={aboutmiss4}
                  alt="yoruba lady"
                  className="mission-img1-1"
                />
              </div>
              <div className="mis-w-a1-2a">
                To work with other organizations within and outside Bayern,
                Germany that share our similar objectives and goals.
              </div>
            </div>
            {/* another */}
            <div
              className="mis-w-a3a"
              style={{ backgroundColor: misWAColors[activeIndex] }}
            >
              <div className="mis-w-a1-1">
                <img
                  src={aboutmiss3}
                  alt="yoruba lady"
                  className="mission-img1-1"
                />
              </div>
              <div className="mis-w-a1-2a">
                To establish a presence in motherland to facilitate home-based
                activities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
