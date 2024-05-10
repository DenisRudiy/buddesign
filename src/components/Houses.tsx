import React, {useState, useEffect} from "react";
import Footer from "./Footer/Footer";


import './Technic/TechnicMain/TechnicMain.scss'

import Reasons from "./Reasons/Reasons";
import HousesCards from "./Houses/HousesCards/HousesCards";
import HousesMain from "./Houses/HousesMain/HousesMain";
import HousesAbout from "./Houses/HousesAbout/HousesAbout";
import { TypeHouses, fetchHouses } from "../services/dataService";

const Houses = () => {
  const [houses, setHouses] = useState<TypeHouses[]>([]);
  
  useEffect(() => {
    const loadHouses = async () => {
      try {
        const data = await fetchHouses();
        setHouses(data);
      } catch (error) {
        console.error('Помилка при завантаженні продуктів:', error);
      }
    };

    loadHouses();
  }, []);
  return (
    <>
    <div className="Main">
        <HousesMain/>
        <HousesAbout/>
    <HousesCards houses={houses}/>

   
    </div>
    </>
  )
};

export default Houses;
