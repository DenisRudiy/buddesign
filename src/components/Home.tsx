import HomeAbout from "./Home/HomeAbout/HomeAbout";
import HomeMain from "./Home/HomeMain/HomeMain";
import HomeProjects from "./Home/HomeProjects/HomeProjects";
import HomeServices from "./Home/HomeServices/HomeServices";

const Main = () => {
  return (
    <div className="Main">
      <HomeMain></HomeMain>
      <HomeAbout></HomeAbout>
      <HomeServices></HomeServices>
      <HomeProjects></HomeProjects>
    </div>
  );
};

export default Main;
