import "./Technic/TechnicMain/TechnicMain.scss";

import Reasons from "./Reasons/Reasons";
import OutsourcingMain from "./Outsourcing/OutsourcingMain/OutsourcingMain";
import OutsourcingCards from "./Outsourcing/OutsourcingCards/OutsourcingCards";
import OutsourcingAbout from "./Outsourcing/OutsourcingAbout/OutsourcingAbout";
const Outsourcing = () => {
  return (
    <>
      <div className="Main">
        <OutsourcingMain />
        <OutsourcingAbout />
        <OutsourcingCards />
        <Reasons />
      </div>
    </>
  );
};

export default Outsourcing;
