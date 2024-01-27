import "./styles/gallerybody.css";
import gong2 from "../../assets/images/gong2.svg";
import imageArray from "./imageArray";

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
          <div className="pic-first">
            {imageArray.map((imagePath, index) => (
              <div className="picoo">
                <img
                  key={index}
                  src={imagePath}
                  alt={`Image ${imagePath}`}
                  className="pic-real"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallerybody;
