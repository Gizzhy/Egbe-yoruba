import React from "react";
import "./styles/article.css";
import ArticleHero from "./ArticleHero";
import Navbar from "../../components/Navbar";
import ArticleBody from "./ArticleBody";
import Footer from "../../components/Footer";

const Articles = () => {
  return (
    <>
      <Navbar />
      <ArticleHero />
      <ArticleBody />
      <Footer />
    </>
  );
};

export default Articles;
