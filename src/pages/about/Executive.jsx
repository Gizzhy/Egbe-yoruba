import "./styles/executive.css";
import opaase from "../../assets/images/opaase.svg";

const Executive = () => {
  return (
    <>
      <div className="executive-main">
        <div className="about-miss1s">
          <img src={opaase} alt="oba" className="aboutobas" />
          <div className="about-miss1-1">
            <p className="our-goal1s">EXECUTIVE COUNCIL</p>
            <p className="our-goal2s">
              these are the current executives of the association of yoruba
              progressive community
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Executive;
