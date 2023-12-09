import "../../styles/proverbs.css";
import React, { useState, useEffect } from "react";
// import yoruba1 from "../../assets/images/image 3.svg";

// import React, { useState, useEffect } from "react";

const Proverbs = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDiv((prevActiveDiv) => (prevActiveDiv % 6) + 1);
    }, 7000); // Change the interval as needed (here, it transitions every 2000 milliseconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      <div className="prov">
        <div className="prov1"></div>
        <div className="prov2">
          <div className={`myDiv ${activeDiv === 1 ? "show" : "hide"}`}>
            <p className="prov-oro">
              Kò sí ęni tí ó ma gùn ęşin tí kò ní ju ìpàkó. Bí kò fę ju ìpàkó,
              ęşin tí ó ngùn á ję kojū.
            </p>
            <p className="prov-oro2">
              - our status in life dictates your attitude towards your peers
            </p>
          </div>
          <div className={`myDivv ${activeDiv === 2 ? "show" : "hide"}`}>
            <p className="prov-oro">Ilé ọba tójó ẹwà ló bùsi</p>
            <p className="prov-oro2">- Every cloud has a silver lining</p>
          </div>
          <div className={`myDivvv ${activeDiv === 3 ? "show" : "hide"}`}>
            <p className="prov-oro">Ijo je o we yon i</p>
            <p className="prov-oro2">- There is joy in cooperative effort</p>
          </div>
          <div className={`myDivvv ${activeDiv === 4 ? "show" : "hide"}`}>
            <p className="prov-oro">Onen p’ aoko s’ oja oun oja p’ aoko si</p>
            <p className="prov-oro2">- Anyone who gives will receive.</p>
          </div>{" "}
          <div className={`myDivvv ${activeDiv === 5 ? "show" : "hide"}`}>
            <p className="prov-oro">Se s’ale oun e je Seike i</p>
            <p className="prov-oro2">
              - Benevolence leaves a lasting impression
            </p>
          </div>{" "}
          <div className={`myDivvv ${activeDiv === 6 ? "show" : "hide"}`}>
            <p className="prov-oro">
              Ubee eese l’use, onen yo gbe jake oun o se l’use i
            </p>
            <p className="prov-oro2">
              - He who perseveres to the end will be rewarded
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proverbs;
