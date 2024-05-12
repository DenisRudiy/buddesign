import "../ProjectsOur/ProjectsOur.scss";

const ProjectsOur = () => {
  return (
    <div className="ProjectsOur">
      <h2 className="ProjectsOurTitle">НАШІ ПРОЄКТИ</h2>
      <div className="ProjectsOurContent1">
        <div className="ProjectsOurContentText">
          <h2 className="ProjectsOurContentTitle">Сучасний мінімалістичний зовнішній дизайн</h2>
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
          <h2 className="ProjectsOurContentTitle">Чиста гармонія між простором і функцією</h2>
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
