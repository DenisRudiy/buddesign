import React from "react";
import Footer from "./Footer/Footer";
import TechnicMain from "./Technic/TechnicMain/TechnicMain";

import "./Technic/TechnicMain/TechnicMain.scss";
import TechnicCards from "./Technic/TechnicCards/TechnicCards";
import Reasons from "./Reasons/Reasons";
const Technique = () => {
  return (
    <>
      <div className="Main">
        <TechnicMain />
        <TechnicCards />
        <Reasons />
        <Footer></Footer>
      </div>
    </>
  );
};

export default Technique;
