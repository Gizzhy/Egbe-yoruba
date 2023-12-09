// import animationgif from "../assets/icons/preloader.gif";
import oriolokun from "../assets/IMG_0550.gif";
// import oriolokun from "../assets/images/isokan22.jpeg";
import "../styles/preloader.css";

const preloader = () => {
  return (
    <>
      <div className="preloader">
        <img className="preloader-img" src={oriolokun} alt="loader" />
      </div>
    </>
  );
};

export default preloader;
