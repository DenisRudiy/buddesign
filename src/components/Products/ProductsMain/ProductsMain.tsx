import "../ProductsMain/ProductsMain.scss";

const ProductsMain = () => {
  return (
    <>
      <div className="ProductsMain">
        <div
          className="ProductsMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/ProductsMain.webp"})` }}
        ></div>
        <div className="ProductsMainData">
          <h1 className="ProductsMainTitle">Наші Товари</h1>
        </div>
      </div>
    </>
  );
};
export default ProductsMain;
