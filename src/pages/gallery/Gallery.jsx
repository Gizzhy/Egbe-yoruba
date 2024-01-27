import "./styles/gallery.css";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Galleryhero from "./Galleryhero";
import Gallerybody from "./Gallerybody";

// import Aboutbody from "../../pages/about/Aboutbody";
// import Aboutmiss from "../../pages/about/Aboutmiss";
// import Executive from "../../pages/about/Executive";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <Galleryhero />
      <Gallerybody />
      <Footer />
    </>
  );
};

export default Gallery;
