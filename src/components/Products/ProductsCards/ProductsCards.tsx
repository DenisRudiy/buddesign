import React from "react";
import '../ProductsCards/ProductsCards.scss';
import { TypeProduct } from '../../../services/dataService';

interface ProductsCardsProps {
  products: TypeProduct[];
} 

const ProductsCards: React.FC<ProductsCardsProps> = ({ products }) => {
  return (
    <>
      <section className="page__products__gallery"> 
        <div className="products__gallery__container">
          {products.map(product => (
            <div className="products__gallery__item" key={product.id}>
              <div className="products__gallery__item_img">
                <img src={`${process.env.PUBLIC_URL}/product2.png`} alt="gallery_img" />
              </div>
              <h4 className="products__gallery__item_price">$ {product.price} <span>|т.</span></h4>
              <h2 className="products__gallery__item_title">{product.title}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductsCards;
