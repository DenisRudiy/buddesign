import { useEffect, useState } from "react";
import { fetchTechnic, TypeTechnic } from "../services/dataService";
import TechnicAbout from "./Technic/TechnicAbout/TechnicAbout";
import TechnicMain from "./Technic/TechnicMain/TechnicMain";

const CurrTechnic = ({ type }: any) => {
  const [currTechnic, setCurrTechnics] = useState<TypeTechnic[]>([]);

  useEffect(() => {
    const loadTechnics = async () => {
      try {
        let data: any;
        switch (type) {
          case "tipper":
            data = await fetchTechnic("technic1");
            break;
          case "excavator":
            data = await fetchTechnic("technic2");
            break;
          case "bulldozer":
            data = await fetchTechnic("technic3");
            break;
          case "other":
            data = await fetchTechnic("technic4");
            break;
          default:
            console.log("Тип техники: default");
            break;
        }
        setCurrTechnics(data);
      } catch (error) {
        console.error("Error when loading:", error);
      }
    };
    loadTechnics();
  }, [type]);
  return (
    <div className="CurrTechnic">
      <TechnicMain />
      <TechnicAbout />
      <div className="TechnicCards">
        {type === "tipper" ? (
          <h2 className="TechnicCardsTitle">Самоскиди</h2>
        ) : type === "excavator" ? (
          <h2 className="TechnicCardsTitle">Екскаватори</h2>
        ) : type === "bulldozer" ? (
          <h2 className="TechnicCardsTitle">Бульдозери</h2>
        ) : (
          <h2 className="TechnicCardsTitle">Інше</h2>
        )}
        <div className="TechnicCardsBody">
          {currTechnic.map((item) => (
            <div className="TechniqueImg">
              <div
                className="TechniqueImgBackground"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.img})` }}
              />
              <div className="TechniqueImgText">
                <h1 className="TechniqueImgTitle">{item.title}</h1>
                <h4 className="TechniqueImgDescription ">{item.price} грн</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrTechnic;
