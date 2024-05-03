import React from "react";
import '../ProductsCards/ProductsCards.scss';

const ProductsCards = () => {
  return (
    <>
      <section className="page__products__gallery">
        <div className="products__gallery__container">
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/product2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|т.</span></h4>
            <h2 className="products__gallery__item_title">Бетонна суміш</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/product2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|т.</span></h4>
            <h2 className="products__gallery__item_title">Бетонна суміш</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/product2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|т.</span></h4>
            <h2 className="products__gallery__item_title">Бетонна суміш</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/product2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|т.</span></h4>
            <h2 className="products__gallery__item_title">Бетонна суміш</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/product2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|т.</span></h4>
            <h2 className="products__gallery__item_title">Бетонна суміш</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/product2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|т.</span></h4>
            <h2 className="products__gallery__item_title">Бетонна суміш</h2>
          </div>
          <div className="products__gallery__item">
            <div className="products__gallery__item_img">
              <img src={`${process.env.PUBLIC_URL}/product2.png`} alt="gallery_img" />
            </div>
            <h4 className="products__gallery__item_price">$ 3000 <span>|т.</span></h4>
            <h2 className="products__gallery__item_title">Бетонна суміш</h2>
          </div>
        </div>
        {/* Repeat the structure for other items */}
      </section>
    </>
  );
};

export default ProductsCards;
