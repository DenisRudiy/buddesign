import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../TechnicCardsTypes/TechnicCardsTypes.scss";

const TechnicCardsTypes = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="TechnicCards">
      <h2 className="TechnicCardsTitle">{t("TechnicCardsTitle")}</h2>
      <div className="TechnicCardsBody">
        {technics.map((item) => (
          <Link to={item.type}>
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
const technics = [
  {
    id: 0,
    titleUkr: "Самоскиди",
    titleEng: "Dump trucks",
    type: "tipper",
    img: "/ForHome/HomeCar2.webp",
    price: 500,
    weight: 8.7,
    deep: 5.46,
    obem: 0.33,
  },
  {
    id: 1,
    titleUkr: "Екскаватори",
    titleEng: "Excavators",
    type: "excavator",
    img: "/ForHome/HomeCar1.webp",
    price: 4000,
    weight: 8.7,
    deep: 5.46,
    obem: 0.33,
  },
  {
    id: 2,
    titleUkr: "Бульдозери",
    titleEng: "Bulldozers",
    type: "bulldozer",
    img: "/ForHome/HomeCar4.webp",
    price: 2000,
    weight: 8.7,
    deep: 5.46,
    obem: 0.33,
  },
  {
    id: 3,
    titleUkr: "Інше",
    titleEng: "Other",
    type: "other",
    img: "/ForHome/HomeCar3.webp",
    price: 5000,
    weight: 8.7,
    deep: 5.46,
    obem: 0.33,
  },
];
export default TechnicCardsTypes;
