import "./HomeServices.scss";

const HomeServices = () => {
  return (
    <div className="HomeServices" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="AboutTechnique">
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/car1.png"})` }} className="AboutTechniqueImg">
          <div className="AboutTechniqueImgText">
            <h1 className="AboutTechniqueImgTitle">Lorem Technique</h1>
            <h4 className="AboutTechniqueImgDescription">Arch, intrerier</h4>
          </div>
        </div>
        <div className="AboutTechniqueText">
          <h1 className="AboutTechniqueTextTitle">Про нашу техніку</h1>
          <p className="AboutTechniqueTextDescription">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae at temporibus quis necessitatibus eius nam
            sunt laboriosam corrupti quo nobis tenetur ducimus, reiciendis dicta, est delectus inventore qui rem
            quaerat.
          </p>
          <div className="AboutTechniqueButtons">
            <button className="AboutTechniqueButtonOne">Зразок 1</button>
            <button className="AboutTechniqueButtonOne">Зразок 2</button>
            <button className="AboutTechniqueButtonOne">Зразок 1</button>
          </div>
          <button className="AboutTechniqueButtonMore">Дивитися більше</button>
        </div>
      </div>
      <div className="AboutWork">
        <div className="AboutTechniqueText">
          <h1 className="AboutTechniqueTextTitle">Про нашу роботу</h1>
          <p className="AboutTechniqueTextDescription">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae at temporibus quis necessitatibus eius nam
            sunt laboriosam corrupti quo nobis tenetur ducimus, reiciendis dicta, est delectus inventore qui rem
            quaerat.
          </p>
          <div className="AboutTechniqueButtons">
            <button className="AboutTechniqueButtonOne">Зразок 1</button>
            <button className="AboutTechniqueButtonOne">Зразок 2</button>
            <button className="AboutTechniqueButtonOne">Зразок 1</button>
          </div>
          <button className="AboutTechniqueButtonMore">Дивитися більше</button>
        </div>
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/work2.png"})` }} className="AboutTechniqueImg">
          <div className="AboutTechniqueImgText">
            <h1 className="AboutTechniqueImgTitle">Lorem Technique</h1>
            <h4 className="AboutTechniqueImgDescription">Arch, intrerier</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
