import { useEffect } from "react";
import HousesMain from "./Houses/HousesMain/HousesMain";

const CurrHouse = (data: any) => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="CurrTechnic">
      <HousesMain />
      <div className="CurrHouse">
        <img src={data.image} alt="" />
      </div>
    </div>
  );
};

export default CurrHouse;
