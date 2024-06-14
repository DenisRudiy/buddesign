import "./Technic/TechnicMain/TechnicMain.scss";
import OutsourcingMain from "./Outsourcing/OutsourcingMain/OutsourcingMain";
import OutsourcingCards from "./Outsourcing/OutsourcingCards/OutsourcingCards";
import OutsourcingAbout from "./Outsourcing/OutsourcingAbout/OutsourcingAbout";
import db from "../data/db.json";
import { useEffect, useState } from "react";

const Outsourcing = () => {
  const [outsourcing, setOtsourcing] = useState<any>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // let data: any;
        // data = await fetchProducts();
        setOtsourcing(db.outsorcing);
      } catch (error) {
        console.error("Помилка при завантаженні продуктів:", error);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (outsourcing.length !== 0) {
      setIsLoad(false);
    }
  }, [outsourcing]);

  return (
    <>
      <div className="Main">
        <OutsourcingMain />
        <OutsourcingAbout />
        {isLoad ? <>Loading...</> : <OutsourcingCards outsourcing={outsourcing} />}
      </div>
    </>
  );
};

export default Outsourcing;
