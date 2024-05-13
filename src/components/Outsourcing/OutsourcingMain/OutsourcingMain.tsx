import "../OutsourcingMain/OutsourcingMain.scss";

const OutsourcingMain = () => {
  return (
    <>
      <div className="OutsourcingMain">
        <div
          className="OutsourcingMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/OutsorcingMain.webp"})` }}
        ></div>
        <div className="OutsourcingMainData">
          <h1 className="OutsourcingMainTitle"> Аутсорсинг</h1>
        </div>
      </div>
    </>
  );
};
export default OutsourcingMain;
