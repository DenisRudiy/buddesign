import React from "react";

import '../OutsourcingCards/OutsourcingCards.scss'
import { TypeOutsourcing } from "../../../services/dataService";

interface OutsourcingCardsProps {
  outsourcing: TypeOutsourcing[];
} 
const OutsourcingCards: React.FC<OutsourcingCardsProps> = ({ outsourcing }) => {
  return (
    <>
      <section className="page__products__gallery">
        <div className="products__gallery__container">
        {
              outsourcing.map((item) =>{
                return(
                  <>
                  <div className="products__gallery__item" key={item.id}>
                    <div className="products__gallery__item_img">
                      <img src={`${process.env.PUBLIC_URL}/outsourcing2.png`} alt="gallery_img"  />
                    </div>
             
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

export default OutsourcingCards;
