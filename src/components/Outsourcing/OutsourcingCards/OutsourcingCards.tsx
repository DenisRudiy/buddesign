import React from "react";

import "../OutsourcingCards/OutsourcingCards.scss";
import { TypeOutsourcing } from "../../../services/dataService";

interface OutsourcingCardsProps {
  outsourcing: TypeOutsourcing[];
}
const OutsourcingCards: React.FC<OutsourcingCardsProps> = ({ outsourcing }) => {
  return (
    <div className="OutsourcingCards">
      <div className="OutsourcingCardsBody">
        {outsourcing.map((item) => (
          <div className="OutsourcingImg" key={item.id}>
            <div
              className="OutsourcingImgBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/outsourcing2.png"})` }}
            />
            <div className="OutsourcingImgText" key={item.id}>
              <h2 className="OutsourcingImgTitle"> {item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutsourcingCards;
