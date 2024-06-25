import { useState, useEffect } from "react";
import ProductsMain from "./Products/ProductsMain/ProductsMain";
import ProductsCards from "./Products/ProductsCards/ProductsCards";
import ProductsAbout from "./Products/ProductsAbout/ProductsAbout";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const Products = () => {
  const [products, setProducts] = useState<any>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    if (products.length !== 0) {
      setIsLoad(false);
    }
  }, [products]);

  useEffect(() => {
    const colRef = collection(db, "products");
    getDocs(colRef)
      .then((snapshot) => {
        let prod: any = [];
        snapshot.docs.forEach((doc) => {
          prod.push({ ...doc.data(), id: doc.id });
        });
        prod = prod.sort((a: any, b: any) => a.id - b.id);
        setProducts(prod);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
