import "../ProductsAbout/ProductsAbout.scss";

const ProductsAbout = () => {
  return (
    <div className="ProductsAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <h4 className="ProductsTitle">Товари</h4>
      <div className="ProductsContainer">
        <div className="ProductsContent">
          <h4 className="ProductsContentSmallTitle">INFO</h4>
          <h2 className="ProductsContentTitle">Наші Товари</h2>
          <p className="ProductsText">
            При реалізації різноманітних проектів, наша компанія пропонує широкий спектр будівельних матеріалів
            відповідної якості та надійності. Ми гарантуємо високу якість наших продуктів та швидку поставку, що робить
            нас надійним партнером для будь-якого будівельного проекту.
          </p>
          <button className="ProductsButton">Про нас</button>
        </div>
        <div className="ProductsDecoration">
          <img src={`${process.env.PUBLIC_URL + "/product3.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default ProductsAbout;
