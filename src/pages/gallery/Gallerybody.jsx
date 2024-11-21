import "./styles/gallerybody.css";
import gong2 from "../../assets/images/gong2.svg";

import Gal1 from "./components/Gal1";
import Gal2 from "./components/Gal2";
import Gal3 from "./components/Gal3";
import Gal4 from "./components/Gal4";

const Gallerybody = () => {
  return (
    <>
      <div className="gal-main">
        <div className="cattt">
          <div className="tttg">
            <p className="ab-2g">Gallery</p>
          </div>
          <div className="rrrg">
            <img src={gong2} alt="gong" className="gongs-img" />
          </div>
        </div>
        <div className="pictures-a">
          <p className="pic1">Nigeria - Germany Cultural Carnival 2022</p>
          <div className="pichm">
            <Gal1 />
           
          </div>
          <p className="pic1">Nigeria - Germany Cultural Carnival 2023</p>
          <Gal2 />
          <p className="pic1">
            EIOG Hosted by Assosiation of Yoruba Progressive Community Bayern
            e.V - Munich
          </p>
          <Gal3 />
          <p className="pic1">EIOG National Congress AACHEN - February 2024</p>
          <Gal4 />
        </div>
      </div>
    </>
  );
};
export default Gallerybody;
