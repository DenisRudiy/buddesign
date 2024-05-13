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
            Наш парк має велику кількість техніки: екскаватори, самоскиди, бульдозери та ін.. Саме тому, ви маєте
            можливість обрати оптимальний варіант, для виконання конкретних завдань, на високому рівні.
          </p>
        </div>
        <div className="TechnicDecoration">
          <img src={`${process.env.PUBLIC_URL + "/tech2.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default TechnicAbout;
