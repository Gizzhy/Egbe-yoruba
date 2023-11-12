import "../../styles/contact.css";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
// import Contactsmall from "../../components/Contactsmall";
import Contacthero from "../../pages/contact/Contacthero";
import Contactbody from "../../pages/contact/Contactbody";
import Contactcon from "../../pages/contact/Contactcon";
import gong2 from "../../assets/images/gong2.svg";

// import Executive from "../../pages/about/Executive";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Contacthero />
      <Contactbody />
      <Contactcon />
      {/* plain code */}
      {/* plain code */}
      {/* plain code */}

      <div className="abb-acc2">
        <div className="gongggcc2">
          <img src={gong2} alt="gong" className="gongs-imgg" />
        </div>
      </div>
      {/* plain code */}
      {/* plain code */}

      {/* <Executive /> */}
      {/* <Contactsmall /> */}

      <Footer />
    </>
  );
};

export default Contact;
