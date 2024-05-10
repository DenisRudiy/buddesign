import React, {useEffect, useState} from "react";
import Footer from "./Footer/Footer";


import Reasons from "./Reasons/Reasons";
import RecyclablesMain from "./Recyclables/RecyclablesMain/RecyclablesMain";
import RecyclablesAbout from "./Recyclables/RecyclablesAbout/RecyclablesAbout";
import RecyclablesCards from "./Recyclables/RecyclablesCards/RecyclablesCards";
import { TypeRecyclables, fetchrRecyclables } from "../services/dataService";

const Recyclables = () => {
  const [recyclables, setRecyclables] = useState<TypeRecyclables[]>([]);
  
  useEffect(() => {
    const loadRecyclables = async () => {
      try {
        const data = await fetchrRecyclables();
        setRecyclables(data);
      } catch (error) {
        console.error('Помилка при завантаженні продуктів:', error);
      }
    };

    loadRecyclables();
  }, []);
  return (
    <>
    <div className="Main">

<RecyclablesMain/>
<RecyclablesAbout/>
<RecyclablesCards recyclables={recyclables}/>


    </div>
    </>
  )
};

export default Recyclables;