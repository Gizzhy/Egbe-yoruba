import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import Gal1sub from "./gallery/components/Gal1sub";

const carouselData = [
  {
    category: "Events",
    title: "End Of The Year Meet-Up 2019",
    description:
      "The End Of The Year Meet-Up Was Held In Leverkusen, Germany On December 26, 2019. It Featured Dance, Games, Music, Different Cultural Presentation From Different Families And Different Tribes.",
    image: "https://via.placeholder.com/400x200?text=Image+2",
  },
  {
    category: "Stories",
    title: "Orisa Ibeji",
    description:
      "Orisa Ibeji Is A Yoruba Deity Representing Twins. In Yoruba Culture And Spirituality, Twins Are Believed To Be Magical, And Are Granted Protection By The Orisha Shango. If One Twin Should Die, It Represents Bad.",
    image: "https://via.placeholder.com/400x200?text=Image+2",
  },
  {
    category: "Stories",
    title: "Orisa Agemo",
    description:
      "Orisa Agemo Is A Yoruba Deity Of The Hunt, The Forest, And The Wild. The Deity Is Also Associated With Protection, Healing, And Fertility.",
    image: "https://via.placeholder.com/400x200?text=Image+3",
  },
  {
    category: "Stories",
    title: "Orisa Agemo",
    description:
      "Orisa Agemo Is A Yoruba Deity Of The Hunt, The Forest, And The Wild. The Deity Is Also Associated With Protection, Healing, And Fertility.",
    image: "https://via.placeholder.com/400x200?text=Image+3",
  },
];

const CustomArrow = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <span>➤</span>
  </div>
);

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow className="next-arrow" />,
    prevArrow: <CustomArrow className="prev-arrow" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselData.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <p className="category">{item.category}</p>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
                <a href="#" className="read-more">
                  Read More <span>➤</span>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Gal1sub />
    </>
  );
};

export default Carousel;
