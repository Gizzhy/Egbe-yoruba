import "./styles/executive.css";
import opaase from "../../assets/images/opaase.svg";
import akinola from "./images/akinola.jpg";
import alfred from "./images/alfred.jpg";
import ghazal from "./images/ghazal.jpg";
import kayode from "./images/kayode.jpg";
import olufemi from "./images/olufemi.jpg";
import lekan from "./images/lekan.jpg";
import adetula from "./images/adetula.jpeg";
import bashir from "./images/bashir.jpg";

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
            <div className="execu1-1">
              <div className="execuimg">
                <img src={alfred} className="execuimgg2" />
                <p className="execu-oro">MR ALFRED FATAI</p>
                <p className="execu-oro2">{"General Secretary"}</p>
              </div>
            </div>
            <div className="execu1-2">
              <div className="execuimg">
                <img src={akinola} className="execuimgg" />
                <p className="execu-oro">MR AKINOLA FAMSON</p>
                <p className="execu-oro2">{"President"}</p>
              </div>
            </div>
            <div className="execu1-3">
              <div className="execuimg">
                <img src={adetula} className="execuimgg" />
                <p className="execu-oro">Chief Wilson Adetula</p>
                <p className="execu-oro2">{"Treasurer"}</p>
              </div>
            </div>
          </div>
          {/* next */}
          <div className="execu11">
            <div className="execu1-1">
              <div className="execuimg">
                <img src={lekan} className="execuimgg2" />
                <p className="execu-oro">MR OLALEKAN ELEGBEDE</p>
                <p className="execu-oro2">{"Financial Secretary"}</p>
              </div>
            </div>
            <div className="execu1-3">
              <div className="execuimg">
                <img src={kayode} className="execuimgg2" />
                <p className="execu-oro">MR KAYODE OLASOJI</p>
                <p className="execu-oro2">{"Assistant Gen. Secretary"}</p>
              </div>
            </div>
          </div>
          {/* next */}
          <div className="execu2">
            <div className="execu1-1">
              <div className="execuimg">
                <img src={ghazal} className="execuimgg" />
                <p className="execu-oro">MR GHAZAL BABALOLA</p>
                <p className="execu-oro2">{"Social Secretary"}</p>
              </div>
            </div>
            <div className="execu1-2">
              <div className="execuimg">
                <img src={bashir} className="execuimgg" />
                <p className="execu-oro">MR Muhammed Balogun</p>
                <p className="execu-oro2">{"Treasurer"}</p>
              </div>
            </div>
            <div className="execu1-3">
            <div className="execuimg">
                <img src={olufemi} className="execuimgg" />
                <p className="execu-oro">MR OLUFEMI OKANLAWON</p>
                <p className="execu-oro2">{"Publicity Secretary"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Aboutsliderr /> */}
    </>
  );
};

export default Executive;
