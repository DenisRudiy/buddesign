import { useState, useEffect } from "react";
import WorkMain from "./Works/WorkMain/WorkMain";
import WorksAbout from "./Works/WorksAbout/WorksAbout";
import WorkCards from "./Works/WorkCards/WorkCards";
import { TypeWork, fetchWork } from "../services/dataService";
const Work = () => {
  const [works, setWorks] = useState<TypeWork[]>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        let data: any;
        data = await fetchWork();
        setWorks(data.jobs);
      } catch (error) {
        console.error("Помилка при завантаженні продуктів:", error);
      }
    };

    loadProducts();
  }, []);
  useEffect(() => {
    if (works.length !== 0) {
      setIsLoad(false);
    }
  }, [works]);
  return (
    <>
      <div className="Main">
        <WorkMain />
        <WorksAbout />
        {isLoad ? <>Loading...</> : <WorkCards works={works} />}
      </div>
    </>
  );
};

export default Work;
