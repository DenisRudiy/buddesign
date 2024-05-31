import { useTranslation } from "react-i18next";
import "../OutsourcingMain/OutsourcingMain.scss";

const OutsourcingMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="OutsourcingMain">
        <div
          className="OutsourcingMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/OutsorcingMain.webp"})` }}
        ></div>
        <div className="OutsourcingMainData">
          <h1 className="OutsourcingMainTitle"> {t("Outsourcing")}</h1>
        </div>
      </div>
    </>
  );
};
export default OutsourcingMain;
