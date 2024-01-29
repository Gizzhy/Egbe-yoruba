// images
import gal31 from "../assets/2022/31gal2022.jpg";
import gal6 from "../assets/2022/6gal2022.jpg";
import gal4 from "../assets/2022/4gal2022.jpg";
import gal5 from "../assets/2022/5gal2022.jpg";
import gal7 from "../assets/2022/7gal2022.jpg";
import gal8 from "../assets/2022/8gal2022.jpg";
import gal9 from "../assets/2022/9gal2022.jpg";
import gal10 from "../assets/2022/10gal2022.jpg";
import gal11 from "../assets/2022/11gal2022.jpg";
import gal12 from "../assets/2022/12gal2022.jpg";
import gal32 from "../assets/2022/32gal2022.jpg";
import gal33 from "../assets/2022/33gal2022.jpg";
// images

// component
import Gal1sub from "./Gal1sub";
// component

// styles
import "./gal1.css";
// styles

const Gal1 = () => {
  return (
    <>
      <Gal1sub />

      <div className="pic-first">
        <div className="picoo">
          <img src={gal31} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal6} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal4} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal5} alt="germany2022" className="pic-real" />
        </div>
      </div>
      {/* next */}
      {/* next */}
      {/* next */}

      <div className="pic-first">
        <div className="picoo">
          <img src={gal7} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal8} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal9} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal10} alt="germany2022" className="pic-real" />
        </div>
      </div>
      {/* next */}
      {/* next */}
      {/* next */}
      <div className="pic-first">
        <div className="picoo">
          <img src={gal11} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal12} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal32} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal33} alt="germany2022" className="pic-real" />
        </div>
      </div>
    </>
  );
};

export default Gal1;
