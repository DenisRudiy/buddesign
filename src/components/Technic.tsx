import TechnicMain from "./Technic/TechnicMain/TechnicMain";
import "./Technic/TechnicMain/TechnicMain.scss";
import TechnicCardsTypes from "./Technic/TechnicCardsTypes/TechnicCardsTypes";
import TechnicAbout from "./Technic/TechnicAbout/TechnicAbout";

const Technique = () => {
  return (
    <>
      <div className="Main">
        <TechnicMain />
        <TechnicAbout />
        <TechnicCardsTypes />
      </div>
    </>
  );
};

export default Technique;
