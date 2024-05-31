import { useTranslation } from "react-i18next";
import "../AboutUsYears/AboutUsYears.scss";

const AboutUsYears = () => {
  const { t } = useTranslation();
  return (
    <div className="AboutUsYears">
      <div className="AboutUsYearsBody">
        <div className="AboutUsYearsItem">
          <div
            className="AboutUsYearsItemImgBackground"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/aboutus2.png"})` }}
          ></div>
          <div className="AboutUsYearsItemData">
            <h1 className="AboutUsYearsItemNumber">30+</h1>
            <div className="AboutUsYearsItemText">
              <p className="AboutUsYearsItemDescription">{t("AboutUsYearsItemDescription")}</p>
              <h3 className="AboutUsYearsItemTitle">{t("AboutUsYearsItemTitle")}</h3>
            </div>
          </div>
        </div>
        <div className="AboutUsYearsItem">
          <div
            className="AboutUsYearsItemImgBackground"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/aboutus2.png"})` }}
          ></div>
          <div className="AboutUsYearsItemData">
            <h1 className="AboutUsYearsItemNumber">30+</h1>
            <div className="AboutUsYearsItemText">
              <p className="AboutUsYearsItemDescription">{t("AboutUsYearsItemDescription")}</p>
              <h3 className="AboutUsYearsItemTitle">{t("AboutUsYearsItemTitle")}</h3>
            </div>
          </div>
        </div>
        <div className="AboutUsYearsItem">
          <div
            className="AboutUsYearsItemImgBackground"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/aboutus2.png"})` }}
          ></div>
          <div className="AboutUsYearsItemData">
            <h1 className="AboutUsYearsItemNumber">30+</h1>
            <div className="AboutUsYearsItemText">
              <p className="AboutUsYearsItemDescription">{t("AboutUsYearsItemDescription")}</p>
              <h3 className="AboutUsYearsItemTitle">{t("AboutUsYearsItemTitle")}</h3>
            </div>
          </div>
        </div>
        <div className="AboutUsYearsItem">
          <div
            className="AboutUsYearsItemImgBackground"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/aboutus2.png"})` }}
          ></div>
          <div className="AboutUsYearsItemData">
            <h1 className="AboutUsYearsItemNumber">30+</h1>
            <div className="AboutUsYearsItemText">
              <p className="AboutUsYearsItemDescription">{t("AboutUsYearsItemDescription")}</p>
              <h3 className="AboutUsYearsItemTitle">{t("AboutUsYearsItemTitle")}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsYears;
