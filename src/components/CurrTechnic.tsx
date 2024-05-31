import { useEffect, useState } from "react";
import TechnicAbout from "./Technic/TechnicAbout/TechnicAbout";
import TechnicMain from "./Technic/TechnicMain/TechnicMain";
import { useTranslation } from "react-i18next";
import db from "../data/db.json";

const CurrTechnic = ({ type }: any) => {
  const [currTechnic, setCurrTechnics] = useState<any>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const loadTechnics = async () => {
      try {
        switch (type) {
          case "tipper":
            // data = await fetchTechnic();
            setCurrTechnics(db.technic1);
            break;
          case "excavator":
            // data = await fetchTechnic();
            setCurrTechnics(db.technic1);
            break;
          case "bulldozer":
            // data = await fetchTechnic();
            setCurrTechnics(db.technic1);
            break;
          case "other":
            // data = await fetchTechnic();
            setCurrTechnics(db.technic1);
            break;
          default:
            console.log("Тип техники: default");
            break;
        }
      } catch (error) {
        console.error("Error when loading:", error);
      }
    };
    loadTechnics();
  }, [type]);
  return (
    <div className="CurrTechnic">
      <TechnicMain />
      <TechnicAbout />
      <div className="TechnicCards">
        {type === "tipper" ? (
          <h2 className="TechnicCardsTitle">{t("TechnicCardsTitleType1")}</h2>
        ) : type === "excavator" ? (
          <h2 className="TechnicCardsTitle">{t("TechnicCardsTitleType2")}</h2>
        ) : type === "bulldozer" ? (
          <h2 className="TechnicCardsTitle">{t("TechnicCardsTitleType3")}</h2>
        ) : (
          <h2 className="TechnicCardsTitle">{t("TechnicCardsTitleType4")}</h2>
        )}
        <div className="TechnicCardsBody">
          {currTechnic.map((item: any) => (
            <div className="TechniqueImg">
              <div
                className="TechniqueImgBackground"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.img})` }}
              />
              <div className="TechniqueImgText">
                <h1 className="TechniqueImgTitle">{i18n.language === "en" ? item.titleEng : item.titleUkr}</h1>
                <h4 className="TechniqueImgDescription ">
                  {item.price} {i18n.language === "en" ? "uah" : "грн"}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrTechnic;
