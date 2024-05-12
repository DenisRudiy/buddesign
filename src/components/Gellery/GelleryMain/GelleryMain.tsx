import "../GelleryMain/GelleryMain.scss";

const GelleryMain = () => {
  return (
    <>
      <div className="GelleryMain">
        <div
          className="GelleryMainBackground"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/gal3.jpg"})`,
            objectFit: "contain",
            backgroundSize: "cover",
            maxWidth: "2800px",
          }}
        ></div>
        <div className="GelleryMainData">
          <h1 className="GelleryMainTitle">Lorem</h1>
          <h1 className="GelleryMainTitle"> Ipsum dolor sit</h1>
        </div>
      </div>
    </>
  );
};

export default GelleryMain;
