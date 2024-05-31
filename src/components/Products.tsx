import { useState, useEffect } from "react";
import ProductsMain from "./Products/ProductsMain/ProductsMain";
import ProductsCards from "./Products/ProductsCards/ProductsCards";
import ProductsAbout from "./Products/ProductsAbout/ProductsAbout";
import db from "../data/db.json";

const Products = () => {
  const [products, setProducts] = useState<any>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // let data: any;
        // data = await fetchProducts();
        setProducts(db.products);
      } catch (error) {
        console.error("Помилка при завантаженні продуктів:", error);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      setIsLoad(false);
    }
  }, [products]);

  return (
    <>
      <div className="Main">
        <ProductsMain />
        <ProductsAbout />
        {isLoad ? <>Loading...</> : <ProductsCards products={products} />}
      </div>
    </>
  );
};

export default Products;
