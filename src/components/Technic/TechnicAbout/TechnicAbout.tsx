import { useTranslation } from "react-i18next";
import "./TechnicAbout.scss";

const TechnicAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="TechnicAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="TechnicContainer">
        <div className="TechnicContent">
          <h4 className="TechnicContentSmallTitle">INFO</h4>
          <h2 className="TechnicContentTitle">{t("TechnicContentTitle")}</h2>
          <p className="TechnicText">{t("TechnicText")}</p>
        </div>
        <div className="TechnicDecoration">
          <img src={`${process.env.PUBLIC_URL + "/tech2.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default TechnicAbout;
