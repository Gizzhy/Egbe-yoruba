import "./styles/galleryhero.css";
import arrow2 from "../../assets/images/Arrow 2.svg";

const Galleryhero = () => {
  return (
    <>
      <div className="hero-mainngal">
        <div className="hero22">
          <p className="hero-ww">Gallery</p>
          <div className="arrr">
            <img src={arrow2} alt="about" className="arrr-img" />
          </div>
          <p className="hero-22">A collection of our events</p>
        </div>
      </div>
    </>
  );
};

export default Galleryhero;
