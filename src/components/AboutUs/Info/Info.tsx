import "../Info/Info.scss";

const Info = () => {
  return (
    <div className="InfoMainAbout">
      <div className="InfoMainAboutContainer">
        <div className="InfoMainImage" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/hero.jpg"})` }}>
          <div className="InfoMainImageBlock">
            <h2
              className="InfoMainImageNumber"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/hero.jpg"})` }}
            >
              10
            </h2>
            <p className="InfoMainImageText">Років досвіду</p>
          </div>
        </div>
        <h5 className="InfoAboutUs">Про нас</h5>
        <h1 className="InfoAboutCompany">Про нашу компанію</h1>
        <p className="InfoAboutCompanyDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <button className="InfoMainAboutButton">Про нас</button>
      </div>
      <div className="InfoPhoto">
        <img src={process.env.PUBLIC_URL + "/s2.jpg"} alt="" />
      </div>
    </div>
  );
};

export default Info;
