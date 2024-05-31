import { useTranslation } from "react-i18next";
import "./HomeMain.scss";

const HomeMain = () => {
  const { t } = useTranslation();

  return (
    <div className="HomeMain">
      <div
        className="HomeMainBackground"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/HomeMain.webp"})` }}
      ></div>
      <div className="HomeMainData">
        <h1 className="HomeMainTitle">{t("homeMainTitle")}</h1>
        <button className="HomeMainButton">{t("honeMainButton")}</button>
      </div>
    </div>
  );
};

export default HomeMain;
