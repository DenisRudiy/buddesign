import { useTranslation } from "react-i18next";
import "../RecyclablesMain/RecyclablesMain.scss";

const RecyclablesMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="RecyclablesMain">
        <div
          className="RecyclablesMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/RecycablesMain.webp"})` }}
        ></div>
        <div className="RecyclablesMainData">
          <h1 className="RecyclablesMainTitle">{t("RecyclablesMainTitle")}</h1>
        </div>
      </div>
    </>
  );
};
export default RecyclablesMain;
