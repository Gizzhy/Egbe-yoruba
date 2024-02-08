import React from "react";
// import { Carousel } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import gal13 from "../assets/2023/13gal2023.jpg";
import gal14 from "../assets/2023/14gal2023.jpg";
import gal15 from "../assets/2023/15gal2023.jpg";
import gal16 from "../assets/2023/16gal2023.jpg";
import gal17 from "../assets/2023/17gal2023.jpg";
import gal18 from "../assets/2023/18gal2023.jpg";
import gal19 from "../assets/2023/19gal2023.jpg";
import gal20 from "../assets/2023/20gal2023.jpg";
import gal21 from "../assets/2023/21gal2023.jpg";
import gal22 from "../assets/2023/22gal2023.jpg";
import gal23 from "../assets/2023/23gal2023.jpg";
import gal24 from "../assets/2023/24gal2023.jpg";
import gal25 from "../assets/2023/25gal2023.jpg";
import gal26 from "../assets/2023/26gal2023.jpg";
import gal27 from "../assets/2023/27gal2023.jpg";
import gal28 from "../assets/2023/28gal2023.jpg";
import gal29 from "../assets/2023/29gal2023.jpg";
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
            items: 4,
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
        <div className="picoo">
          <img src={gal13} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal14} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal15} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal16} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal17} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal18} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal19} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal20} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal21} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal22} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal23} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal24} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal25} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal26} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal27} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal28} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal29} alt="germany2022" className="pic-real" />
        </div>
      </Carousel>
    </>
  );
};

export default Gal1sub;
