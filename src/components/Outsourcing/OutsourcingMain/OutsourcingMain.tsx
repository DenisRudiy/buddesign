import "../OutsourcingMain/OutsourcingMain.scss";

const OutsourcingMain = () => {
  return (
    <>
      <div className="OutsourcingMain">
        <div
          className="OutsourcingMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/outsourcing1.png"})` }}
        ></div>
        <div className="OutsourcingMainData">
          <h1 className="OutsourcingMainTitle">Lorem</h1>
          <h1 className="OutsourcingMainTitle"> Ipsum dolor sit</h1>
        </div>
      </div>
    </>
  );
};
export default OutsourcingMain;
