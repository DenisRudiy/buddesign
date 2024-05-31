import { useEffect, useState } from "react";
import "./HomeServices.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TechnicData = ["/ForHome/HomeCar1.webp", "/ForHome/HomeCar2.webp", "/ForHome/HomeCar3.webp"];
const WorksData = ["/ForHome/HomeWorks1.webp", "/ForHome/HomeWorks2.webp", "/ForHome/HomeWorks3.webp"];
const TechnicText = ["Екскаватори", "Бульдозери", "Крани"];
const WorksText = ["Монтажні роботи", "Асфальтування", "Перевезення вантажів"];
const TechnicTextEng = ["Excavators", "Bulldozers", "Cranes"];
const WorksTextEng = ["Installation works", "Asphalting", "Cargo transportation"];

const HomeServices = () => {
  const { t, i18n } = useTranslation();
  const [technic, setTechnic] = useState(TechnicData[0]);
  const [technicText, setTechnicText] = useState<any>(null);
  const [work, setWork] = useState(WorksData[0]);
  const [workText, setWorkText] = useState<any>(null);

  const changeTechnic = (index: number) => {
    setTechnic(TechnicData[index]);
  };

  const changeWork = (index: number) => {
    setWork(WorksData[index]);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    setTechnicText(i18n.language === "en" ? TechnicTextEng[0] : TechnicText[0]);
    setWorkText(i18n.language === "en" ? WorksTextEng[0] : WorksText[0]);
  }, [i18n.language]);

  return (
    <div className="HomeServices" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="AboutTechnique">
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + technic})` }} className="AboutTechniqueImg">
          <div className="AboutTechniqueImgText">
            <h1 className="AboutTechniqueImgTitle">{technicText}</h1>
            <h4 className="AboutTechniqueImgDescription">{t("Technique")}</h4>
          </div>
        </div>
        <div className="AboutTechniqueText">
          <h1 className="AboutTechniqueTextTitle">{t("Technique")}</h1>
          <p className="AboutTechniqueTextDescription">{t("aboutTechniqueTextDescription")}</p>
          <div className="AboutTechniqueButtons">
            <button
              className="AboutTechniqueButtonOne"
              onClick={() => {
                changeTechnic(0);
                if (i18n.language === "en") {
                  setTechnicText(TechnicTextEng[0]);
                } else {
                  setTechnicText(TechnicText[0]);
                }
              }}
            >
              {t("aboutTechniqueButtonOne")} 1
            </button>
            <button
              className="AboutTechniqueButtonOne"
              onClick={() => {
                changeTechnic(1);
                if (i18n.language === "en") {
                  setTechnicText(TechnicTextEng[1]);
                } else {
                  setTechnicText(TechnicText[1]);
                }
              }}
            >
              {t("aboutTechniqueButtonOne")} 2
            </button>
            <button
              className="AboutTechniqueButtonOne"
              onClick={() => {
                changeTechnic(2);
                if (i18n.language === "en") {
                  setTechnicText(TechnicTextEng[2]);
                } else {
                  setTechnicText(TechnicText[2]);
                }
              }}
            >
              {t("aboutTechniqueButtonOne")} 3
            </button>
          </div>
          <Link to="/buddesign/technique">
            <button className="AboutTechniqueButtonMore" onClick={scrollToTop}>
              {t("lookMore")}
            </button>
          </Link>
        </div>
      </div>
      <div className="AboutWork">
        <div className="AboutTechniqueText">
          <h1 className="AboutTechniqueTextTitle">{t("Works")}</h1>
          <p className="AboutTechniqueTextDescription">{t("aboutWorksTextDescription")}</p>
          <div className="AboutTechniqueButtons">
            <button
              className="AboutTechniqueButtonOne"
              onClick={() => {
                changeWork(0);
                if (i18n.language === "en") {
                  setWorkText(WorksTextEng[0]);
                } else {
                  setWorkText(WorksText[0]);
                }
              }}
            >
              {t("aboutTechniqueButtonOne")} 1
            </button>
            <button
              className="AboutTechniqueButtonOne"
              onClick={() => {
                changeWork(1);
                if (i18n.language === "en") {
                  setWorkText(WorksTextEng[1]);
                } else {
                  setWorkText(WorksText[1]);
                }
              }}
            >
              {t("aboutTechniqueButtonOne")} 2
            </button>
            <button
              className="AboutTechniqueButtonOne"
              onClick={() => {
                changeWork(2);
                if (i18n.language === "en") {
                  setWorkText(WorksTextEng[2]);
                } else {
                  setWorkText(WorksText[2]);
                }
              }}
            >
              {t("aboutTechniqueButtonOne")} 3
            </button>
          </div>
          <Link to="/buddesign/works">
            <button className="AboutTechniqueButtonMore" onClick={scrollToTop}>
              {t("lookMore")}
            </button>
          </Link>
        </div>
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + work})` }} className="AboutTechniqueImg">
          <div className="AboutTechniqueImgText">
            <h1 className="AboutTechniqueImgTitle">{workText}</h1>
            <h4 className="AboutTechniqueImgDescription">{t("Works")}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
