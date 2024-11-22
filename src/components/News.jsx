import ".././styles/news.css";
import ibeji from "../assets/images/ibeji.webp";

const newsData = [
  {
    image: ibeji,
    category: "Stories",
    title: "Orisa Ibeji",
    description:
      "Orisa Ibeji is a Yoruba deity representing twins. In Yoruba culture and spirituality, twins are believed to be magical, and are granted protection by the Orisha Shango. If one twin should die, it represents bad ......",
  },
  {
    image: ibeji,
    category: "Stories",
    title: "Orisa Ibeji",
    description:
      "Orisa Ibeji is a Yoruba deity representing twins. In Yoruba culture and spirituality, twins are believed to be magical, and are granted protection by the Orisha Shango. If one twin should die, it represents bad ......",
  },
  {
    image: ibeji,
    category: "Stories",
    title: "Orisa Ibeji",
    description:
      "Orisa Ibeji is a Yoruba deity representing twins. In Yoruba culture and spirituality, twins are believed to be magical, and are granted protection by the Orisha Shango. If one twin should die, it represents bad ......",
  },
];
const newsDataMobile = [
  {
    image: ibeji,
    category: "Stories",
    title: "Orisa Ibeji",
    description:
      "Orisa Ibeji is a Yoruba deity representing twins. In Yoruba culture and spirituality, twins are believed to be magical, and are granted protection by the Orisha Shango...",
  },
  {
    image: ibeji,
    category: "Stories",
    title: "Orisa Ibeji",
    description:
      "Orisa Ibeji is a Yoruba deity representing twins. In Yoruba culture and spirituality, twins are believed to be magical, and are granted protection by the Orisha Shango...",
  },
];

import React from "react";

const News = () => {
  return (
    <>
      <div className="news">
        <div className="news1">
          <p className="news-w">Articles</p>
        </div>
        <div className="newsbody">
          {newsData.map((item, index) => (
            <div key={index} className="newscontent">
              <img src={item.image} alt={item.title} className="ibeji" />
              <div className="news-content">
                <p className="news-category">{item.category}</p>
                <p className="news-title">{item.title}</p>
                <p className="news-description">{item.description}</p>
                <a href="#" className="read-more">
                  Read more &#8599;
                </a>
              </div>
            </div>
          ))}
          {newsDataMobile.map((item, index) => (
            <div className="newscontentmobile">
              <div key={index} className="newscontentmobile">
                <img src={item.image} alt={item.title} className="ibeji" />
                <div className="news-content">
                  <p className="news-category">{item.category}</p>
                  <p className="news-title">{item.title}</p>
                  <p className="news-description">{item.description}</p>
                  <a href="#" className="read-more">
                    Read more &#8599;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="gal-bb">View more from articles</button>
      </div>
    </>
  );
};

export default News;
