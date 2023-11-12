import "../../styles/hero.css";
// import ReactTyped from "react-typed";
// import heroimg from "../../assets/images/hero-img.svg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <div className="hero2">
          <p className="hero-w">
            <Typewriter
              words={["We Are Proud Of Our Cultural Heritage"]}
              loop={1}
              typeSpeed={70}
              delaySpeed={2950}
              cursorStyle="|"
              cursor={false}
            />
            {/* We Are Proud Of Our
            <br />
            Cultural Heritage */}
          </p>
          <p className="hero-w2">
            Egbé ísòkan Omo Yorùbá Germany is a community of yoruba immigrants
            in bayern germany which aims to bring yoruba people around germany
            together and unite them through events.
          </p>
          <p className="hero-w3"> discover yoruba culture</p>

          <div className="hero-bb">
            <a href="/contact">
              <button className="mis-button">Join Us</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
