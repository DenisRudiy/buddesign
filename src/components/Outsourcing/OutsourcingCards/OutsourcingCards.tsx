import "../OutsourcingCards/OutsourcingCards.scss";
import { useTranslation } from "react-i18next";

const OutsourcingCards = ({ outsourcing }: any) => {
  const { i18n } = useTranslation();
  return (
    <div className="OutsourcingCards">
      <div className="OutsourcingCardsBody">
        {outsourcing.map((item: any) => (
          <div className="OutsourcingImg" key={item.id}>
            <div
              className="OutsourcingImgBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/outsourcing2.png"})` }}
            />
            <div className="OutsourcingImgText" key={item.id}>
              <h2 className="OutsourcingImgTitle"> {i18n.language === "en" ? item.titleEng : item.titleUkr}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutsourcingCards;
