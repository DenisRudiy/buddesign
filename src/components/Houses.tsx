import "./Technic/TechnicMain/TechnicMain.scss";

import Reasons from "./Reasons/Reasons";
import HousesCards from "./Houses/HousesCards/HousesCards";
import HousesMain from "./Houses/HousesMain/HousesMain";
import HousesAbout from "./Houses/HousesAbout/HousesAbout";

const Houses = () => {
  return (
    <>
      <div className="Main">
        <HousesMain />
        <HousesAbout />
        <HousesCards />
        <Reasons />
      </div>
    </>
  );
};

export default Houses;
