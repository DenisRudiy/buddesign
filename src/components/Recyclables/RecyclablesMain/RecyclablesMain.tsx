import "../RecyclablesMain/RecyclablesMain.scss";

const RecyclablesMain = () => {
  return (
    <>
      <div className="RecyclablesMain">
        <div
          className="RecyclablesMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/RecycablesMain.webp"})` }}
        ></div>
        <div className="RecyclablesMainData">
          <h1 className="RecyclablesMainTitle">Lorem</h1>
          <h1 className="RecyclablesMainTitle"> Ipsum dolor sit</h1>
        </div>
      </div>
    </>
  );
};
export default RecyclablesMain;
