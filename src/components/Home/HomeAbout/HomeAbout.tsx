import { Link } from "react-router-dom";
import "./HomeAbout.scss";

const HomeAbout = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="MainAbout">
      <div className="MainAboutContainer">
        <div className="MainImage" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/Years.webp"})` }}>
          <div className="MainImageBlock">
            <h2
              className="MainImageNumber"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/Years.webp"})` }}
            >
              30
            </h2>
            <p className="MainImageText">Років досвіду</p>
          </div>
        </div>
        <h1 className="AboutCompany">Про нашу компанію</h1>
        <p className="AboutCompanyDescription">
          Buddesign-компанія з багаторічним досвідом, якісно виконаними проєктами, командою професіоналів та сучасною
          технікою.
        </p>
        <Link to="/buddesign/about" onClick={scrollToTop}>
          <button className="MainAboutButton">Про нас</button>
        </Link>
      </div>
      <div className="Photo">
        <img src={process.env.PUBLIC_URL + "/ForHome/HomeAboutImg.webp"} alt="" className="HomePhotoAbout" />
      </div>
    </div>
  );
};

export default HomeAbout;
