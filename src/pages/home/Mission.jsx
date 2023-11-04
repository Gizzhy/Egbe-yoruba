import "../../styles/mission.css";
import yoruba1 from "../../assets/images/image 3.svg";
import yoruba2 from "../../assets/images/image 4.svg";
import yoruba3 from "../../assets/images/image 6.svg";
import fabric from "../../assets/images/egyptian-1822015 1.svg";
import yoruba4 from "../../assets/images/nigerian-woman1.svg";

const Mission = () => {
  return (
    <>
      <div className="mission">
        <div className="mission1">
          <div className="mission1-1">
            <img src={yoruba4} alt="yoruba lady" className="mission-img1" />
          </div>
          <div className="mission1-2">
            <p className="mis-w">Our Mission And Goal</p>
            <div className="mis-w-a">
              <div className="mis-w-a1">
                <div className="mis-w-a1-1">
                  <img
                    src={yoruba3}
                    alt="yoruba lady"
                    className="mission-img1-1"
                  />
                </div>
                <div className="mis-w-a1-2">
                  To promote unity, friendliness and love among the Yorubas in
                  Bayern/Germany and in the Diaspora irrespective of political
                  inclination, creed or sex.
                </div>
              </div>
              {/* another */}
              <div className="mis-w-a1">
                <div className="mis-w-a1-1">
                  <img
                    src={yoruba2}
                    alt="yoruba lady"
                    className="mission-img1-1"
                  />
                </div>
                <div className="mis-w-a1-2">
                  To cherish, uphold and project the honour and dignity of
                  Yoruba culture, language and tradition in Bayern Germany and
                  the Diaspora.
                </div>
              </div>
              {/* another */}
              <div className="mis-w-a1">
                <div className="mis-w-a1-1">
                  <img
                    src={yoruba1}
                    alt="yoruba lady"
                    className="mission-img1-1"
                  />
                </div>
                <div className="mis-w-a1-2">
                  To create avenue for a social and cultural interaction among
                  Yorubas and other nationalities.
                </div>
              </div>
            </div>
            <button className="mis-button">Join Us</button>
          </div>
        </div>
        <div className="mission2">
          <img src={fabric} alt="yoruba fabric" className="fabric" />
        </div>
      </div>
    </>
  );
};

export default Mission;
