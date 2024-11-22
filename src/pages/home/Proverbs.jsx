import "../../styles/proverbs.css";
import React, { useState, useEffect } from "react";
// import yoruba1 from "../../assets/images/image 3.svg";

// import React, { useState, useEffect } from "react";

const Proverbs = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDiv((prevActiveDiv) => (prevActiveDiv % 12) + 1);
    }, 9000); // Change the interval as needed (here, it transitions every 2000 milliseconds)

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
            <p className="prov-oro">Àìsí ọgbọ́n l'á ńdá ọmọ ọlọ́mọ l'ẹ́ṣé.</p>
            <p className="prov-oro2">
              (It is lack of wisdom that makes one blame another's child
              wrongly.)
            </p>
            <p className="prov-oro2">- Be wise and fair in judgment.</p>
          </div>
          <div className={`myDivvv ${activeDiv === 3 ? "show" : "hide"}`}>
            <p className="prov-oro">Ajàká ni wọ́n ńkó ilé ọlà tó ọ̀rọ̀ bàjẹ́.</p>
            <p className="prov-oro2">
              (It takes the collective to rebuild a damaged house.)
            </p>
            <p className="prov-oro2">
              - Community and unity are essential to solving problems.
            </p>
          </div>
          <div className={`myDivvv ${activeDiv === 4 ? "show" : "hide"}`}>
            <p className="prov-oro">Ẹnìkan kì í jẹ́ kó pọ̀.</p>
            <p className="prov-oro2">
              (One person cannot eat all and expect it to last.)
            </p>
            <p className="prov-oro2">
              - Sharing is necessary for abundance and sustainability.
            </p>
          </div>{" "}
          <div className={`myDivvv ${activeDiv === 5 ? "show" : "hide"}`}>
            <p className="prov-oro">Ohun tí a bá fi ọwọ́ ṣe ni ọwọ́ ńgbé.</p>
            <p className="prov-oro2">
              (Whatever is done with one's hands is what will uplift one.)
            </p>
            <p className="prov-oro2">- Hard work and effort lead to success.</p>
          </div>
          <div className={`myDivvv ${activeDiv === 6 ? "show" : "hide"}`}>
            <p className="prov-oro">Ẹní tó bá ní sùúrù ní yóò jẹ iyìn.</p>
            <p className="prov-oro2">(The patient person will be praised.)</p>
            <p className="prov-oro2">
              - Patience is a virtue that brings reward and honor.
            </p>
          </div>
          <div className={`myDivvv ${activeDiv === 7 ? "show" : "hide"}`}>
            <p className="prov-oro">A kì í fi ìmọ̀ ṣòfò.</p>
            <p className="prov-oro2">(We do not waste wisdom.)</p>
            <p className="prov-oro2">
              - Wisdom should be used judiciously and not squandered.
            </p>
          </div>
          <div className={`myDivvv ${activeDiv === 8 ? "show" : "hide"}`}>
            <p className="prov-oro">Alápatà ò ní jẹ ẹran lóòjọ́ rẹ̀.</p>
            <p className="prov-oro2">
              (The butcher will not eat meat all his days.)
            </p>
            <p className="prov-oro2">
              - A person’s effort may not always yield personal gain; balance is
              key.
            </p>
          </div>
          <div className={`myDivvv ${activeDiv === 9 ? "show" : "hide"}`}>
            <p className="prov-oro">Ìgbà gbogbo ni t'ẹnìkan.</p>
            <p className="prov-oro2">(Every time belongs to someone.)</p>
            <p className="prov-oro2">
              - Everyone has their moment of opportunity or success; life is
              cyclical.
            </p>
          </div>
          <div className={`myDivvv ${activeDiv === 10 ? "show" : "hide"}`}>
            <p className="prov-oro">Kìí ṣe gbogbo òkúta tó ńlá ló ńlá.</p>
            <p className="prov-oro2">(Not all large stones are heavy.)</p>
            <p className="prov-oro2">
              - Things are not always what they seem; don’t judge by
              appearances.
            </p>
          </div>
          <div className={`myDivvv ${activeDiv === 11 ? "show" : "hide"}`}>
            <p className="prov-oro">Ọ̀rọ̀ ní ńdá s'ẹ́gbẹ́.</p>
            <p className="prov-oro2">(Words are what create enemies.)</p>
            <p className="prov-oro2">
              - Be mindful of what you say, as words can create conflicts.
            </p>
          </div>
          <div className={`myDivvv ${activeDiv === 12 ? "show" : "hide"}`}>
            <p className="prov-oro">Ẹnu là ńfì ńsè wà, a kì í f'ẹnu ṣ'àjẹ.</p>
            <p className="prov-oro2">
              (The mouth is for speaking, not for gossiping.)
            </p>
            <p className="prov-oro2">
              - Use your words wisely and not for harmful purposes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proverbs;
