import '../ProjectsSlider/ProjectsSlider.scss';
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Slider from "react-slick";
import Slides from './slides/slide';
const sliders = [
  {url:`${process.env.PUBLIC_URL}/projects3.png`},
  {url:`${process.env.PUBLIC_URL}/houses2.png`},
  {url:`${process.env.PUBLIC_URL}/houses3.png`},
  {url:`${process.env.PUBLIC_URL}/houses1.png`},
  {url:`${process.env.PUBLIC_URL}/projects3.png`},
  {url:`${process.env.PUBLIC_URL}/houses2.png`},
  {url:`${process.env.PUBLIC_URL}/houses3.png`},
  {url:`${process.env.PUBLIC_URL}/houses1.png`},
]
const containerStyles = {
  width:" 885px",
  height: "601px",
  margin:"0 auto",
}
const ProjectsSlider: React.FC = () => {

  return (
    <>
      <section className="page__projects-slider projects-slider">
        <div className="projects-slider__container">
          <div className="projects-slider__content">
            <div className="projects-slider__content-main projects-slider__content-main-1">
              <h2 className="projects-slider__content-title">
                Чиста гармонія між простором і функцією
              </h2>
              <p className="projects-slider__content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="slider-container slider-first">
              <div className='' style={containerStyles}>
              <Slides slides={sliders}/>
              </div>
           
          </div>
    
          </div>
        </div>



        <div className="projects-slider__container">
          <div className="projects-slider__content">
          <div className="slider-container slider-second">
              <div className='' style={containerStyles}>
              <Slides slides={sliders} />
              </div>
           
          </div>
            <div className="projects-slider__content-main projects-slider__content-main-2">
              <h2 className="projects-slider__content-title">
                Чиста гармонія між простором і функцією
              </h2>
              <p className="projects-slider__content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
    
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSlider;
