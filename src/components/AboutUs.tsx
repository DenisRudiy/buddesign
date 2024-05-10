import React from "react";
import Footer from "./Footer/Footer";


import './Technic/TechnicMain/TechnicMain.scss'

import Reasons from "./Reasons/Reasons";
import AboutUsMain from "./AboutUs/AboutUsMain/AboutUsMain";
import Info from "./AboutUs/Info/Info";
import AboutUsYears from "./AboutUs/AboutUsYears/AboutUsYears";
import Adventages from "./AboutUs/Adventages/Adventages";
import OurProjects from "./AboutUs/OurProjects/OurProjects";
import Vacancii from "./AboutUs/Vacancii/Vacancii";

const AboutUs = () => {
  return (
    <> 
    <div className="Main">
<AboutUsMain/>
<Info/>
<AboutUsYears/>
<Adventages/>
<OurProjects/>
<Vacancii/>
 
    </div>
    </>
  )
};

export default AboutUs;
