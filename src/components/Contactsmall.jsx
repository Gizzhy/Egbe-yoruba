import ".././styles/contact-small.css";
import ankara from "../assets/images/contactfabric.svg";
import paperplane from "../assets/icons/PaperPlaneTilt.svg";

const Contactsmall = () => {
  return (
    <>
      <div className="cont">
        <div className="cont-a">
          <img src={ankara} alt="ankara" className="ankara" />
          <p className="cont-w1">Contact Us</p>
          <div className="cont-form">
            <form action="/#">
              <p className="cont-w2">Name</p>
              <input type="text" name="name" className="cont-input"></input>
              {/* next */}
              <p className="cont-w2">E-mail Address</p>
              <input type="text" name="name" className="cont-input"></input>
              {/* next */}
              <p className="cont-w2">Message</p>
              <input type="text" name="name" className="cont-inputt"></input>
              <div className="conbut-a">
                <button className="cont-button">
                  <p>Send Message</p>
                  <img src={paperplane} className="paper-b" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactsmall;
