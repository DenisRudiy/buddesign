import React from "react";
import { Link } from "react-router-dom";
import "../TechnicCardsTypes/TechnicCardsTypes.scss";
import { TypeTechnicTypes } from "../../../services/dataService";

interface TechnicsCardsProps {
  technics: TypeTechnicTypes[];
}
const TechnicCardsTypes: React.FC<TechnicsCardsProps> = ({ technics }) => {
  return (
    <div className="TechnicCards">
      <h2 className="TechnicCardsTitle">Типи Техніки</h2>
      <div className="TechnicCardsBody">
        {technics.map((item) => (
          <Link to={item.type}>
            <div className="TechniqueImg">
              <div
                className="TechniqueImgBackground"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.img})` }}
              />
              <div className="TechniqueImgText">
                <h1 className="TechniqueImgTitle">{item.title}</h1>
                <h4 className="TechniqueImgDescription ">Техніка</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default TechnicCardsTypes;
