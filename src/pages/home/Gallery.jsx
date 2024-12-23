import "../../styles/gallery.css";
import React, { useState, useRef } from "react";
import gal1 from "../../assets/gallery/images/gal1.jpg";
import gal2 from "../../assets/gallery/images/gal2.jpg";
import gal5 from "../../assets/gallery/images/gal5.jpg";
import gal6 from "../../assets/gallery/images/gal6.jpg";
import gal7 from "../../assets/gallery/images/gal7.jpg";
import gal8 from "../../assets/gallery/images/gal8.jpg";
import gal9 from "../../assets/gallery/images/gal9.jpg";
import gal10 from "../../assets/gallery/images/gal10.jpg";
import gal11 from "../../assets/gallery/images/gal11.jpg";
import gal12 from "../../assets/gallery/images/gal12.jpg";
import eiog31 from "../../assets/gallery/images/31eiog.jpg";
import eiog32 from "../../assets/gallery/images/32eiog.jpg";
import eiog33 from "../../assets/gallery/images/34eiog.jpg";
import gal1vid from "../../assets/gallery/videos/gal1vid2022.mp4";
import gal2vid from "../../assets/gallery/videos/gal2vid2022.mp4";
import gal3vid from "../../assets/gallery/videos/gal3vid2022.mp4";
import gal4vid from "../../assets/gallery/videos/gal4vid2022.mp4";
import gal5vid from "../../assets/gallery/videos/gal5vid2022.mp4";
import gal6vid from "../../assets/gallery/videos/gal6vid2022.mp4";
import gal7vid from "../../assets/gallery/videos/gal7vid2022.mp4";
import gal8vid from "../../assets/gallery/videos/gal8vid2022.mp4";

