import React from "react";
import "../OutsourcingAbout/OutsourcingAbout.scss";
const OutsourcingAbout = () => {
  return (
    <div className="OutsourcingAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <h4 className="OutsourcingTitle">Аутсорсинг</h4>
      <div className="OutsourcingContainer">
        <div className="OutsourcingContent">
          <h4 className="OutsourcingContentSmallTitle">INFO</h4>
          <h2 className="OutsourcingContentTitle">Аутсорсинг та Аутстафінг</h2>
          <p className="OutsourcingText">
            Звертаючись до нас, Ви платите тільки за відпрацьований час працівників! Ми надаємо Вам ту кількість
            працівників, в яких є необхідність. Таким чином вирішується проблема пікового завантаження і простою
            персоналу.
          </p>
          <button className="OutsourcingButton">Про нас</button>
        </div>
        <div className="OutsourcingDecoration">
          <img src={`${process.env.PUBLIC_URL + "/outsourcingAbout.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default OutsourcingAbout;
