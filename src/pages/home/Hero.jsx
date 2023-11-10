import "../../styles/hero.css";
import ReactTyped from "react-typed";
// import heroimg from "../../assets/images/hero-img.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <div className="hero2">
          <p className="hero-w">
            <ReactTyped
              strings={["We Are Proud Of Our <br /> Cultural Heritage"]}
              typeSpeed={70}
              // loop={1}
              // backSpeed={20}
              cursorChar="|"
              showCursor={false}
            />
            <br />
            {/* <ReactTyped
              strings={["Cultural Heritage"]}
              typeSpeed={100}
              // loop={1}
              // backSpeed={20}
              cursorChar="|"
              showCursor={false}
            /> */}
          </p>
          <p className="hero-w2">
            Association Of Yoruba Progressive Community is a community of yoruba
            immigrants in bayern germany which aims to bring yoruba people
            around germany together and unite them through events.
          </p>
          <p className="hero-w3"> discover yoruba culture</p>

          <div className="hero-bb">
            <button className="mis-button">Join Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
