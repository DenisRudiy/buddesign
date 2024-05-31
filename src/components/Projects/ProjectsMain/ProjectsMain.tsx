import { useTranslation } from "react-i18next";
import "../ProjectsMain/ProjectsMain.scss";

const ProjectsMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="ProjectsMain">
        <div
          className="ProjectsMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/ProjectsMain.webp"})` }}
        ></div>
        <div className="ProjectsMainData">
          <h1 className="ProjectsMainTitle">{t("ProjectsMainTitle")}</h1>
        </div>
      </div>
    </>
  );
};
export default ProjectsMain;
