import "../ProjectsSlider/ProjectsSlider.scss";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const ProjectsSlider: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (className: any) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <div className="ProjectsSlider">
      <div className="ProjectsSliderText">
        <h1 className="ProjectsSliderTitle">Чиста гармонія між простором і функцією</h1>
        <p className="ProjectsSliderDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <div className="ProjectsSliderBody">
        <div className="ProjectsSliderBackground"></div>
        <div className="ProjectsSliderBackgroundSmall"></div>
        <Swiper pagination={pagination} modules={[Pagination]} resistanceRatio={0} className="ProjectsSliderSwiper">
          <SwiperSlide className="ProjectsSliderSlide">
            <img src={process.env.PUBLIC_URL + "/projects3.png"} alt="" className="ProjectsSliderImg" />
          </SwiperSlide>
          <SwiperSlide className="ProjectsSliderSlide">
            <img src={process.env.PUBLIC_URL + "/houses2.png"} alt="" className="ProjectsSliderImg" />
          </SwiperSlide>
          <SwiperSlide className="ProjectsSliderSlide">
            <img src={process.env.PUBLIC_URL + "/houses3.png"} alt="" className="ProjectsSliderImg" />
          </SwiperSlide>
          <SwiperSlide className="ProjectsSliderSlide">
            <img src={process.env.PUBLIC_URL + "/houses1.png"} alt="" className="ProjectsSliderImg" />
          </SwiperSlide>
          <SwiperSlide className="ProjectsSliderSlide">
            <img src={process.env.PUBLIC_URL + "/projects3.png"} alt="" className="ProjectsSliderImg" />
          </SwiperSlide>
          <SwiperSlide className="ProjectsSliderSlide">
            <img src={process.env.PUBLIC_URL + "/houses2.png"} alt="" className="ProjectsSliderImg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectsSlider;
