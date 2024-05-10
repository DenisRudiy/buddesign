import React from "react";
import Footer from "./Footer/Footer";


import Reasons from "./Reasons/Reasons";
import ProductsMain from "./Products/ProductsMain/ProductsMain";
import ProjectsOur from "./Projects/ProjectsOur/ProjectsOur";
import ProjectsMain from "./Projects/ProjectsMain/ProjectsMain";
import ProjectsSlider from "./Projects/ProjectsSlider/ProjectsSlider";

const Projects = () => {
  return (
    <>
    <div className="Main">

<ProjectsMain/>
<ProjectsOur/>
<ProjectsSlider/>


    </div>
    </>
  )
};

export default Projects;
