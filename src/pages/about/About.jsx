import "../../styles/about.css";

// import Header from "./Header";
// import Hero from "./Hero";
// import Mission from "./Mission";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
// import Contactsmall from "../../components/Contactsmall";
import Abouthero from "../../pages/about/Abouthero";
import Aboutbody from "../../pages/about/Aboutbody";
import Aboutmiss from "../../pages/about/Aboutmiss";
import Executive from "../../pages/about/Executive";

const About = () => {
  return (
    <>
      <Navbar />
      <Abouthero />
      <Aboutbody />
      <Aboutmiss />
      <Executive />
      {/* <Contactsmall /> */}
      <Footer />
    </>
  );
};

export default About;
