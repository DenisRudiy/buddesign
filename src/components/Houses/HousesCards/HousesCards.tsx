import { Link } from "react-router-dom";
import "../HousesCards/HousesCards.scss";
import { useTranslation } from "react-i18next";

const HousesCards = ({ houses }: any) => {
  const { i18n } = useTranslation();
  return (
    <div className="HousesCards">
      <div className="HousesCardsBody">
        {houses.map((item: any) => (
          <Link to={`${item.id}`}>
            <div className="HousesImg" key={item.id}>
              <div
                className="HousesImgBackground"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/houses2.png"})` }}
              />
              <div className="HousesImgText ">
                <h2 className="HousesImgTitle"> {i18n.language === "en" ? item.titleEng : item.titleUkr}</h2>
                <h4 className="HousesImgPrice">
                  $ {item.price} <span>|{i18n.language === "en" ? "m²" : "м²"}</span>
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HousesCards;
