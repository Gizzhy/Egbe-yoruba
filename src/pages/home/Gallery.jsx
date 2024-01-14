import "../../styles/gallery.css";
import React, { useEffect, useState } from "react";
// import yoruba1 from "../../assets/images/image 3.svg";

// import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const [name, setName] = useState("");

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
              <div className="gallery-area">All</div>
            )}
            {activeButton === "button2" && (
              <div className="gallery-area">Images</div>
            )}
            {activeButton === "button3" && (
              <div className="gallery-area">Videos</div>
            )}
          </div>
        </div>
        {/* <div className="jjk">
          <h3>{name}</h3>
        </div> */}
      </div>
    </>
  );
};

export default Gallery;
