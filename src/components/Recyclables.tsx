import Reasons from "./Reasons/Reasons";
import RecyclablesMain from "./Recyclables/RecyclablesMain/RecyclablesMain";
import RecyclablesAbout from "./Recyclables/RecyclablesAbout/RecyclablesAbout";
import RecyclablesCards from "./Recyclables/RecyclablesCards/RecyclablesCards";

const Recyclables = () => {
  return (
    <>
      <div className="Main">
        <RecyclablesMain />
        <RecyclablesAbout />
        <RecyclablesCards />
        <Reasons />
      </div>
    </>
  );
};

export default Recyclables;
