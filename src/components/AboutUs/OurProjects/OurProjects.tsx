import "../OurProjects/OurProjects.scss";

const OurProjects = () => {
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
        <button className="OurProjectsButton">
          <p className="OurProjectsButtonText">Дивитися більше</p>
        </button>
      </div>
    </div>
  );
};

export default OurProjects;
