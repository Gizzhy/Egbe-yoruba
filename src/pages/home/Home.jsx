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

const PRELOADER_SEEN_KEY = "eioyg-preloader-seen";

// Storage can throw (private mode, blocked site data); then fall back to
// showing the preloader, which is the old behaviour.
const hasSeenPreloader = () => {
  try {
    return sessionStorage.getItem(PRELOADER_SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

const markPreloaderSeen = () => {
  try {
    sessionStorage.setItem(PRELOADER_SEEN_KEY, "1");
  } catch {
    // ignore: the preloader just shows again next time
  }
};

const Home = () => {
  const location = useLocation();
  // Once per browser session, and never when deep-linking to a section
  // like /#events.
  const [isLoading, setIsLoading] = useState(
    () => !location.hash && !hasSeenPreloader()
  );

  useEffect(() => {
    if (!isLoading) return undefined;
    const timer = setTimeout(() => {
      markPreloaderSeen();
      setIsLoading(false);
    }, 3950);
    return () => clearTimeout(timer);
  }, [isLoading]);

  // The browser's own jump to "/#events" can run before the sections are
  // rendered. Scroll once they are, and again on every in-app navigation to
  // a hash (location.key changes even for the same hash).
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
