import Footer from "./Footer/Footer";
import HomeAbout from "./Home/HomeAbout/HomeAbout";
import HomeGallery from "./Home/HomeGallery/HomeGallery";
import HomeMain from "./Home/HomeMain/HomeMain";
import HomeProjects from "./Home/HomeProjects/HomeProjects";
import HomeServices from "./Home/HomeServices/HomeServices";
import Reasons from "./Reasons/Reasons";

const Main = () => {
  return (
    <div className="Main">
      <HomeMain></HomeMain>
      <HomeAbout></HomeAbout>
      <HomeServices></HomeServices>
      <HomeProjects></HomeProjects>
      <HomeGallery></HomeGallery>
 
  
    </div>
  );
};

export default Main;
