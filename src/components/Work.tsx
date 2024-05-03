import WorkMain from "./Works/WorkMain/WorkMain";
import WorksAbout from "./Works/WorksAbout/WorksAbout";
import WorkCards from "./Works/WorkCards/WorkCards";
import Reasons from "./Reasons/Reasons";
const Work = () => {
  return (
    <>
      <div className="Main">
        <WorkMain />
        <WorksAbout />
        <WorkCards />
        <Reasons />
      </div>
    </>
  );
};

export default Work;
