import { useState } from "react";
import "./HomeServices.scss";
import { Link } from "react-router-dom";

const TechnicData = ["/ForHome/HomeCar1.webp", "/ForHome/HomeCar2.webp", "/ForHome/HomeCar3.webp"];
const WorksData = ["/ForHome/HomeWorks1.webp", "/ForHome/HomeWorks2.webp", "/ForHome/HomeWorks3.webp"];

const HomeServices = () => {
  const [technic, setTechnic] = useState(TechnicData[0]);
  const [work, setWork] = useState(WorksData[0]);

  const changeTechnic = (index: number) => {
    setTechnic(TechnicData[index]);
  };

  const changeWork = (index: number) => {
    setWork(WorksData[index]);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="HomeServices" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="AboutTechnique">
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + technic})` }} className="AboutTechniqueImg">
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
            <button className="AboutTechniqueButtonOne" onClick={() => changeTechnic(0)}>
              Зразок 1
            </button>
            <button className="AboutTechniqueButtonOne" onClick={() => changeTechnic(1)}>
              Зразок 2
            </button>
            <button className="AboutTechniqueButtonOne" onClick={() => changeTechnic(2)}>
              Зразок 1
            </button>
          </div>
          <Link to="/buddesign/technique">
            <button className="AboutTechniqueButtonMore" onClick={scrollToTop}>
              Дивитися більше
            </button>
          </Link>
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
            <button className="AboutTechniqueButtonOne" onClick={() => changeWork(0)}>
              Зразок 1
            </button>
            <button className="AboutTechniqueButtonOne" onClick={() => changeWork(1)}>
              Зразок 2
            </button>
            <button className="AboutTechniqueButtonOne" onClick={() => changeWork(2)}>
              Зразок 1
            </button>
          </div>
          <Link to="/buddesign/works">
            <button className="AboutTechniqueButtonMore" onClick={scrollToTop}>
              Дивитися більше
            </button>
          </Link>
        </div>
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + work})` }} className="AboutTechniqueImg">
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
