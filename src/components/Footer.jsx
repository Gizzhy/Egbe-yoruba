import ".././styles/footer.css";
import logo from ".././assets/images/logo.svg";
import location from ".././assets/icons/location.svg";
import last from ".././assets/images/last footer.svg";

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
            <img src={location} alt="location" className="foot-icon" />
            <span className="foot-oro">Apyc Secretarial Address</span>
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
            </div>
          </div>
          {/* third section */}
          <div className="footer1-1"></div>
        </div>
      </footer>
      <div className="foot-last">
        <img src={last} alt="ankara" className="foot-last-img" />
      </div>
    </>
  );
};

export default Footer;
