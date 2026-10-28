import Header from "./Header";
import Hero from "./Hero";
import Mission from "./Mission";
import Gallery from "./Gallery";
import Proverbs from "./Proverbs";

import Navbar from "../../components/Navbar.jsx";
import Preloader from "../../components/Preloader";
import Footer from "../../components/Footer.jsx";
import Contactsmall from "../../components/Contactsmall";
import News from "../../components/News";
import UpcomingEvent from "../../components/UpcomingEvent/UpcomingEvent";
import "../../styles/home.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3950);
    return () => clearTimeout(timer);
  }, []);

  // Sections only exist after the preloader, so the browser's own jump to
  // "/#events" misses them. Scroll once they are rendered, and again on every
  // in-app navigation to a hash (location.key changes even for the same hash).
  useEffect(() => {
    if (isLoading || !location.hash) return;
    const target = document.getElementById(
      decodeURIComponent(location.hash.slice(1))
    );
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [isLoading, location.hash, location.key]);

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
          <UpcomingEvent />
          <Gallery />
          <News />
          <Proverbs />
          <Contactsmall />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
