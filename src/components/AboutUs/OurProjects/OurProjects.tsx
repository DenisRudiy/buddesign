import { Link } from "react-router-dom";
import "../OurProjects/OurProjects.scss";
import { useTranslation } from "react-i18next";

const OurProjects = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="OurProjects">
      <div className="OurProjectsTitle">{t("OurProjectsTitle")}</div>
      <div className="OurProjectsContainer">
        <div className="OurProjectsItem">
          <div className="OurProjectsItemImg">
            <img src={process.env.PUBLIC_URL + "/ourProjects3.png"} alt="decor" />
          </div>
          <h4 className="OurProjectsItemSmallTitle">
            <span>06 august</span> / Architecture
          </h4>
          <h2 className="OurProjectsItemTitle">Lorem ipusm dolor sit amet, consectetur</h2>
        </div>
        <div className="OurProjectsItem">
          <div className="OurProjectsItemImg">
            <img src={process.env.PUBLIC_URL + "/ourProjects3.png"} alt="decor" />
          </div>
          <h4 className="OurProjectsItemSmallTitle">
            <span>06 august</span> / Architecture
          </h4>
          <h2 className="OurProjectsItemTitle">Lorem ipusm dolor sit amet, consectetur</h2>
        </div>
      </div>
      <div className="OurProjectsButtonContainer">
        <Link to="/buddesign/projects">
          <button className="OurProjectsButton" onClick={scrollToTop}>
            <p className="OurProjectsButtonText">{t("lookMore")}</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurProjects;
