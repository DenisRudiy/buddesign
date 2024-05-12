import React from "react";

import "../ProjectsMain/ProjectsMain.scss";
const ProjectsMain = () => {
  return (
    <>
      <div className="ProjectsMain">
        <div
          className="ProjectsMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/projects1.png"})` }}
        ></div>
        <div className="ProjectsMainData">
          <h1 className="ProjectsMainTitle">Lorem</h1>
          <h1 className="ProjectsMainTitle"> Ipsum dolor sit</h1>
        </div>
      </div>
    </>
  );
};
export default ProjectsMain;
