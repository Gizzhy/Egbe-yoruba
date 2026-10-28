import ".././styles/contact-small.css";
import paperplane from "../assets/icons/PaperPlaneTilt.svg";

const Contactsmall = () => {
  return (
    <>
      <div className="cont">
        <div className="cont-a">
          <div className="akk"></div>
          {/* <img src={ankara} alt="ankara" className="ankara" /> */}
          <p className="cont-w1">Contact Us</p>
          <div className="cont-form">
            <form action="/#">
              <label className="cont-w2" htmlFor="home-contact-name">
                Name
              </label>
              <input
                id="home-contact-name"
                type="text"
                name="name"
                autoComplete="name"
                className="cont-inputok"
                required
              ></input>
              {/* next */}
              <label className="cont-w2" htmlFor="home-contact-email">
                E-mail Address
              </label>
              <input
                id="home-contact-email"
                type="email"
                name="email"
                autoComplete="email"
                className="cont-inputok"
                required
              ></input>
              {/* next */}
              <label className="cont-w2" htmlFor="home-contact-message">
                Message
              </label>
              <textarea
                id="home-contact-message"
                name="message"
                className="cont-inputtok"
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
    </>
  );
};

export default Contactsmall;
