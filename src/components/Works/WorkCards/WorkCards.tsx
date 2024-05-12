import React from "react";
import "../WorkCards/WorkCards.scss";
import { TypeWork } from "../../../services/dataService";

interface WorksCardsProps {
  works: TypeWork[];
}

const WorkCards: React.FC<WorksCardsProps> = ({ works }) => {
  return (
    <div className="WorkCards">
      <div className="WorkCardsBody">
        {works.map((item) => (
          <div className="WorkImg">
            <div
              className="WorkImgBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/work2.png"})` }}
            />
            <div className="WorkImgText">
              <h1 className="WorkImgTitle">{item.title}</h1>
              <h4 className="WorkImgPrice ">
                $ {item.price} <span>|т.</span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WorkCards;
