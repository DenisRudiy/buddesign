import { useTranslation } from "react-i18next";
import "../HousesAbout/HousesAbout.scss";

const HousesAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="HousesAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="HousesContainer">
        <div className="HousesContent">
          <h4 className="HousesContentSmallTitle">INFO</h4>
          <h2 className="HousesContentTitle">{t("HousesContentTitle")}</h2>
          <p className="HousesText">{t("HousesText")}</p>
        </div>
        <div className="HousesDecoration">
          <img src={`${process.env.PUBLIC_URL + "/housesAbout.webp"}`} alt="decor" className="HousesAboutImage" />
        </div>
      </div>
    </div>
  );
};

export default HousesAbout;
