import "../../styles/about.css";

// import Header from "./Header";
// import Hero from "./Hero";
// import Mission from "./Mission";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Contactsmall from "../../components/Contactsmall";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* <Header /> */}
      {/* <Mission /> */}
      <Contactsmall />
      <Footer />
    </>
  );
};

export default Home;
