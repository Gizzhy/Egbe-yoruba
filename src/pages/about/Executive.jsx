import "./styles/executive.css";
import opaase from "../../assets/images/opaase.svg";
// import Aboutslider from "./Aboutslider";
// import Aboutsliderr from "./Aboutsliderr";

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

        {/* next */}
        {/* next */}
        {/* next */}
        {/* next */}

        <div className="execu-p">
          <div className="execu1">
            <div className="execu1-1"></div>
            <div className="execu1-2"></div>
            <div className="execu1-3"></div>
          </div>
          {/* next */}
          <div className="execu11">
            <div className="execu1-1"></div>
            <div className="execu1-3"></div>
          </div>
          {/* next */}
          <div className="execu2">
            <div className="execu1-1"></div>
            <div className="execu1-2"></div>
            <div className="execu1-3"></div>
          </div>
        </div>
      </div>
      {/* <Aboutsliderr /> */}
    </>
  );
};

export default Executive;
