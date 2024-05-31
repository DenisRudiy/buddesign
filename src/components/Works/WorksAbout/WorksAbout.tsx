import { useTranslation } from "react-i18next";
import "../WorksAbout/WorksAbout.scss";
const WorksAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="WorksAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="WorksContainer">
        <div className="WorksContent">
          <h4 className="WorksContentSmallTitle">INFO</h4>
          <h2 className="WorksContentTitle">{t("Works")}</h2>
          <p className="WorksText">
            {t("WorksText")}
            <p>{t("WorksTextList1")}</p>
            <p>{t("WorksTextList2")}</p>
            <p>{t("WorksTextList3")}</p>
            <p>{t("WorksTextList4")}</p>
          </p>
        </div>
        <div className="WorksDecoration">
          <img src={`${process.env.PUBLIC_URL + "/works3.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};
export default WorksAbout;
