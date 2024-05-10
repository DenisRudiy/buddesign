import { Link } from "react-router-dom";
import "./HomeGallery.scss";

const HomeGallery = () => {
  return (
    <div className="HomeGallery">
      <h1 className="HomeGalleryTitle">Галерея</h1>
      <div className="Gallery">
        <img src={process.env.PUBLIC_URL + "/gal1.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal2.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal3.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal4.jpg"} alt="" />
      </div>
    <Link to='gellery'>
    <button className="HomeGalleryButton">Дивитися більше</button>
    </Link>
      
    </div>
  );
};

export default HomeGallery;
