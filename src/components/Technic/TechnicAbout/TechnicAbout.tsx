import "./TechnicAbout.scss";

const TechnicAbout = () => {
  return (
    <div className="TechnicAbout">
      <h4 className="TechnicTitle">Наша техніка</h4>
      <div className="TechnicContainer">
        <div className="TechnicContent">
          <h4 className="TechnicContentSmallTitle">INFO</h4>
          <h2 className="TechnicContentTitle">Спецтехніка</h2>
          <p className="TechnicText">
            При виконанні багатьох робіт виникає необхідність у викоританні спецтехніки. Наш парк має велику кількість
            екскаваторів та самоскидів, що дасть вам можливість вибрати оптимальний варіант для виконання конкретних
            завдань!
          </p>
          <button className="TechnicButton">Про нас</button>
        </div>
        <div className="TechnicDecoration">
          <img src={`${process.env.PUBLIC_URL + "/tech2.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default TechnicAbout;
