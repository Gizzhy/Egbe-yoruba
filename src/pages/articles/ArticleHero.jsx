import React from "react";
import arrow2 from "../../assets/images/Arrow 2.svg";

const ArticleHero = () => {
  return (
    <>
      <div className="articlehero">
        <div className="hero22">
          <p className="hero-ww">Articles</p>
          <div className="arrr">
            <img src={arrow2} alt="about" className="arrr-img" />
          </div>
          <p className="hero-22">Informative & Educative Articles</p>
        </div>
      </div>
    </>
  );
};

export default ArticleHero;
