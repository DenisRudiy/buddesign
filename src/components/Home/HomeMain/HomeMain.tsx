import "./HomeMain.scss";

const HomeMain = () => {
  return (
    <div className="HomeMain">
      <div
        className="HomeMainBackground"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/1.jpg"})` }}
      ></div>
      <div className="HomeMainData">
        <h1 className="HomeMainTitle">Lorem</h1>
        <h1 className="HomeMainTitle"> Ipsum dolor sit</h1>
        <button className="HomeMainButton">Розрахувати вартість</button>
      </div>
    </div>
  );
};

export default HomeMain;
