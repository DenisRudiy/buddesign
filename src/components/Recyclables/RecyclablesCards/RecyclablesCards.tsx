import React from "react";
import '../RecyclablesCards/RecyclablesCards.scss'
import { TypeRecyclables } from "../../../services/dataService";
interface RecyclablesCardsProps {
  recyclables: TypeRecyclables[];
} 


const RecyclablesCards: React.FC<RecyclablesCardsProps> = ({ recyclables }) => {
  
  return (
    <>
      <section className="page__products__gallery">
        <div className="products__gallery__container">
          {recyclables.map((item) =>{
            return(
              <>
              <div className="products__gallery__item" key={item.id}>
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/recycebles3.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ {item.price} <span>|кг</span></h4>
            <h2 className="products__gallery__item_title"> {item.title}</h2>
          </div>
              </>
            )
          })}
          
        </div>
       
       
      </section>
    </>
  );
};

export default RecyclablesCards;
