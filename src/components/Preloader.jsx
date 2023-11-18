import animationgif from "../assets/icons/preloader.gif";
// import oriolokun from "../assets/images/isokan22.jpeg";
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
