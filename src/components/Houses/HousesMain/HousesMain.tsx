import { useTranslation } from "react-i18next";
import "../HousesMain/HousesMain.scss";

const HousesMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="HousesMain">
        <div
          className="HousesMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/HousesMain.webp"})` }}
        ></div>
        <div className="HousesMainData">
          <h1 className="HousesMainTitle"> {t("HousesMainTitle")}</h1>
        </div>
      </div>
    </>
  );
};
export default HousesMain;
