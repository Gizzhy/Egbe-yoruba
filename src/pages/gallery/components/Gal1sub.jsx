import React from "react";
// import { Carousel } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import gal36 from "../assets/2022/36gal2022.jpg";
import gal37 from "../assets/2022/37gal2022.jpg";
import gal38 from "../assets/2022/38gal2022.jpg";
import gal39 from "../assets/2022/39gal2022.jpg";
import gal40 from "../assets/2022/40gal2022.jpg";
import gal6 from "../assets/2022/6gal2022.jpg";
import gal35 from "../assets/2022/35gal2022.jpg";
import gal20 from "../assets/2022/20gal2022.jpg";
import gal34 from "../assets/2022/34gal2022.jpg";
import gal29 from "../assets/2022/29gal2022.jpg";
import gal28 from "../assets/2022/28gal2022.jpg";
import gal23 from "../assets/2022/23gal2022.jpg";
import gal24 from "../assets/2022/24gal2022.jpg";
import gal22 from "../assets/2022/22gal2022.jpg";
import gal21 from "../assets/2022/21gal2022.jpg";
import gal16 from "../assets/2022/15gal2022.jpg";
import gal41 from "../assets/2022/41gal2022.jpg";
// images

// import InfiniteCarousel from "react-leaf-carousel";

const Gal1sub = () => {
  //
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1800}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        <div className="picooo">
          <img src={gal35} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal36} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal37} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal38} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal39} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal40} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal41} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal34} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal20} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal6} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal29} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal28} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal23} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal16} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal24} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal22} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={gal21} alt="germany2022" className="pic-real" />
        </div>
      </Carousel>
    </>
  );
};

export default Gal1sub;
