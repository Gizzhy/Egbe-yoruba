// images
import eiog1 from "../assets/eiog/1eiog.jpg";
import eiog2 from "../assets/eiog/2eiog.jpg";
import eiog3 from "../assets/eiog/3eiog.jpg";
import eiog4 from "../assets/eiog/4eiog.jpg";
import eiog5 from "../assets/eiog/5eiog.jpg";
import eiog6 from "../assets/eiog/6eiog.jpg";
import eiog7 from "../assets/eiog/7eiog.jpg";
import eiog8 from "../assets/eiog/8eiog.jpg";
import eiog9 from "../assets/eiog/9eiog.jpg";
import eiog10 from "../assets/eiog/10eiog.jpg";
import eiog11 from "../assets/eiog/11eiog.jpg";
import eiog12 from "../assets/eiog/12eiog.jpg";
// images

// component
import Gal3sub from "./Gal3sub";
// component

// styles
import "./gal3.css";
// styles

const Gal3 = () => {
  return (
    <>
      <Gal3sub />

      <div className="pic-first">
        <div className="picoo">
          <img src={eiog1} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={eiog2} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={eiog3} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={eiog4} alt="germany2022" className="pic-real" />
        </div>
      </div>
      {/* next */}
      {/* next */}
      {/* next */}

      <div className="pic-first">
        <div className="picoo">
          <img src={eiog5} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={eiog6} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={eiog7} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={eiog8} alt="germany2022" className="pic-real" />
        </div>
      </div>
      {/* next */}
      {/* next */}
      {/* next */}
      <div className="pic-first">
        <div className="picoo">
          <img src={eiog9} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={eiog10} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={eiog11} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={eiog12} alt="germany2022" className="pic-real" />
        </div>
      </div>
    </>
  );
};

export default Gal3;
