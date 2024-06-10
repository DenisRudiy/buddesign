import React from "react";
import "../ProductsCards/ProductsCards.scss";
import { useTranslation } from "react-i18next";

const ProductsCards = ({ products }: any) => {
  const { i18n } = useTranslation();
  return (
    <div className="ProductsCards">
      <div className="ProductsCardsBody">
        {products.map((product: any) => (
          <div className="ProductsImg" key={product.id}>
            <div
              className="ProductsImgBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + product.img})` }}
            />
            <div className="ProductsImgText">
              <h2 className="ProductsImgTitle">{i18n.language === "en" ? product.titleEng : product.titleUkr}</h2>
              <h4 className="ProductsImgPrice">
                {i18n.language === "en" ? "uah" : "грн"} {product.price}{" "}
                <span>|{i18n.language === "en" ? "t." : "т."}</span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCards;
