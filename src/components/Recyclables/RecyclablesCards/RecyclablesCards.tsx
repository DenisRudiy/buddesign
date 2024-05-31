import React from "react";
import "../RecyclablesCards/RecyclablesCards.scss";
import { useTranslation } from "react-i18next";

const RecyclablesCards = ({ recyclables }: any) => {
  const { i18n } = useTranslation();
  return (
    <div className="RecyclablesCards">
      <div className="RecyclablesCardsBody">
        {recyclables.map((item: any) => (
          <div className="RecyclablesImg" key={item.id}>
            <div
              className="RecyclablesImgBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.img})` }}
            />
            <div className="RecyclablesImgText">
              <h2 className="RecyclablesImgTitle"> {i18n.language === "en" ? item.titleEng : item.titleUkr}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecyclablesCards;
