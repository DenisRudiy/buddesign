import "../AboutUsMain/AboutUsMain.scss";

const AboutUsMain = () => {
  return (
    <>
      <div className="AboutUsMain">
        <div
          className="AboutUsMainBackground"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/AboutMain.webp"})` }}
        ></div>
        <div className="AboutUsMainData">
          <h1 className="AboutUsMainTitle">Наша компанія</h1>
        </div>
      </div>
    </>
  );
};
export default AboutUsMain;
