import React from "react";

import '../OurProjects/OurProjects.scss'
const OurProjects = () =>{
    return(
        <>
        <section className="page__our-projects our-projects">
            <div className="our-projects__container">
              <div className="our-projects__title">НАШІ ПРОЄКТИ</div>
              <div className="our-projects__items-container">
                <div className="our-projects__items">
                

                
                  <div className="our-projects__item our-projects-item">
                    <div className="our-projects-item__img">
                        <img src={process.env.PUBLIC_URL + "/ourProjects3.png"} alt="decor"/>
                    </div>
                      <h4 className="our-projects-item__subtitle"> <span>06 august</span> / Architecture</h4>
                      <h2 className="our-projects-item__title">Lorem ipusm dolor sit amet, consectetur</h2>
                  </div>
                  <div className="our-projects__item our-projects-item">
                    <div className="our-projects-item__img">
                      <img src={process.env.PUBLIC_URL + "/ourProjects3.png"} alt="decor"/>
                    </div>
                    <h4 className="our-projects-item__subtitle"> <span>06 august</span> / Architecture</h4>
                    <h2 className="our-projects-item__title">Lorem ipusm dolor sit amet, consectetur</h2>
                  </div>
                </div>
              </div>
              <div className="our-projects__button">
                <button>ДИВИТИСЯ БІЛЬШЕ</button>
              </div>
            </div>
          </section>
        </>
    )
}

export default OurProjects