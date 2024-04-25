import HomeAbout from "./Home/HomeAbout/HomeAbout";
import HomeMain from "./Home/HomeMain/HomeMain";
import HomeServices from "./Home/HomeServices/HomeServices";

const Main = () => {
  return (
    <div className="Main">
      <HomeMain></HomeMain>
      <HomeAbout></HomeAbout>
      <HomeServices></HomeServices>
    </div>
  );
};

export default Main;
