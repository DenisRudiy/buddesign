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
            Сипучі будівельні матеріали бувають дуже різні, можуть мати великий набір фізико-механічних властивостей, що
            забезпечує їм широку сферу застосування в будівництві. Подрібнений матеріал різних за розміром фракцій може
            бути використаний як самостійний компонент, так і в складі різних будівельних сумішей.
          </p>
        </div>
        <div className="ProductsDecoration">
          <img src={`${process.env.PUBLIC_URL + "/product3.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default ProductsAbout;
