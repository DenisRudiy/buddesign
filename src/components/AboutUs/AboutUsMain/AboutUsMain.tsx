import { useTranslation } from "react-i18next";
import "../AboutUsMain/AboutUsMain.scss";

const AboutUsMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="AboutUsMain">
        <div
          className="AboutUsMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/AboutMain.webp"})` }}
        ></div>
        <div className="AboutUsMainData">
          <h1 className="AboutUsMainTitle">{t("AboutUsMainTitle")}</h1>
        </div>
      </div>
    </>
  );
};
export default AboutUsMain;
