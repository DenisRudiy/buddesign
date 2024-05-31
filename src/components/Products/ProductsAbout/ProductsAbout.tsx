import { useTranslation } from "react-i18next";
import "../ProductsAbout/ProductsAbout.scss";

const ProductsAbout = () => {
  const { t } = useTranslation();

  return (
    <div className="ProductsAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="ProductsContainer">
        <div className="ProductsContent">
          <h4 className="ProductsContentSmallTitle">INFO</h4>
          <h2 className="ProductsContentTitle">{t("ProductsContentTitle")}</h2>
          <p className="ProductsText">{t("ProductsText")}</p>
        </div>
        <div className="ProductsDecoration">
          <img src={`${process.env.PUBLIC_URL + "/product3.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default ProductsAbout;
