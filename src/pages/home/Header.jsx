import "../../styles/header.css";
import twitter from "../../assets/icons/TwitterLogo.svg";
import facebook from "../../assets/icons/FacebookLogo.svg";
import instagram from "../../assets/icons/InstagramLogo.svg";
import youtube from "../../assets/icons/YoutubeLogo.svg";
import fabric from "../../assets/images/Fabric texture background.svg";

const Header = () => {
  return (
    <>
      <div className="members">
        <div className="mem-con">
          <div className="mem-con1">
            <div className="mem-a">
              <p className="mem-oro">50+</p>
              <p className="mem-oro2-1">Registered Members</p>
            </div>
          </div>
          <div className="mem-con2">
            <div className="mem-a">
              <p className="mem-oro">10+</p>
              <p className="mem-oro2-2">Awards</p>
            </div>
          </div>
          <div className="mem-con2">
            <div className="mem-a">
              <p className="mem-oro">15</p>
              <p className="mem-oro2-2">Social Events</p>
            </div>
          </div>
        </div>
        <div className="socials">
          <a href="/#">
            <img src={twitter} alt="twitter" className="socials-img"></img>
          </a>
          <a href="/#">
            <img src={facebook} alt="twitter" className="socials-img"></img>
          </a>
          <a href="/#">
            <img src={instagram} alt="twitter" className="socials-img"></img>
          </a>
          <a href="/#">
            <img src={youtube} alt="twitter" className="socials-img"></img>
          </a>
        </div>
      </div>
      <div className="fabric-a">
        <img src={fabric} alt="yoruba fabric" className="fabric" />
      </div>
    </>
  );
};

export default Header;
