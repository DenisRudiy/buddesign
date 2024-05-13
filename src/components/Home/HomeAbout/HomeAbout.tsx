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
        <h5 className="AboutUs">Про нас</h5>
        <h1 className="AboutCompany">Про нашу компанію</h1>
        <p className="AboutCompanyDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
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
