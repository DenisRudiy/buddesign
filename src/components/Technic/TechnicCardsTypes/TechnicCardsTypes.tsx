import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../TechnicCardsTypes/TechnicCardsTypes.scss";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firebase";

const TechnicCardsTypes = () => {
  const { t, i18n } = useTranslation();
  const [carTypes, setCarTypes] = useState<any>([]);
  const [scrollConst, setScrollConst] = useState(1400);

  const scrollToTop = () => {
    window.scrollTo({
      top: scrollConst,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1440) {
        setScrollConst(1400);
      }
      if (window.innerWidth <= 1440) {
        setScrollConst(1300);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let width = window.innerWidth;
    if (width > 1440) {
      setScrollConst(1400);
    }
    if (width <= 1440) {
      setScrollConst(1300);
    }
  }, []);

  useEffect(() => {
    const colRef = collection(db, "technic_types");
    getDocs(colRef)
      .then((snapshot) => {
        let tech_type: any = [];
        snapshot.docs.forEach((doc) => {
          tech_type.push({ ...doc.data(), id: doc.id });
        });
        setCarTypes(tech_type);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="TechnicCards">
      <h2 className="TechnicCardsTitle">{t("TechnicCardsTitle")}</h2>
      <div className="TechnicCardsBody">
        {carTypes.map((item: any) => (
          <Link to={item.type} onClick={scrollToTop}>
            <div className="TechniqueImg">
              <div
                className="TechniqueImgBackground"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.img})` }}
              />
              <div className="TechniqueImgText">
                <h1 className="TechniqueImgTitle">{i18n.language === "en" ? item.titleEng : item.titleUkr}</h1>
                <h4 className="TechniqueImgDescription ">{t("Technique")}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TechnicCardsTypes;
