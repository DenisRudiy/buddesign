import { useTranslation } from "react-i18next";
import "../ProjectsOur/ProjectsOur.scss";

const ProjectsOur = () => {
  const { t } = useTranslation();
  return (
    <div className="ProjectsOur">
      <h2 className="ProjectsOurTitle">{t("ProjectsOurTitle")}</h2>
      <div className="ProjectsOurContent1">
        <div className="ProjectsOurContentText">
          <h2 className="ProjectsOurContentTitle">{t("ProjectsOurContentTitle1")}</h2>
          <p className="ProjectsOurText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="ProjectsOurContentImg">
          <img src={`${process.env.PUBLIC_URL + "/projects2.png"}`} alt="decor" />
        </div>
      </div>
      <div className="ProjectsOurContent2">
        <div className="ProjectsOurContentImg">
          <img src={`${process.env.PUBLIC_URL + "/projects2.png"}`} alt="decor" />
        </div>
        <div className="ProjectsOurContentText">
          <h2 className="ProjectsOurContentTitle">{t("ProjectsOurContentTitle2")}</h2>
          <p className="ProjectsOurText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsOur;
