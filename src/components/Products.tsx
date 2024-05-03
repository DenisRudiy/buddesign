import Reasons from "./Reasons/Reasons";
import ProductsMain from "./Products/ProductsMain/ProductsMain";
import ProductsCards from "./Products/ProductsCards/ProductsCards";
import ProductsAbout from "./Products/ProductsAbout/ProductsAbout";
const Products = () => {
  return (
    <>
      <div className="Main">
        <ProductsMain />
        <ProductsAbout />
        <ProductsCards />
        <Reasons />
      </div>
    </>
  );
};

export default Products;
