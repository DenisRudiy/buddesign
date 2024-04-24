import "./MainHome.scss";

const MainHome = () => {
  return (
    <div className="MainHome">
      <div className="MainHomeBackground" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/1.jpg"})` }}>
        <div className="MainHomeData">
          <h1 className="MainHomeTitle">Lorem</h1>
          <h1 className="MainHomeTitle"> Ipsum dolor sit</h1>
          <button className="MainHomeButton">Розрахувати вартість</button>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
