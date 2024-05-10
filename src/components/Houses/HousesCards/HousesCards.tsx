import React from "react";

import '../HousesCards/HousesCards.scss'
import { TypeHouses } from "../../../services/dataService";
interface HousesCardsProps {
  houses: TypeHouses[];
} 
const HousesCards: React.FC<HousesCardsProps> = ({ houses }) => {
  return (
    <>
      <section className="page__products__gallery">
        <div className="products__gallery__container">
          {
            houses.map((item) =>{
              return(
                <>

            <div className="products__gallery__item " key={item.id}>
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/houses2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ {item.price} <span>|м²</span></h4>
            <h2 className="products__gallery__item_title"> {item.title}</h2>
            </div>
                </>
              )
            })
          }
        </div>
       
      </section>
    </>
  );
};

export default HousesCards;
