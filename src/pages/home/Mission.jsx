import "../../styles/mission.css";
import yoruba1 from "../../assets/images/image 3.svg";
import yoruba2 from "../../assets/images/image 4.svg";
import yoruba3 from "../../assets/images/image 6.svg";
import fabric from "../../assets/images/egyptian-1822015 1.svg";
// import yoruba4 from "../../assets/images/nigerian-woman1.svg";
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
                Promote unity, friendly and loving spirit amongst Yoruba in Germany as well as any Yoruba people in the diaspora regardless of their political affiliations, religions or gender.

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
                To ensure that Yorubas and other people of other nations are able to relate more socially and culturally, endeavors of social relation must be encouraged.

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
