import React from "react";

import "../HousesCards/HousesCards.scss";
import { TypeHouses } from "../../../services/dataService";
interface HousesCardsProps {
  houses: TypeHouses[];
}
const HousesCards: React.FC<HousesCardsProps> = ({ houses }) => {
  return (
    <div className="HousesCards">
      <div className="HousesCardsBody">
        {houses.map((item) => (
          <div className="HousesImg" key={item.id}>
            <div
              className="HousesImgBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/houses2.png"})` }}
            />
            <div className="HousesImgText ">
              <h2 className="HousesImgTitle"> {item.title}</h2>
              <h4 className="HousesImgPrice">
                $ {item.price} <span>|м²</span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousesCards;
