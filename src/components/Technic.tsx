import React, { useState, useEffect } from "react";
import { Route, Routes,  } from "react-router-dom";
import Footer from "./Footer/Footer";
import TechnicMain from "./Technic/TechnicMain/TechnicMain";
import './Technic/TechnicMain/TechnicMain.scss';
import TechnicCardsTypes from "./Technic/TechnicCardsTypes/TechnicCardsTypes";
import Reasons from "./Reasons/Reasons";
import { TypeTechnicTypes, fetchTechnicTypes } from "../services/dataService";
import TechnicCards from "./Technic/TechnicCards/TechnicCards";
import TechnicAbout from "./Technic/TechnicAbout/TechnicAbout";

const Technique = () => {
  const [technics, setTechnics] = useState<TypeTechnicTypes[]>([]);
  
  useEffect(() => {
    const loadTechnics = async () => {
      try {
        const data = await fetchTechnicTypes();
        setTechnics(data);
      } catch (error) {
        console.error('Помилка при завантаженні продуктів:', error);
      }
    };

    loadTechnics();
  }, []);

  return (
    <>
      <div className="Main">
        <TechnicMain />
        <TechnicAbout/>
        <Routes>
       
<Route path="/"  Component={(props) => <TechnicCards {...props}  technics={technics}/>} />
        
        <Route 
          path="/technique/types" 
          Component={(props) => <TechnicCardsTypes {...props}  technics={technics}/>} 
        />
        </Routes>
       
     
      </div>
    
    </>
  );
};

export default Technique;
