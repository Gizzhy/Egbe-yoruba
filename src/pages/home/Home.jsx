import Header from "./Header";
import Hero from "./Hero";
import Mission from "./Mission";
import Navbar from "../../components/Navbar.jsx";
import Preloader from "../../components/Preloader";

import Footer from "../../components/Footer.jsx";
import Contactsmall from "../../components/Contactsmall";

import "../../styles/home.css";

const Home = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <Hero />
      <Header />
      <Mission />
      <Contactsmall />
      <Footer />
    </>
  );
};

export default Home;
