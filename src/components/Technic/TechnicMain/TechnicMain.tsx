import { useTranslation } from "react-i18next";
import "../TechnicMain/TechnicMain.scss";
const TechnicMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="TechnicMain">
        <div
          className="TechnicMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/TechnicMain.webp"})` }}
        ></div>
        <div className="TechnicMainData">
          <h1 className="TechnicMainTitle">{t("TechnicMainTitle")}</h1>
        </div>
      </div>
    </>
  );
};
export default TechnicMain;
