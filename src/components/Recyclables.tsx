import RecyclablesMain from "./Recyclables/RecyclablesMain/RecyclablesMain";
import RecyclablesAbout from "./Recyclables/RecyclablesAbout/RecyclablesAbout";
import RecyclablesCards from "./Recyclables/RecyclablesCards/RecyclablesCards";
import { useEffect, useState } from "react";
import { fetchrRecyclables, TypeRecyclables } from "../services/dataService";

const Recyclables = () => {
  const [recyclables, setRecyclables] = useState<TypeRecyclables[]>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const loadRecyclables = async () => {
      try {
        let data: any;
        data = await fetchrRecyclables();
        setRecyclables(data.Rematerial);
      } catch (error) {
        console.error("Помилка при завантаженні продуктів:", error);
      }
    };

    loadRecyclables();
  }, []);
  useEffect(() => {
    if (recyclables.length !== 0) {
      setIsLoad(false);
    }
  }, [recyclables]);
  return (
    <>
      <div className="Main">
        <RecyclablesMain />
        <RecyclablesAbout />
        {isLoad ? <>Loading...</> : <RecyclablesCards recyclables={recyclables} />}
      </div>
    </>
  );
};

export default Recyclables;
