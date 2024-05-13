import React from "react";
import "../TechnicMain/TechnicMain.scss";
const TechnicMain = () => {
  return (
    <>
      <div className="TechnicMain">
        <div
          className="TechnicMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/TechnicMain.webp"})` }}
        ></div>
        <div className="TechnicMainData">
          <h1 className="TechnicMainTitle">Lorem</h1>
          <h1 className="TechnicMainTitle"> Ipsum dolor sit</h1>
        </div>
      </div>
    </>
  );
};
export default TechnicMain;
