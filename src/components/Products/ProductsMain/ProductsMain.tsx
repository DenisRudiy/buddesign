import { useTranslation } from "react-i18next";
import "../ProductsMain/ProductsMain.scss";

const ProductsMain = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="ProductsMain">
        <div
          className="ProductsMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/ProductsMain.webp"})` }}
        ></div>
        <div className="ProductsMainData">
          <h1 className="ProductsMainTitle">{t("ProductsMainTitle")}</h1>
        </div>
      </div>
    </>
  );
};
export default ProductsMain;
