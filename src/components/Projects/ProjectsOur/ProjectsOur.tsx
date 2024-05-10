import React from "react";

import '../ProjectsOur/ProjectsOur.scss'


const ProjectsOur = () =>{
    return(
        <>
        <section className="page__projects">
        <h2 className="main-title__projects title-big">НАШІ ПРОЄКТИ</h2>

        <div className="projects__content projects-content-1">
          <div className="projects-content-text projects-content-text-1">
            <h2 className="projects-content__title projects-content__title_1">
              Сучасний мінімалістичний зовнішній дизайн
            </h2>
            <p className="projects-content__text  projects-content__text_1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="projects-content__img">
            <img src={`${process.env.PUBLIC_URL + "/projects2.png"}`} alt="decor" />
          </div>
        </div>

        <div className="projects__content projects-content-2">
          <div className="projects-content__img">
            <img src={`${process.env.PUBLIC_URL + "/projects2.png"}`} alt="decor" />
          </div>
          <div className="projects-content-text">
            <h2 className="projects-content__title">Чиста гармонія між простором і функцією</h2>
            <p className="projects-content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>
        </>
    )
}

export default ProjectsOur