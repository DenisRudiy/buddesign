import React from "react";
import "../RecyclablesCards/RecyclablesCards.scss";
import { TypeRecyclables } from "../../../services/dataService";
interface RecyclablesCardsProps {
  recyclables: TypeRecyclables[];
}

const RecyclablesCards: React.FC<RecyclablesCardsProps> = ({ recyclables }) => {
  return (
    <div className="RecyclablesCards">
      <div className="RecyclablesCardsBody">
        {recyclables.map((item) => (
          <div className="RecyclablesImg" key={item.id}>
            <div
              className="RecyclablesImgBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/recycebles3.png"})` }}
            />
            <div className="RecyclablesImgText">
              <h2 className="RecyclablesImgTitle"> {item.title}</h2>
              <h4 className="RecyclablesImgPrice">
                $ {item.price} <span>|кг</span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecyclablesCards;
