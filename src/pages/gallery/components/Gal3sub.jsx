import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import galleryImage from "./galleryData/galleryData";

const Gal3sub = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImage.galleryEventThree.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  // Navigate to next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImage.galleryEventThree.length);
  };

  // Navigate to previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImage.galleryEventThree.length) % galleryImage.galleryEventThree.length
    );
  };

  // Navigate to a specific image
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Adjust the translation dynamically
        }}
      >
        {galleryImage.galleryEventThree.map((item, index) => (
          <img
            key={index}
            src={item.gal}
            alt={item.alt}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>
        <FaArrowLeft className="iconnn" />
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        <FaArrowRight className="iconnn" />
      </button>
      <div className="carousel-dots">
        {galleryImage.galleryEventThree.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Gal3sub;
