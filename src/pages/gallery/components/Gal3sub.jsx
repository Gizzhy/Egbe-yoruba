import React from "react";
// import { Carousel } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import eiog13 from "../assets/eiog/13eiog.jpg";
import eiog14 from "../assets/eiog/14eiog.jpg";
import eiog15 from "../assets/eiog/15eiog.jpg";
import eiog16 from "../assets/eiog/16eiog.jpg";
import eiog17 from "../assets/eiog/17eiog.jpg";
import eiog18 from "../assets/eiog/18eiog.jpg";
import eiog19 from "../assets/eiog/19eiog.jpg";
import eiog20 from "../assets/eiog/20eiog.jpg";
import eiog21 from "../assets/eiog/21eiog.jpg";
import eiog22 from "../assets/eiog/22eiog.jpg";
import eiog23 from "../assets/eiog/23eiog.jpg";
import eiog24 from "../assets/eiog/24eiog.jpg";
import eiog25 from "../assets/eiog/25eiog.jpg";
import eiog26 from "../assets/eiog/26eiog.jpg";
import eiog27 from "../assets/eiog/27eiog.jpg";
import eiog28 from "../assets/eiog/28eiog.jpg";
import eiog29 from "../assets/eiog/29eiog.jpg";
import eiog30 from "../assets/eiog/30eiog.jpg";

// images

// import InfiniteCarousel from "react-leaf-carousel";

const Gal3sub = () => {
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
          <img src={eiog13} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog14} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog15} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog16} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog17} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog18} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog19} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog20} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog21} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog22} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog23} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog24} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog25} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog26} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog27} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog28} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog29} alt="germany2022" className="pic-real" />
        </div>
        <div className="picooo">
          <img src={eiog30} alt="germany2022" className="pic-real" />
        </div>
      </Carousel>
    </>
  );
};

export default Gal3sub;
