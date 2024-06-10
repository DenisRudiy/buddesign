import { useEffect, useState } from "react";
import HousesMain from "./Houses/HousesMain/HousesMain";
import "../styles/CurrentHouse.scss";
import db from "../data/db.json";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CurrHouse = (data: any) => {
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
          <img src={`${process.env.PUBLIC_URL + "/houses2.png"}`} alt="" className="CurrHouseImage" />
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
          <p>{i18n.language === "eng" ? currHouse.desc4Eng : currHouse.desc4Ukr}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrHouse;
