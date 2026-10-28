import map from "../../assets/images/map.svg";
import "./styles/contactcon.css";
import paperplane from "../../assets/icons/PaperPlaneTilt.svg";

const Contactcon = () => {
  return (
    <>
      <div className="concon1">
        <div className="concon2">
          <div className="concon2-1">
            <p className="concon-w">
              you want to make enquiries or know more about us
            </p>
            <img
              src={map}
              alt="Map of the EIOYG location"
              className="con-map"
              loading="lazy"
            />
          </div>
          {/* contact area */}
          <div className="concon2-2">
            <div className="contc">
              <div className="cont-ac">
                <div className="akkc"></div>
                <p className="cont-w1">Contact Us</p>
                <div className="cont-form">
                  <form action="/#">
                    <label className="cont-w2" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      className="cont-inputop"
                      required
                    ></input>
                    {/* next */}
                    <label className="cont-w2" htmlFor="contact-email">
                      E-mail Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="cont-inputop"
                      required
                    ></input>
                    {/* next */}
                    <label className="cont-w2" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="cont-inputtop"
                      required
                    ></textarea>
                    <div className="conbut-a">
                      <button className="cont-button">
                        <p>Send Message</p>
                        <img src={paperplane} className="paper-b" alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactcon;