const Gallery = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const videoRef = useRef(null);

  const playPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="gallery">
        <div className="gallery1">
          <p className="gallery-w">Gallery</p>
        </div>
        <p className="gallery-w2">
          check out our gallery from recent concluded events.
        </p>
        <div className="gallery-things">
          <div className="gallery-things1">
            <div className="gallery-things2">
              <div className="gallery-things2-1">
                <div className="gallery-things3">
                  <button
                    style={{
                      backgroundColor:
                        activeButton === "button1" ? "#F28C0F" : "",
                      color: activeButton === "button1" ? "#090B0E" : "",
                      fontWeight:
                        activeButton === "button1" ? "bold" : "normal",
                      borderRadius: activeButton === "button1" ? "6px" : "",
                    }}
                    className="gallery-button"
                    onClick={() => handleButtonClick("button1")}
                  >
                    All
                  </button>
                  <button
                    style={{
                      backgroundColor:
                        activeButton === "button2" ? "#F28C0F" : "",
                      color: activeButton === "button2" ? "#090B0E" : "",
                      fontWeight:
                        activeButton === "button2" ? "bold" : "normal",
                      borderRadius: activeButton === "button2" ? "6px" : "",
                    }}
                    className="gallery-button"
                    onClick={() => handleButtonClick("button2")}
                  >
                    Images
                  </button>
                  <button
                    style={{
                      backgroundColor:
                        activeButton === "button3" ? "#F28C0F" : "",
                      color: activeButton === "button3" ? "#090B0E" : "",
                      fontWeight: activeButton === "button3" ? "600" : "normal",
                      borderRadius: activeButton === "button3" ? "6px" : "",
                    }}
                    className="gallery-button"
                    onClick={() => handleButtonClick("button3")}
                  >
                    Videos
                  </button>
                </div>
              </div>
            </div>

            {activeButton === "button1" && (
              <div className="gallery-area">
                <div className="gallery-area0">
                  <div className="gallery-area1">
                    <img
                      src={gal11}
                      alt="Image 1"
                      className="image-gallery-image"
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={gal8}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={eiog31}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                </div>
                {/* next */}
                {/* next */}
                {/* next */}
                <div className="gallery-area0">
                  <div className="gallery-area1">
                    <img
                      src={gal5}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={gal6}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                  <div className="gallery-area3">
                    <img
                      src={gal10}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                </div>
                {/* next */}
                {/* next */}
                {/* next */}
                <div className="gallery-area0">
                  <div className="gallery-area1">
                    <img
                      src={eiog32}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                  <div
                    className="gallery-area1v"
                    onClick={playPause}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <video ref={videoRef} width="100%" controls>
                      <source src={gal6vid} type="video/mp4" />
                    </video>
                  </div>
                  <div className="gallery-area3">
                    <img
                      src={gal12}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                </div>

                {/* 
           
            */}
              </div>
            )}
            {activeButton === "button2" && (
              <div className="gallery-area">
                <div className="gallery-area0">
                  <div className="gallery-area1">
                    <img
                      src={gal1}
                      alt="Image 1"
                      className="image-gallery-image"
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={gal2}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                  <div className="gallery-area3">
                    <img
                      src={eiog33}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                </div>
                {/* next */}
                {/* next */}
                {/* next */}
                <div className="gallery-area0">
                  <div className="gallery-area1">
                    <img
                      src={gal5}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={gal6}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                  <div className="gallery-area3">
                    <img
                      src={gal7}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                </div>
                {/* next */}
                {/* next */}
                {/* next */}
                <div className="gallery-area0">
                  <div className="gallery-area1">
                    <img
                      src={gal8}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={gal9}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                  <div className="gallery-area3">
                    <img
                      src={eiog33}
                      alt="Image 2"
                      className="image-gallery-image"
                    />
                  </div>
                </div>

                {/* 
                
                 */}
              </div>
            )}
            {activeButton === "button3" && (
              <div className="gallery-area">
                <div className="gallery-area0">
                  <div
                    className="gallery-area1v"
                    onClick={playPause}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <video ref={videoRef} width="100%" controls>
                      <source src={gal1vid} type="video/mp4" />
                    </video>
                  </div>
                  <div
                    className="gallery-area1v"
                    onClick={playPause}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <video ref={videoRef} width="100%" controls>
                      <source src={gal2vid} type="video/mp4" />
                    </video>
                  </div>
                  <div
                    className="gallery-area3v"
                    onClick={playPause}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <video ref={videoRef} width="100%" controls>
                      <source src={gal3vid} type="video/mp4" />
                    </video>
                  </div>
                </div>
                {/* next */}
                {/* next */}
                {/* next */}
                <div className="gallery-area0">
                  <div
                    className="gallery-area1v"
                    onClick={playPause}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <video ref={videoRef} width="100%" controls>
                      <source src={gal4vid} type="video/mp4" />
                    </video>
                  </div>
                  <div
                    className="gallery-area1v"
                    onClick={playPause}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <video ref={videoRef} width="100%" controls>
                      <source src={gal5vid} type="video/mp4" />
                    </video>
                  </div>
                  <div
                    className="gallery-area3v"
                    onClick={playPause}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <video ref={videoRef} width="100%" controls>
                      <source src={gal6vid} type="video/mp4" />
                    </video>
                  </div>
                </div>
                {/* next */}
                {/* next */}
                {/* next */}
                <div className="gallery-area0">
                  <div
                    className="gallery-area1v"
                    onClick={playPause}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <video ref={videoRef} width="100%" controls>
                      <source src={gal7vid} type="video/mp4" />
                    </video>
                  </div>
                  <div
                    className="gallery-area1v"
                    onClick={playPause}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <video ref={videoRef} width="100%" height="100%" controls>
                      <source src={gal8vid} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <a href="/gallery">
          <button className="gal-bb">View more from gallery</button>
        </a>
        {/* <div className="jjk">
          <h3>{name}</h3>
        </div> */}
      </div>
    </>
  );
};

export default Gallery;
