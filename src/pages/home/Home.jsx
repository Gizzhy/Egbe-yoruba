import Header from "./Header";
import Hero from "./Hero";
import Mission from "./Mission";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Contactsmall from "../../components/Contactsmall";

import "../../styles/home.css";

const Home = () => {
  return (
    <>
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
