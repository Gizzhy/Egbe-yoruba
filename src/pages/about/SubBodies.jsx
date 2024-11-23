import React from "react";
import "./styles/subbodies.css";
import Footer from "../../components/Footer.jsx";
import Navbar from "../../components/Navbar.jsx";
import gong2 from "../../assets/images/gong3.svg";
import about5 from "../../assets/images/aboutmiss5.svg";

const SubBodies = () => {
  return (
    <>
      <Navbar />

      <div className="subbodies">
        <p className="subbodies1">
          The Central Association of Yorùbá Organizations in Germany
        </p>
        <p className="oooop">
          Below is a list of the affiliated groups within our organization:
        </p>
        <div className="sub-content">
          <img src={about5} alt="gangan" className="sub-img" />
          <span className="sub-w">
            Egbe Isedale ati Ilosiwaju Omo Yoruba, Hamburg e.V.
          </span>
        </div>
        <div className="sub-content">
          <img src={gong2} alt="gangan" className="sub-img" />
          <span className="sub-w">
            Egbe Ilosiwaju Omo Yoruba Bayern, AYPC e.V. München
          </span>
        </div>
        <div className="sub-content">
          <img src={about5} alt="gangan" className="sub-img" />
          <span className="sub-w">Egbe Omo Oduduwa Berlin e.V.</span>
        </div>
        <div className="sub-content">
          <img src={gong2} alt="gangan" className="sub-img" />
          <span className="sub-w">Iwa Social Club Bremen</span>
        </div>
        <div className="sub-content">
          <img src={about5} alt="gangan" className="sub-img" />
          <span className="sub-w">Oduduwa Movement Hannover e.V.</span>
        </div>
        <div className="sub-content">
          <img src={gong2} alt="gangan" className="sub-img" />
          <span className="sub-w">Oduduwa Club of Koblenz e.V.</span>
        </div>
        <div className="sub-content">
          <img src={about5} alt="gangan" className="sub-img" />
          <span className="sub-w">
            Egbe Omo Yoruba Frankfurt Rhein Main e.V.
          </span>
        </div>
        <div className="sub-content">
          <img src={gong2} alt="gangan" className="sub-img" />
          <span className="sub-w">Yoruba Progresssive Union Aachen</span>
        </div>
        <div className="sub-content">
          <img src={about5} alt="gangan" className="sub-img" />
          <span className="sub-w">Yoruba Community Union e.V. Ulm</span>
        </div>
        <div className="sub-content">
          <img src={gong2} alt="gangan" className="sub-img" />
          <span className="sub-w">Egbe Omo Oduduwa Kassel e.V.</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SubBodies;
