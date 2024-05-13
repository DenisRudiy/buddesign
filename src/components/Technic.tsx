import { useState, useEffect } from "react";
import TechnicMain from "./Technic/TechnicMain/TechnicMain";
import "./Technic/TechnicMain/TechnicMain.scss";
import TechnicCardsTypes from "./Technic/TechnicCardsTypes/TechnicCardsTypes";
import { TypeTechnicTypes, fetchTechnicTypes } from "../services/dataService";
import TechnicAbout from "./Technic/TechnicAbout/TechnicAbout";

const Technique = () => {
  const [technicsTypes, setTechnicsTypes] = useState<TypeTechnicTypes[]>([]);

  useEffect(() => {
    const loadTechnics = async () => {
      try {
        const data = await fetchTechnicTypes();
        setTechnicsTypes(data);
      } catch (error) {
        console.error("Error when loading:", error);
      }
    };
    loadTechnics();
  }, []);

  return (
    <>
      <div className="Main">
        <TechnicMain />
        <TechnicAbout />
        <TechnicCardsTypes technics={technicsTypes} />
      </div>
    </>
  );
};

export default Technique;
