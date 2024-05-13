import "../ProjectsMain/ProjectsMain.scss";

const ProjectsMain = () => {
  return (
    <>
      <div className="ProjectsMain">
        <div
          className="ProjectsMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/ProjectsMain.webp"})` }}
        ></div>
        <div className="ProjectsMainData">
          <h1 className="ProjectsMainTitle">Проекти</h1>
        </div>
      </div>
    </>
  );
};
export default ProjectsMain;
