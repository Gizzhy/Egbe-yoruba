import ".././styles/news.css";
import ibeji from "../assets/images/ibeji.webp";
import sango from "../assets/images/sango.jpg";
import agemo from "../assets/images/agemo.png";

const newsData = [
  {
    image: ibeji,
    category: "Stories",
    title: "Orisa Ibeji",
    description:
      "Orisa Ibeji is a Yoruba deity representing twins. In Yoruba culture and spirituality, twins are believed to be magical, and are granted protection by the Orisha Shango. If one twin should die, it represents bad ......",
    link: "/articles/orisaibeji",
  },
  {
    image: sango,
    category: "Stories",
    title: "Sàngó Olukoso",
    description:
      "Sàngó is one of the most powerful and revered deities in Yoruba mythology, Nigeria. He is the god of thunder, lightning, and fire and is associated with strength, justice, and power. His story is rich with...",
    link: "/articles/sango",
  },
  {
    image: agemo,
    category: "Stories",
    title: "Orisa Agemo",
    description:
      "Orisa Agemo is central to Yoruba religious tradition at the same time as a mutation and intercessor between the worlds sacred. The Festival of Agemo, dreamt up by a chameleon......",
    link: "/articles/agemo",
  },
];
const newsDataMobile = [
  {
    image: ibeji,
    category: "Stories",
    title: "Orisa Ibeji",
    description:
      "Orisa Ibeji is a Yoruba deity representing twins. In Yoruba culture and spirituality, twins are believed to be magical, and are granted protection by the Orisha Shango...",
    link: "/articles/orisaibeji",
  },
  {
    image: sango,
    category: "Stories",
    title: "Sàngó Olukoso",
    description:
      "Sàngó is one of the most powerful and revered deities in Yoruba mythology, Nigeria. He is the god of thunder, lightning, and fire and is associated with strength, justice, and power. His story is rich with...",
    link: "/articles/sango",
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
                <a href={item.link} className="read-more">
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
                  <a href={item.link} className="read-more">
                    Read more &#8599;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="/articles">
          <button className="gal-bb">View more from articles</button>
        </a>
      </div>
    </>
  );
};

export default News;
