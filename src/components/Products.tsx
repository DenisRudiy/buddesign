import { useState, useEffect } from "react";
import ProductsMain from "./Products/ProductsMain/ProductsMain";
import ProductsCards from "./Products/ProductsCards/ProductsCards";
import ProductsAbout from "./Products/ProductsAbout/ProductsAbout";
import { fetchProducts, TypeProduct } from "../services/dataService";

const Products = () => {
  const [products, setProducts] = useState<TypeProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Помилка при завантаженні продуктів:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <>
      <div className="Main">
        <ProductsMain />
        <ProductsAbout />
        <ProductsCards products={products} />
      </div>
    </>
  );
};

export default Products;
