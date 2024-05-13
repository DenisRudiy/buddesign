import { Link } from "react-router-dom";
import "../OurProjects/OurProjects.scss";

const OurProjects = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="OurProjects">
      <div className="OurProjectsTitle">НАШІ ПРОЄКТИ</div>
      <div className="OurProjectsContainer">
        <div className="OurProjectsItem">
          <div className="OurProjectsItemImg">
            <img src={process.env.PUBLIC_URL + "/ourProjects3.png"} alt="decor" />
          </div>
          <h4 className="OurProjectsItemSmallTitle">
            <span>06 august</span> / Architecture
          </h4>
          <h2 className="OurProjectsItemTitle">Lorem ipusm dolor sit amet, consectetur</h2>
        </div>
        <div className="OurProjectsItem">
          <div className="OurProjectsItemImg">
            <img src={process.env.PUBLIC_URL + "/ourProjects3.png"} alt="decor" />
          </div>
          <h4 className="OurProjectsItemSmallTitle">
            <span>06 august</span> / Architecture
          </h4>
          <h2 className="OurProjectsItemTitle">Lorem ipusm dolor sit amet, consectetur</h2>
        </div>
      </div>
      <div className="OurProjectsButtonContainer">
        <Link to="/buddesign/projects">
          <button className="OurProjectsButton" onClick={scrollToTop}>
            <p className="OurProjectsButtonText">Дивитися більше</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurProjects;
