import "../RecyclablesAbout/RecyclablesAbout.scss";

const RecyclablesAbout = () => {
  return (
    <div className="RecyclablesAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <h4 className="RecyclablesTitle">Вторсировина</h4>
      <div className="RecyclablesContainer">
        <div className="RecyclablesContent">
          <h4 className="RecyclablesContentSmallTitle">INFO</h4>
          <h2 className="RecyclablesContentTitle">Вторсировина</h2>
          <p className="RecyclablesText">
            Наша компанія спеціалізується на постачанні різноманітної вторсировини для виробництва та переробки. Наші
            матеріали відповідають всім стандартам якості та екологічним вимогам, що робить нас надійним постачальником
            для вашого бізнесу.
          </p>
          <button className="RecyclablesButton">Про нас</button>
        </div>
        <div className="RecyclablesDecoration">
          <img src={`${process.env.PUBLIC_URL + "/recycebles2.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default RecyclablesAbout;
