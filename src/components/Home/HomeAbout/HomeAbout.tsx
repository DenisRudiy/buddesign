import { Link } from "react-router-dom";
import "./HomeAbout.scss";
import { useTranslation } from "react-i18next";

const HomeAbout = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="MainAbout">
      <div className="MainAboutContainer">
        <div className="MainImage" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/Years.webp"})` }}>
          <div className="MainImageBlock">
            <h2
              className="MainImageNumber"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/Years.webp"})` }}
            >
              30
            </h2>
            <p className="MainImageText">{t("mainImageText")}</p>
          </div>
        </div>
        <h1 className="AboutCompany">{t("aboutCompany")}</h1>
        <p className="AboutCompanyDescription">{t("aboutCompanyDescription")}</p>
        <Link to="/buddesign/about" onClick={scrollToTop}>
          <button className="MainAboutButton">{t("mainAboutButton")}</button>
        </Link>
      </div>
      <div className="Photo">
        <img src={process.env.PUBLIC_URL + "/ForHome/HomeAboutImg.webp"} alt="" className="HomePhotoAbout" />
      </div>
    </div>
  );
};

export default HomeAbout;
