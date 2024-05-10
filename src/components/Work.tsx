import React, { useState, useEffect } from "react";
import WorkMain from "./Works/WorkMain/WorkMain";
import Footer from "./Footer/Footer";
import WorksAbout from "./Works/WorksAbout/WorksAbout";
import WorkCards from "./Works/WorkCards/WorkCards";
import Reasons from "./Reasons/Reasons";
import { TypeWork, fetchWork } from "../services/dataService";
const Work = () =>{
    const [works, setWorks] = useState<TypeWork[]>([]);
  
    useEffect(() => {
      const loadProducts = async () => {
        try {
          const data = await fetchWork();
          setWorks(data);
        } catch (error) {
          console.error('Помилка при завантаженні продуктів:', error);
        }
      };
  
      loadProducts();
    }, []);
    return(
        <>
    <div className="Main">
    <WorkMain/>
    <WorksAbout/>
    <WorkCards works={works}/>
  

    </div>
        </>
    )
}
 
export default Work