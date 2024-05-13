import "../Info/Info.scss";

const Info = () => {
  return (
    <div className="InfoMainAbout">
      <div className="InfoMainAboutContainer">
        <div className="InfoMainImage" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/Years.webp"})` }}>
          <div className="InfoMainImageBlock">
            <h2
              className="InfoMainImageNumber"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/Years.webp"})` }}
            >
              30
            </h2>
            <p className="InfoMainImageText">Років досвіду</p>
          </div>
        </div>
        <h5 className="InfoAboutUs">Про нас</h5>
        <h1 className="InfoAboutCompany">Про нашу компанію</h1>
        <p className="InfoAboutCompanyDescription">
          Buddesign-компанія з багаторічним досвідом, якісно виконаними проєктами, командою професіоналів та сучасною
          технікою.
        </p>
      </div>
      <div className="InfoPhoto">
        <img src={process.env.PUBLIC_URL + "/s2.jpg"} alt="" />
      </div>
    </div>
  );
};

export default Info;
