import React from "react";

import '../HousesCards/HousesCards.scss'
const HousesCards = () => {
  return (
    <>
      <section className="page__products__gallery">
        <div className="products__gallery__container">
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/houses2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|м²</span></h4>
            <h2 className="products__gallery__item_title"> Будинок</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/houses2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|м²</span></h4>
            <h2 className="products__gallery__item_title"> Будинок</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/houses2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|м²</span></h4>
            <h2 className="products__gallery__item_title"> Будинок</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/houses2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|м²</span></h4>
            <h2 className="products__gallery__item_title"> Будинок</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/houses2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|м²</span></h4>
            <h2 className="products__gallery__item_title"> Будинок</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/houses2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|м²</span></h4>
            <h2 className="products__gallery__item_title"> Будинок</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/houses2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|м²</span></h4>
            <h2 className="products__gallery__item_title"> Будинок</h2>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default HousesCards;
