import { useTranslation } from "react-i18next";
import "../OutsourcingAbout/OutsourcingAbout.scss";

const OutsourcingAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="OutsourcingAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="OutsourcingContainer">
        <div className="OutsourcingContent">
          <h4 className="OutsourcingContentSmallTitle">INFO</h4>
          <h2 className="OutsourcingContentTitle">{t("OutsourcingContentTitle")}</h2>
          <p className="OutsourcingText">{t("OutsourcingText")}</p>
        </div>
        <div className="OutsourcingDecoration">
          <img src={`${process.env.PUBLIC_URL + "/outsourcingAbout.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default OutsourcingAbout;
