import "./MainHome.scss";

const MainHome = () => {
  return (
    <div className="MainHome">
      <div
        className="MainHomeBackground"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/1.jpg"})` }}
      ></div>
    </div>
  );
};

export default MainHome;
