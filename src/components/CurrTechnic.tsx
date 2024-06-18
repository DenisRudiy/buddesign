import { useEffect, useState } from "react";
import TechnicAbout from "./Technic/TechnicAbout/TechnicAbout";
import TechnicMain from "./Technic/TechnicMain/TechnicMain";
import { useTranslation } from "react-i18next";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const CurrTechnic = ({ type }: any) => {
  const [currTechnic, setCurrTechnics] = useState<any>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const loadTechnics = async () => {
      let typeTech = "tipper";
      try {
        switch (type) {
          case "tipper":
            typeTech = "technic_tippers";
            break;
          case "excavator":
            typeTech = "technic_excavator";
            break;
          case "bulldozer":
            typeTech = "technic_bulldozer";
            break;
          case "other":
            typeTech = "technic_other";
            break;
          default:
            console.log("Тип техники: default");
            break;
        }
      } catch (error) {
        console.error("Error when loading:", error);
      }
      const colRef = collection(db, typeTech);
      getDocs(colRef)
        .then((snapshot) => {
          let tech_type: any = [];
          snapshot.docs.forEach((doc) => {
            tech_type.push({ ...doc.data(), id: doc.id });
          });
          setCurrTechnics(tech_type);
        })
        .catch((err) => {
          console.log(err.message);
        });
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
                  {item.price === "договірна" ? (
                    <>{i18n.language === "en" ? "contractual" : "договірна"}</>
                  ) : (
                    <>
                      {item.price} {i18n.language === "en" ? "uah" : "грн"}
                    </>
                  )}
                  {item.loadCapacityUkr && item.loadCapacityUkr !== "-" ? (
                    <h3 className="Details">
                      {i18n.language === "en"
                        ? `Load capacity - ${item.loadCapacityEng} ton.`
                        : `Вантажопідємність - ${item.loadCapacityUkr} т.`}
                    </h3>
                  ) : (
                    <></>
                  )}
                  {item.volumeUkr && item.volumeUkr !== "-" ? (
                    <h3 className="Details">
                      {i18n.language === "en"
                        ? `Volume of the body, bucket - ${item.volumeEng} m³`
                        : `Об'єм кузова, ковша - ${item.volumeUkr} м³`}
                    </h3>
                  ) : (
                    <></>
                  )}
                  {item.sizeUkr && item.sizeUkr !== "-" ? (
                    <h3 className="Details">
                      {i18n.language === "en"
                        ? `Site dimensions - ${item.sizeEng} mm`
                        : `Розміри площадки - ${item.sizeUkr} мм`}
                    </h3>
                  ) : (
                    <></>
                  )}
                  {item.deepUkr && item.deepUkr !== "-" ? (
                    <h3 className="Details">
                      {i18n.language === "en"
                        ? `Digging depth - ${item.deepEng} m`
                        : `Глубина копання - ${item.deepUkr} м`}
                    </h3>
                  ) : (
                    <></>
                  )}
                  {item.heighUkr && item.heighUkr !== "-" ? (
                    <h3 className="Details">
                      {i18n.language === "en"
                        ? `Load height - ${item.heighEng} m`
                        : `Висота навантаження - ${item.heighUkr} м`}
                    </h3>
                  ) : (
                    <></>
                  )}
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
