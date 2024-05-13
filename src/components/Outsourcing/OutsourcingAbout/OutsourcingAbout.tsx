import "../OutsourcingAbout/OutsourcingAbout.scss";

const OutsourcingAbout = () => {
  return (
    <div className="OutsourcingAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="OutsourcingContainer">
        <div className="OutsourcingContent">
          <h4 className="OutsourcingContentSmallTitle">INFO</h4>
          <h2 className="OutsourcingContentTitle">Аутсорсинг та Аутстафінг</h2>
          <p className="OutsourcingText">
            Звертаючись до нас, ви платите тільки за відпрацьований час працівників. Ми надамо вам ту кількість
            працівників, в яких є необхідність. Саме так, вирішується проблема пікового навантаження і простою персоналу
          </p>
        </div>
        <div className="OutsourcingDecoration">
          <img src={`${process.env.PUBLIC_URL + "/outsourcingAbout.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default OutsourcingAbout;
