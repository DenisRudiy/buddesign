import React from "react";

import "../HousesMain/HousesMain.scss";
const HousesMain = () => {
  return (
    <>
      <div className="HousesMain">
        <div
          className="HousesMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/HousesMain.webp"})` }}
        ></div>
        <div className="HousesMainData">
          <h1 className="HousesMainTitle">Lorem</h1>
          <h1 className="HousesMainTitle"> Ipsum dolor sit</h1>
        </div>
      </div>
    </>
  );
};
export default HousesMain;
