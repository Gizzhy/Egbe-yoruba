import "./styles/contacthero.css";
import arrow2 from "../../assets/images/Arrow 2.svg";

const Contacthero = () => {
  return (
    <>
      <div className="hero-mainnc">
        <div className="hero22c">
          <div className="">
            <p className="hero-wwc">CONTACT</p>
            <div className="arrrc">
              <img src={arrow2} alt="about" className="arrr-img" />
            </div>
            <div className="conttt">
              <p className="hero-22c">
                want to join the association of egbe isokan yoruba germany , you
                can send us a message via the contact form below
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacthero;
