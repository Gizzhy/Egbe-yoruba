import "../../styles/gallery.css";
import React, { useEffect, useState } from "react";
import gal1 from "../../assets/gallery/images/gal1.jpg";
import gal2 from "../../assets/gallery/images/gal2.jpg";
import gal3 from "../../assets/gallery/images/gal3.jpg";
import gal5 from "../../assets/gallery/images/gal5.jpg";
import gal6 from "../../assets/gallery/images/gal6.jpg";
import gal7 from "../../assets/gallery/images/gal7.jpg";
import gal8 from "../../assets/gallery/images/gal8.jpg";
import gal9 from "../../assets/gallery/images/gal9.jpg";
import gal10 from "../../assets/gallery/images/gal10.jpg";
import gal11 from "../../assets/gallery/images/gal11.jpg";
import gal12 from "../../assets/gallery/images/gal12.jpg";
import gal13 from "../../assets/gallery/images/gal13.jpg";
// import gal15 from "../../assets/gallery/images/gal15.jpg";

const Gallery = () => {
  const [activeButton, setActiveButton] = useState("button1");
  // const [name, setName] = useState("");

  // useEffect(() => {
  //   // Fetch data from your API
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Assuming your API response is an array of users
  //       const names = data.map((user) => user.name).join(", ");
  //       setName(names);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  // zoom
  // zoom
  const [zoomed, setZoomed] = useState(false);

  const toggleZoom = (event) => {
    // Check if the image is already zoomed
    if (zoomed) {
      event.target.style.transform = "scale(1)";
    } else {
      event.target.style.transform = "scale(2.5)";
    }

    // Toggle the zoom state
    setZoomed(!zoomed);
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
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={gal8}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area3">
                    <img
                      src={gal13}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
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
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={gal6}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area3">
                    <img
                      src={gal10}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
                    />
                  </div>
                </div>
                {/* next */}
                {/* next */}
                {/* next */}
                <div className="gallery-area0">
                  <div className="gallery-area1">
                    <img
                      src={gal9}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={gal3}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area3">
                    <img
                      src={gal12}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
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
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={gal2}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area3">
                    <img
                      src={gal3}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
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
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={gal6}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area3">
                    <img
                      src={gal7}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
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
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area2">
                    <img
                      src={gal9}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
                    />
                  </div>
                  <div className="gallery-area3">
                    <img
                      src={gal10}
                      alt="Image 2"
                      className="image-gallery-image"
                      onClick={toggleZoom}
                    />
                  </div>
                </div>

                {/* 
                
                 */}
              </div>
            )}
            {activeButton === "button3" && (
              <div className="gallery-area">Videos</div>
            )}
          </div>
        </div>
        <a href="/#">
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
