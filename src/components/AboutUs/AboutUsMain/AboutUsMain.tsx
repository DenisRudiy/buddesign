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
          <h1 className="AboutUsMainTitle">Lorem</h1>
          <h1 className="AboutUsMainTitle"> Ipsum dolor sit</h1>
        </div>
      </div>
    </>
  );
};
export default AboutUsMain;
