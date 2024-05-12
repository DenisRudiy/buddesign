import "../GelleryPhotos/GelleryPhotos.scss";

const GelleryPhotos = () => {
  return (
    <div className="GelleryPhotos">
      <h1 className="GelleryPhotosTitle">Галерея</h1>
      <div className="GelleryPhotosBody">
        <img src={process.env.PUBLIC_URL + "/gal1.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal2.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal3.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal4.jpg"} alt="" />

        <img src={process.env.PUBLIC_URL + "/gal2.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal3.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal4.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal1.jpg"} alt="" />

        <img src={process.env.PUBLIC_URL + "/gal3.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal4.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal1.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "/gal2.jpg"} alt="" />
      </div>
    </div>
  );
};

export default GelleryPhotos;
