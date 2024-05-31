import { useTranslation } from "react-i18next";
import "../WorkMain/WorkMain.scss";

const WorkMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="WorkMain">
        <div
          className="WorkMainBackground"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/WorksMain.webp"})`,
          }}
        ></div>
        <div className="WorkMainData">
          <h1 className="WorkMainTitle"> {t("WorkMainTitle")}</h1>
        </div>
      </div>
    </>
  );
};
export default WorkMain;
