import "../WorksAbout/WorksAbout.scss";
const WorksAbout = () => {
  return (
    <div className="WorksAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <h4 className="WorksTitle">Роботи</h4>
      <div className="WorksContainer">
        <div className="WorksContent">
          <h4 className="WorksContentSmallTitle">INFO</h4>
          <h2 className="WorksContentTitle">Роботи</h2>
          <p className="WorksText">
            При виконанні різноманітних робіт наша компанія має великий досвід у таких сферах, як монтаж інженерних
            мереж, будівництво житлових та комерційних об'єктів, асфальтування доріг, благоустрій територій та багато
            іншого. Наші фахівці забезпечують високоякісне та ефективне виконання робіт завдяки власним знанням і
            сучасному обладнанню.
          </p>
          <button className="WorksButton">Про нас</button>
        </div>
        <div className="WorksDecoration">
          <img src={`${process.env.PUBLIC_URL + "/works3.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};
export default WorksAbout;
