import "../WorksAbout/WorksAbout.scss";
const WorksAbout = () => {
  return (
    <div className="WorksAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <div className="WorksContainer">
        <div className="WorksContent">
          <h4 className="WorksContentSmallTitle">INFO</h4>
          <h2 className="WorksContentTitle">Роботи</h2>
          <p className="WorksText">
            Широкий спектр високоякісних послуг ,надійних фахівців ,сучасних технологій та техніки, дає змогу
            реалізувати всі проєкти у встановлені терміни. <br />● демонтаж будь-якої складності
            <br />● розробка котлованів <br />● перевезення вантажів <br />● підготовка майданчику до будівництва
          </p>
        </div>
        <div className="WorksDecoration">
          <img src={`${process.env.PUBLIC_URL + "/works3.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};
export default WorksAbout;
