import "../../styles/mission.css";
import yoruba1 from "../../assets/images/image 3.svg";
import yoruba2 from "../../assets/images/image 4.svg";
import yoruba3 from "../../assets/images/image 6.svg";
import fabric from "../../assets/images/egyptian-1822015 1.svg";
import yoruba4 from "../../assets/images/nigerian-woman1.svg";
import gal15 from "../../assets/gallery/images/gal15.jpg";
import React, { useState, useEffect } from "react";

const Mission = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const misWAColors = ["#FBDBB5", "#FFFFFF", "#FFFFFF"]; // Add desired background colors

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
      <div className="mission">
        <div className="mission1">
          <div className="mission1-1">
            <img src={gal15} alt="yoruba lady" className="mission-img1" />
          </div>
          <div className="mission1-2">
            <p className="mis-w">Our Mission And Goal</p>
            <div className="mis-w-a">
              <div
                className="mis-w-a1"
                style={{
                  backgroundColor:
                    misWAColors[(activeIndex + 2) % misWAColors.length],
                }}
              >
                <div className="mis-w-a1-1">
                  <img
                    src={yoruba3}
                    alt="yoruba lady"
                    className="mission-img1-1"
                  />
                </div>
                <div className="mis-w-a1-2">
                  To preserve and promote the rich cultural heritage of the
                  Yoruba people, including language, traditional arts, fostering
                  a sense of identity among members in Germany.
                </div>
              </div>
              {/* another */}
              <div
                className="mis-w-a2"
                style={{
                  backgroundColor:
                    misWAColors[(activeIndex + 1) % misWAColors.length],
                }}
              >
                <div className="mis-w-a1-1">
                  <img
                    src={yoruba2}
                    alt="yoruba lady"
                    className="mission-img1-1"
                  />
                </div>
                <div className="mis-w-a1-2">
                  To empower the Yoruba diaspora community in Germany through
                  collaborative projects that enhance the well-being and success
                  of our members.
                </div>
              </div>
              {/* another */}
              <div
                className="mis-w-a3"
                style={{ backgroundColor: misWAColors[activeIndex] }}
              >
                <div className="mis-w-a1-1">
                  <img
                    src={yoruba1}
                    alt="yoruba lady"
                    className="mission-img1-1"
                  />
                </div>
                <div className="mis-w-a1-2">
                  To foster a strong sense of unity among Yoruba individuals in
                  Germany by providing a platform for networking, social
                  interaction, building a closely-knit community.
                </div>
              </div>
            </div>
            <button className="mis-button">Join Us</button>
          </div>
        </div>
        <div className="mission2">
          <img src={fabric} alt="yoruba fabric" className="fabric" />
        </div>
      </div>
    </>
  );
};

export default Mission;
