import React from "react";
import "./styles/articlebody.css";
import ibeji from "../../assets/images/ibeji.webp";
const articlesData1 = [
  {
    image: ibeji,
    category: "Stories",
    title: "Orisa Ibeji",
    description:
      "Orisa Ibeji is a Yoruba deity representing twins. In Yoruba culture and spirituality, twins are believed to be magical, and are granted protection by the Orisha Shango. If one twin should die, it represents bad ......",
    link: "/articles/orisaibeji",
  },
  {
    image: ibeji,
    category: "Stories",
    title: "Orisa Ibeji",
    description:
      "Orisa Ibeji is a Yoruba deity representing twins. In Yoruba culture and spirituality, twins are believed to be magical, and are granted protection by the Orisha Shango. If one twin should die, it represents bad ......",
    link: "/articles/orisaibeji",
  },
  {
    image: ibeji,
    category: "Stories",
    title: "Orisa Ibeji",
    description:
      "Orisa Ibeji is a Yoruba deity representing twins. In Yoruba culture and spirituality, twins are believed to be magical, and are granted protection by the Orisha Shango. If one twin should die, it represents bad ......",
    link: "/articles/orisaibeji",
  },
];

const ArticleBody = () => {
  return (
    <>
      <div className="articlee">
        <div className="articlebody">
          {articlesData1.map((item, index) => (
            <div key={index} className="articlecontent">
              <img src={item.image} alt={item.title} className="ibeji" />
              <div className="article-content">
                <p className="news-category">{item.category}</p>
                <p className="news-title">{item.title}</p>
                <p className="news-description">{item.description}</p>
                <a href={item.link} className="read-more">
                  Read more &#8599;
                </a>
              </div>
            </div>
          ))}
          {/* {newsDataMobile.map((item, index) => (
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
          ))} */}
        </div>
      </div>
    </>
  );
};

export default ArticleBody;
