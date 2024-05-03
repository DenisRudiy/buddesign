import "../Info/Info.scss";
import React from "react";
const Info = () => {
  return (
    <div className="MainAbout">
      <div className="MainAboutContainer">
        <div className="MainImage" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/hero.jpg"})` }}>
          <div className="MainImageBlock">
            <h2 className="MainImageNumber" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/hero.jpg"})` }}>
              10
            </h2>
            <p className="MainImageText">Років досвіду</p>
          </div>
        </div>
        <h5 className="AboutUs">Про нас</h5>
        <h1 className="AboutCompany">Про нашу компанію</h1>
        <p className="AboutCompanyDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
       
      </div>
      <div className="Photo">
        <img src={process.env.PUBLIC_URL + "/s2.jpg"} alt="" />
      </div>
    </div>
  );
};

export default Info;
