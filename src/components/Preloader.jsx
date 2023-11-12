import animationgif from "../assets/icons/preloader.gif";
import "../styles/preloader.css";

const preloader = () => {
  return (
    <>
      <div className="preloader">
        <img className="preloader-img" src={animationgif} alt="loader" />
      </div>
    </>
  );
};

export default preloader;
