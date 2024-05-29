import { Link } from "react-router-dom";
import "./HomeGallery.scss";

const HomeGallery = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="HomeGallery">
      <h1 className="HomeGalleryTitle">Галерея</h1>
      <div className="Gallery">
        <img src={process.env.PUBLIC_URL + "/Gallery/gal1.webp"} alt="" />
        <img src={process.env.PUBLIC_URL + "/Gallery/gal2.webp"} alt="" />
        <img src={process.env.PUBLIC_URL + "/Gallery/gal3.webp"} alt="" />
        <img src={process.env.PUBLIC_URL + "/Gallery/gal4.webp"} alt="" />
      </div>
      <Link to="/buddesign/gallery">
        <button className="HomeGalleryButton" onClick={scrollToTop}>
          Дивитися більше
        </button>
      </Link>
    </div>
  );
};

export default HomeGallery;
