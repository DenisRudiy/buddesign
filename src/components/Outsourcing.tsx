import React, {useEffect, useState} from "react";
import Footer from "./Footer/Footer";


import './Technic/TechnicMain/TechnicMain.scss'

import Reasons from "./Reasons/Reasons";
import OutsourcingMain from "./Outsourcing/OutsourcingMain/OutsourcingMain";
import OutsourcingCards from "./Outsourcing/OutsourcingCards/OutsourcingCards";
import OutsourcingAbout from "./Outsourcing/OutsourcingAbout/OutsourcingAbout";
import { TypeOutsourcing, fetchOutsourcing } from "../services/dataService";
const Outsourcing = () => {
  const [outsourcing, setOutsourcing] = useState<TypeOutsourcing[]>([]);
  
  useEffect(() => {
    const loadOutsourcing = async () => {
      try {
        const data = await fetchOutsourcing();
        setOutsourcing(data);
      } catch (error) {
        console.error('Помилка при завантаженні продуктів:', error);
      } 
    };

    loadOutsourcing();
  }, []);
  return (
    <>
    <div className="Main">
   <OutsourcingMain/>
   <OutsourcingAbout/>
   <OutsourcingCards outsourcing={outsourcing}/>


    </div>
    </>
  )
};

export default Outsourcing;
