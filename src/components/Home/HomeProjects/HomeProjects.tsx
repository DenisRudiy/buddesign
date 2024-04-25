import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./HomeProjects.scss";
import { useRef } from "react";
import ArrowRight from "../../../icons/ArrowRight";
import ArrowLeft from "../../../icons/ArrowLeft";

const HomeProjects = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="HomeProjects" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <h1 className="HomeProjectsTitle">Наші проєкти</h1>
      <Swiper
        modules={[Navigation]}
        speed={400}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        className="HomeProjectSlider"
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.img})` }}
              className="HomeProjectSlide"
            ></div>
            <div className="HomeProjectSlideData">
              <h1 className="HomeProjectSmallTitle">Наш проєкт</h1>
              <h1 className="HomeProjectTitle">{item.name}</h1>
              <p className="HomeProjectDescription">{item.description}</p>
              <button className="HomeProjectButton">Дивитися більше</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="HomeProjectsNavigation">
        <button ref={navigationPrevRef} className="HomeProjectNavButton">
          <ArrowLeft></ArrowLeft>
        </button>
        <button ref={navigationNextRef} className="HomeProjectNavButton">
          <ArrowRight></ArrowRight>
        </button>
      </div>
    </div>
  );
};

export default HomeProjects;

const sliderData = [
  {
    id: 0,
    img: "1.jpg",
    name: "Lorem House",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis rerum rem blanditiis amet, a odio iste placeat unde! Perspiciatis aut incidunt ab officia cum autem impedit perferendis ducimus iusto.",
  },
  {
    id: 1,
    img: "2.jpg",
    name: "Lorem House",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis rerum rem blanditiis amet, a odio iste placeat unde! Perspiciatis aut incidunt ab officia cum autem impedit perferendis ducimus iusto.",
  },
  {
    id: 2,
    img: "3.jpg",
    name: "Lorem House",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis rerum rem blanditiis amet, a odio iste placeat unde! Perspiciatis aut incidunt ab officia cum autem impedit perferendis ducimus iusto.",
  },
];
