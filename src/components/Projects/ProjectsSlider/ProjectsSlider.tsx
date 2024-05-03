import '../ProjectsSlider/ProjectsSlider.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const ProjectsSlider: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function(index: number, className: string) {
      return `<span class="${className}"></span>`;
    },
  };

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
  
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slider-project-slide">
                  <img className='slider-project-slide-img' src={`${process.env.PUBLIC_URL}/projects3.png`} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-project-slide">
                  <img className='slider-project-slide-img' src={`${process.env.PUBLIC_URL}/projects3.png`} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-project-slide">
                  <img className='slider-project-slide-img' src={`${process.env.PUBLIC_URL}/projects3.png`} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-project-slide">
                  <img className='slider-project-slide-img' src={`${process.env.PUBLIC_URL}/projects3.png`} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-project-slide">
                  <img className='slider-project-slide-img' src={`${process.env.PUBLIC_URL}/projects3.png`} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-project-slide">
                  <img className='slider-project-slide-img' src={`${process.env.PUBLIC_URL}/projects3.png`} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-project-slide">
                  <img className='slider-project-slide-img' src={`${process.env.PUBLIC_URL}/projects3.png`} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-project-slide">
                  <img className='slider-project-slide-img' src={`${process.env.PUBLIC_URL}/projects3.png`} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-project-slide">
                  <img className='slider-project-slide-img' src={`${process.env.PUBLIC_URL}/projects3.png`} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSlider;
