import { useState, useEffect } from "react";
import ProductsMain from "./Products/ProductsMain/ProductsMain";
import ProductsCards from "./Products/ProductsCards/ProductsCards";
import ProductsAbout from "./Products/ProductsAbout/ProductsAbout";
import { fetchProducts, TypeProduct } from "../services/dataService";

const Products = () => {
  const [products, setProducts] = useState<TypeProduct[]>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        let data: any;
        data = await fetchProducts();
        setProducts(data.products);
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
