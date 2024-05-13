import "../WorkMain/WorkMain.scss";

const WorkMain = () => {
  return (
    <>
      <div className="WorkMain">
        <div
          className="WorkMainBackground"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/WorksMain.webp"})`,
          }}
        ></div>
        <div className="WorkMainData">
          <h1 className="WorkMainTitle">Lorem</h1>
          <h1 className="WorkMainTitle"> Ipsum dolor sit</h1>
        </div>
      </div>
    </>
  );
};
export default WorkMain;
