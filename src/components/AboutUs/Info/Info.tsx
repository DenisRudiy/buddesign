import { useTranslation } from "react-i18next";
import "../Info/Info.scss";

const Info = () => {
  const { t } = useTranslation();
  return (
    <div className="InfoMainAbout">
      <div className="InfoMainAboutContainer">
        <div className="InfoMainImage" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/Years.webp"})` }}>
          <div className="InfoMainImageBlock">
            <h2
              className="InfoMainImageNumber"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/Years.webp"})` }}
            >
              30
            </h2>
            <p className="InfoMainImageText">{t("mainImageText")}</p>
          </div>
        </div>
        <h5 className="InfoAboutUs">{t("InfoAboutUs")}</h5>
        <h1 className="InfoAboutCompany">{t("InfoAboutCompany")}</h1>
        <p className="InfoAboutCompanyDescription">{t("InfoAboutCompanyDescription")}</p>
      </div>
      <div className="InfoPhoto">
        <img src={process.env.PUBLIC_URL + "/s2.jpg"} alt="" />
      </div>
    </div>
  );
};

export default Info;
