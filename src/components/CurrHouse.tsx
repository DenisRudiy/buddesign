import { useEffect, useState } from "react";
import HousesMain from "./Houses/HousesMain/HousesMain";
import "../styles/CurrentHouse.scss";
import "swiper/css";
import db from "../data/db.json";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function CurrHouseSwiper({ imgOutside = [] }: any) {
  return (
    <Swiper
      speed={400}
      resistanceRatio={0}
      className="CurrHouseSlider"
      grabCursor={true}
      lazyPreloadPrevNext={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
    >
      {imgOutside.map((item: any, index: any) => (
        <SwiperSlide key={index}>
          <img src={`${process.env.PUBLIC_URL + item}`} alt="" className="CurrHouseImage" loading="lazy" />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function CurrHouseInsideSwiper({ imgInside = [] }: any) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={15}
      speed={400}
      resistanceRatio={0}
      className="CurrHouseInsideSlider"
      grabCursor={true}
      lazyPreloadPrevNext={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
    >
      {imgInside.map((item: any, index: any) => (
        <SwiperSlide key={index}>
          <img src={item} alt="" className="CurrHouseInsideImage" loading="lazy" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const CurrHouse = () => {
  const { id } = useParams();
  const [currHouse, setCurrHouse] = useState<any>([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (id) {
      setCurrHouse(db.Houses[parseInt(id)]);
    }
  }, [id]);

  return (
    <div className="CurrTechnic">
      <HousesMain />
      <div className="CurrHouse">
        <h2 className="CurrHouseTitle">{i18n.language === "eng" ? currHouse.titleEng : currHouse.titleUkr}</h2>
        <div className="CurrHouseData">
          <CurrHouseSwiper imgOutside={currHouse.imgOutside} />
          <div className="CurrHousesDataText">
            <p>{i18n.language === "eng" ? currHouse.nameEng : currHouse.nameUkr}</p>
            <p>{i18n.language === "eng" ? currHouse.numberEng : currHouse.numberUkr}</p>
            <p>{i18n.language === "eng" ? currHouse.typeEng : currHouse.typeUkr}</p>
            <p>{i18n.language === "eng" ? currHouse.sizePartsEng : currHouse.sizePartsUkr}</p>
            <p>{i18n.language === "eng" ? currHouse.planEng : currHouse.planUkr}</p>
            <p className="HousesImgPrice">
              {currHouse.price} <span>$/{i18n.language === "en" ? "m²" : "м²"}</span>
            </p>
          </div>
        </div>
        <div className="HousesDescription">
          <p>{i18n.language === "eng" ? currHouse.desc1Eng : currHouse.desc1Ukr}</p>
          <p>{i18n.language === "eng" ? currHouse.desc2Eng : currHouse.desc2Ukr}</p>
          <p>{i18n.language === "eng" ? currHouse.desc3Eng : currHouse.desc3Ukr}</p>
          {currHouse.imgInside && currHouse.imgInside[0] !== "-" && (
            <CurrHouseInsideSwiper imgInside={currHouse.imgInside} />
          )}
          <p>{i18n.language === "eng" ? currHouse.desc4Eng : currHouse.desc4Ukr}</p>
          <div className="HousesDocuments">
            {currHouse.horizontalDocs &&
              currHouse.horizontalDocs.map((item: any, index: any) => (
                <img
                  src={`${process.env.PUBLIC_URL + item}`}
                  alt=""
                  className="HousesDocumentsHorizontalImage"
                  loading="lazy"
                />
              ))}
            {currHouse.docs &&
              currHouse.docs.map((item: any, index: any) => (
                <img src={`${process.env.PUBLIC_URL + item}`} alt="" className="HousesDocumentsImage" loading="lazy" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrHouse;
