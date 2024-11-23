import "./styles/aboutbody.css";
import gong1 from "../../assets/images/gong1.svg";
import gong2 from "../../assets/images/gong2.svg";
import gong3 from "../../assets/images/gong3.svg";

const Abouthero = () => {
  return (
    <>
      <div className="ab-main">
        {/* <div className="abb-1">
          <img src={gong1} alt="gong" className="gongs-img" />
          <p className="ab-2">About Us</p>
        </div> */}
        {/* <p className="ab-2">
          <img src={gong1} alt="gong" className="gongs-img" />
          About Us
        </p> */}
        <div className="cattt">
          <div className="ttt">
            <p className="ab-2">About Us</p>
          </div>
          <div className="rrr">
            <img src={gong1} alt="gong" className="gongs-img" />
          </div>
        </div>

        <p className="ab-3">
          It is our pleasure to introduce you to Egbe Isokan Omo Yoruba Germany
          e.V., (EIOYG), a progressive group formed solely to embrace Yoruba
          communities in Germany and envision the heroic accomplishments of our
          forefathers. Registered on November 7, 2009, in Berlin, as the EIOYG
          focuses on protecting and popularizing the Yoruba culture, the
          advancement of socio-cultural activities, and strengthening the bonds
          between its members. As a people we remain inspired by the values
          passed down to us by Oduduwa, our great ancestor from Ife Nigeria,
          student history, culture and identity of the Yoruba people while being
          open to intercultural relations.
        </p>
        <p className="ab-3">
          We are a non governmental/non profit/non political and non religious
          organization thus very focused to support the cultural orientation of
          Yoruba descendants in Germany and to foster unity among them
          particularly as well as bridge the gap between our people and other
          ethnic groups. Our mission is to foster cultural exchange and
          education so that the Yoruba culture could live on and the Yorubas and
          other cultures could come together for cultural, educational and
          charitable events for the programs of the society.
        </p>
        <div className="abb-a">
          <div className="gonggg">
            <img src={gong2} alt="gong" className="gongs-imgg" />
          </div>
        </div>
        <p className="ab-3">
          Egbe Isokan Omo Yoruba Germany e.V.— as the name implies — our
          culture, our identity, and the connection of our people to their home.
        </p>
        <div className="abb-a">
          <div className="gonggg2">
            <img src={gong3} alt="gong" className="gongs-imgg" />
          </div>
        </div>
        <a href="/about/otherbodies">
          <button className="bodies-button">View bodies in the organization</button>
        </a>
      </div>
    </>
  );
};

export default Abouthero;
