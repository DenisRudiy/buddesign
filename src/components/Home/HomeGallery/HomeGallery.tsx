import "./HomeGallery.scss";

const HomeGallery = () => {
  return (
    <div className="HomeGallery" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <h1 className="HomeGalleryTitle">Галерея</h1>
      <div className="Gallery">
        <img src={process.env.PUBLIC_URL + "/gal1.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal2.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal3.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal4.jpg"} alt="" />
      </div>
      <button className="HomeGalleryButton">Дивитися більше</button>
    </div>
  );
};

export default HomeGallery;
