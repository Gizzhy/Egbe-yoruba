import "../../styles/header.css";

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
      </div>
    </>
  );
};

export default Header;
