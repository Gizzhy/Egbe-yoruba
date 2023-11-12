import Header from "./Header";
import Hero from "./Hero";
import Mission from "./Mission";
import Navbar from "../../components/Navbar.jsx";
import Preloader from "../../components/Preloader";
import Footer from "../../components/Footer.jsx";
import Contactsmall from "../../components/Contactsmall";
import "../../styles/home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [2900]);
  });
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Header />
          <Mission />
          <Contactsmall />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
