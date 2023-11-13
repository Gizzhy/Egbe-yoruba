import "./styles/abouthero.css";
import arrow2 from "../../assets/images/Arrow 2.svg";

const Abouthero = () => {
  return (
    <>
      <div className="hero-mainn">
        <div className="hero22">
          <p className="hero-ww">About</p>
          <div className="arrr">
            <img src={arrow2} alt="about" className="arrr-img" />
          </div>
          <p className="hero-22">Egbé ísòkan Omo Yorùbá Germany</p>
        </div>
      </div>
    </>
  );
};

export default Abouthero;
