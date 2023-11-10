import ".././styles/footer.css";
import logo from ".././assets/images/logo.svg";
import location from ".././assets/icons/location.svg";
import call from ".././assets/icons/phone.svg";
import mail from ".././assets/icons/mail.svg";
import x from ".././assets/icons/x.svg";

import arrow from ".././assets/images/button arrow.svg";
import fb from ".././assets/icons/ffb.svg";
import insta from ".././assets/icons/iin.svg";
import yt from ".././assets/icons/youu.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer1">
          <div className="footer1-1">
            <img src={logo} alt="logo" className="foot-logo" />
            <p className="foot-w">
              We are non-governmental, non-profit and non- political
              organization based here in Munich. We are community of Nigerian
              immigrants here in the southern part of this country of which we
              made Bayern, Germany as our second home.
            </p>
            <div className="foot-way">
              <img src={location} alt="location" className="foot-icon" />
              <p className="foot-oro">Apyc Secretarial Address</p>
            </div>
          </div>
          {/* second section */}
          <div className="footer1-2">
            <div className="footer1-2-1">
              <a href="/">
                <p className="foot-links">Home</p>
              </a>
              <a href="/about">
                <p className="foot-links">About Us</p>
              </a>
              <a href="/">
                <p className="foot-links">Events</p>
              </a>
              <a href="/">
                <p className="foot-links">Gallery</p>
              </a>
            </div>
            <div className="footer1-2-2">
              <a href="/">
                <p className="foot-links">Contact Us</p>
              </a>
              <div className="foot-way">
                <img src={call} alt="location" className="foot-icon" />
                <p className="foot-oro">+49 176 323 98400</p>
              </div>
              <br />
              <div className="foot-way">
                <img src={mail} alt="location" className="foot-icon" />
                <p className="foot-oro">secretary@isokanyoruba.com</p>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="footer1-1">
            <p className="foot-oo">Newsletter</p>
            <p className="foot-o">
              Provide Your E-mail Address To Subscribe To Our News Letters
            </p>
            <form action="/#" className="foot-form">
              <input
                type="email"
                name="email"
                placeholder="Enter Your E-mail Address"
                required
              ></input>
              <button className="foot-b">
                <img src={arrow} alt="submit" className="foot-bb" />
              </button>
            </form>
            <div className="foot-socials">
              <img src={x} alt="submit" className="foot-bbb" />
              <img src={fb} alt="submit" className="foot-bbb" />
              <img src={insta} alt="submit" className="foot-bbb" />
              <img src={yt} alt="submit" className="foot-bbb" />
            </div>
          </div>
        </div>
      </footer>
      <div className="foot-last">
        {/* <img src={last} alt="ankara" className="foot-last-img" /> */}
      </div>
    </>
  );
};

export default Footer;
