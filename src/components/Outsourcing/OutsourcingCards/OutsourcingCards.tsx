import React from "react";

import '../OutsourcingCards/OutsourcingCards.scss'
const OutsourcingCards = () => {
  return (
    <>
      <section className="page__products__gallery">
        <div className="products__gallery__container">
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/outsourcing2.png`} alt="gallery_img" />
            </div>
             
            <h2 className="products__gallery__item_title"> вантажні роботи</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/outsourcing2.png`} alt="gallery_img" />
            </div>
             
            <h2 className="products__gallery__item_title"> вантажні роботи</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/outsourcing2.png`} alt="gallery_img" />
            </div>
             
            <h2 className="products__gallery__item_title"> вантажні роботи</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/outsourcing2.png`} alt="gallery_img" />
            </div>
             
            <h2 className="products__gallery__item_title"> вантажні роботи</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/outsourcing2.png`} alt="gallery_img" />
            </div>
             
            <h2 className="products__gallery__item_title"> вантажні роботи</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/outsourcing2.png`} alt="gallery_img" />
            </div>
             
            <h2 className="products__gallery__item_title"> вантажні роботи</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/outsourcing2.png`} alt="gallery_img" />
            </div>
             
            <h2 className="products__gallery__item_title"> вантажні роботи</h2>
          </div>
        </div>
        {/* Repeat the structure for other items */}
      </section>
    </>
  );
};

export default OutsourcingCards;
