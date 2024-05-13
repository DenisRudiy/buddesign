import "../RecyclablesAbout/RecyclablesAbout.scss";

const RecyclablesAbout = () => {
  return (
    <div className="RecyclablesAbout" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
      <h4 className="RecyclablesTitle">Вторсировина</h4>
      <div className="RecyclablesContainer">
        <div className="RecyclablesContent">
          <h4 className="RecyclablesContentSmallTitle">INFO</h4>
          <h2 className="RecyclablesContentTitle">Вторсировина</h2>
          <p className="RecyclablesText">Наш місія - це збереження ресурсів і турбота про навколишнє середовище</p>
        </div>
        <div className="RecyclablesDecoration">
          <img src={`${process.env.PUBLIC_URL + "/recycebles2.png"}`} alt="decor" />
        </div>
      </div>
    </div>
  );
};

export default RecyclablesAbout;
