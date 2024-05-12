import "./Technic/TechnicMain/TechnicMain.scss";
import AboutUsMain from "./AboutUs/AboutUsMain/AboutUsMain";
import AboutUsYears from "./AboutUs/AboutUsYears/AboutUsYears";
import Adventages from "./AboutUs/Adventages/Adventages";
import OurProjects from "./AboutUs/OurProjects/OurProjects";
import Vacancii from "./AboutUs/Vacancii/Vacancii";
import Info from "./AboutUs/Info/Info";

const AboutUs = () => {
  return (
    <>
      <div className="Main">
        <AboutUsMain />
        <Info />
        <AboutUsYears />
        <Adventages />
        <OurProjects />
        <Vacancii />
      </div>
    </>
  );
};

export default AboutUs;
