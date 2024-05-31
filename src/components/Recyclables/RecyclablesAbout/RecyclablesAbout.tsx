import { useTranslation } from "react-i18next";
import "../RecyclablesAbout/RecyclablesAbout.scss";

const RecyclablesAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="RecyclablesAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="RecyclablesContainer">
        <div className="RecyclablesContent">
          <h4 className="RecyclablesContentSmallTitle">INFO</h4>
          <h2 className="RecyclablesContentTitle">{t("RecyclablesContentTitle")}</h2>
          <p className="RecyclablesText">{t("RecyclablesText")}</p>
        </div>
        <div className="RecyclablesDecoration">
          <img src={`${process.env.PUBLIC_URL + "/recycebles2.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default RecyclablesAbout;
