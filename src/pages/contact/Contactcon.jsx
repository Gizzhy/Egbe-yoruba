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
            <img src={map} alt="map" className="con-map" />
          </div>
          {/* contact area */}
          <div className="concon2-2">
            <div className="contc">
              <div className="cont-ac">
                <div className="akkc"></div>
                <p className="cont-w1">Contact Us</p>
                <div className="cont-form">
                  <form action="/#">
                    <p className="cont-w2">Name</p>
                    <input
                      type="text"
                      name="name"
                      className="cont-input"
                      required
                    ></input>
                    {/* next */}
                    <p className="cont-w2">E-mail Address</p>
                    <input
                      type="text"
                      name="name"
                      className="cont-input"
                      required
                    ></input>
                    {/* next */}
                    <p className="cont-w2">Message</p>
                    <input
                      type="text"
                      name="name"
                      className="cont-inputt"
                      required
                    ></input>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactcon;
