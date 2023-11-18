import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/images/nigerian-woman1.svg";
// import image2 from "./images/image2.jpg";
// import image3 from "./images/image3.jpg";

const Carousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "60px", // Adjust the padding as needed
    slidesToShow: 2,
    arrows: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
          dots: true,
          infinite: true,
          speed: 500,
          //   slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image1} alt="Image 2" />
        </div>
        <div>
          <img src={image1} alt="Image 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
