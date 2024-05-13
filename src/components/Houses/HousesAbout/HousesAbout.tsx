import "../HousesAbout/HousesAbout.scss";

const HousesAbout = () => {
  return (
    <div className="HousesAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="HousesContainer">
        <div className="HousesContent">
          <h4 className="HousesContentSmallTitle">INFO</h4>
          <h2 className="HousesContentTitle">Наші будинки</h2>
          <p className="HousesText">
            При реалізації різноманітних проектів, наша компанія пропонує широкий спектр будівельних матеріалів
            відповідної якості та надійності. Ми гарантуємо високу якість наших продуктів та швидку поставку, що робить
            нас надійним партнером для будь-якого будівельного проекту.
          </p>
        </div>
        <div className="HousesDecoration">
          <img src={`${process.env.PUBLIC_URL + "/houses1.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default HousesAbout;
