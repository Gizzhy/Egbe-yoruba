// images
import gal1 from "../assets/2023/1gal2023.jpg";
import gal2 from "../assets/2023/2gal2023.jpg";
import gal3 from "../assets/2023/3gal2023.jpg";
import gal4 from "../assets/2023/4gal2023.jpg";
import gal5 from "../assets/2023/5gal2023.jpg";
import gal6 from "../assets/2023/6gal2023.jpg";
import gal7 from "../assets/2023/7gal2023.jpg";
import gal8 from "../assets/2023/8gal2023.jpg";
import gal9 from "../assets/2023/9gal2023.jpg";
import gal10 from "../assets/2023/10gal2023.jpg";
import gal11 from "../assets/2023/11gal2023.jpg";
import gal12 from "../assets/2023/12gal2023.jpg";
// images

// component
import Gal2sub from "./Gal2sub";
// component

// styles
import "./gal2.css";
// styles

const Gal2 = () => {
  return (
    <>
      <Gal2sub />

      <div className="pic-first">
        <div className="picoo">
          <img src={gal1} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal2} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal3} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal4} alt="germany2022" className="pic-real" />
        </div>
      </div>
      {/* next */}
      {/* next */}
      {/* next */}

      <div className="pic-first">
        <div className="picoo">
          <img src={gal5} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal6} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal7} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal9} alt="germany2022" className="pic-real" />
        </div>
      </div>
      {/* next */}
      {/* next */}
      {/* next */}
      <div className="pic-first">
        <div className="picoo">
          <img src={gal10} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal11} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal12} alt="germany2022" className="pic-real" />
        </div>
        <div className="picoo">
          <img src={gal8} alt="germany2022" className="pic-real" />
        </div>
      </div>
    </>
  );
};

export default Gal2;
