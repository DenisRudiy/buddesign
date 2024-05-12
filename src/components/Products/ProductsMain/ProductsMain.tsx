import "../ProductsMain/ProductsMain.scss";

const ProductsMain = () => {
  return (
    <>
      <div className="ProductsMain">
        <div
          className="ProductsMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/product1.png"})` }}
        ></div>
        <div className="ProductsMainData">
          <h1 className="ProductsMainTitle">Lorem</h1>
          <h1 className="ProductsMainTitle"> Ipsum dolor sit</h1>
        </div>
      </div>
    </>
  );
};
export default ProductsMain;
