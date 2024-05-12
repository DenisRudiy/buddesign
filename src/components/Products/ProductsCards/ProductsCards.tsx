import React from "react";
import "../ProductsCards/ProductsCards.scss";
import { TypeProduct } from "../../../services/dataService";

interface ProductsCardsProps {
  products: TypeProduct[];
}

const ProductsCards: React.FC<ProductsCardsProps> = ({ products }) => {
  return (
    <div className="ProductsCards">
      <div className="ProductsCardsBody">
        {products.map((product) => (
          <div className="ProductsImg" key={product.id}>
            <div
              className="ProductsImgBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/product2.png"})` }}
            />
            <div className="ProductsImgText">
              <h2 className="ProductsImgTitle">{product.title}</h2>
              <h4 className="ProductsImgPrice">
                $ {product.price} <span>|т.</span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCards;
