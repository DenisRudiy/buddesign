import React from "react";
import { Link } from "react-router-dom";
import "../TechnicCards/TechnicCards.scss";
import { TypeTechnicTypes } from "../../../services/dataService";
interface TechnicsCardsProps {
  technics: TypeTechnicTypes[];
}
const TechnicCards: React.FC<TechnicsCardsProps> = ({ technics }) => {
  return (
    <div className="TechnicCards">
      <h2 className="TechnicCardsTitle">Типи Техніки</h2>
      <div className="TechnicCardsBody">
        {technics.map((item) => (
          <Link to="types">
            <div className="TechniqueImg">
              <div
                className="TechniqueImgBackground"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/car1.png"})` }}
              />
              <div className="TechniqueImgText">
                <h1 className="TechniqueImgTitle">{item.title}</h1>
                <h4 className="TechniqueImgDescription ">{item.type}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default TechnicCards;
