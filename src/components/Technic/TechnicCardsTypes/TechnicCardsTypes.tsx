import React from "react";
import { Link } from "react-router-dom";
import "../TechnicCardsTypes/TechnicCardsTypes.scss";

const TechnicCardsTypes = () => {
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
const technics = [
  {
    id: 0,
    title: "Самоскиди",
    type: "tipper",
    img: "/ForHome/HomeCar2.webp",
    price: 500,
    weight: 8.7,
    deep: 5.46,
    obem: 0.33,
  },
  {
    id: 1,
    title: "Екскаватори",
    type: "excavator",
    img: "/ForHome/HomeCar1.webp",
    price: 4000,
    weight: 8.7,
    deep: 5.46,
    obem: 0.33,
  },
  {
    id: 2,
    title: "Бульдозери",
    type: "bulldozer",
    img: "/ForHome/HomeCar4.webp",
    price: 2000,
    weight: 8.7,
    deep: 5.46,
    obem: 0.33,
  },
  {
    id: 3,
    title: "Інше",
    type: "other",
    img: "/ForHome/HomeCar3.webp",
    price: 5000,
    weight: 8.7,
    deep: 5.46,
    obem: 0.33,
  },
];
export default TechnicCardsTypes;
