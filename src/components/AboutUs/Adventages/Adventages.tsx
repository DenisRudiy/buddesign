import "../Adventages/Adventages.scss";

const Adventages = () => {
  return (
    <div className="Adventages">
      <h2 className="AdventagesTitle">НАШІ ПЕРЕВАГИ</h2>
      <div className="AdventagesCards">
        <div className="AdventagesItem">
          <div className="AdventagesItemTitle">Клієнтоорієнтованість</div>
          <ul className="AdventagesItemList">
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>Високоякісний сервіс</p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>Орієнтація на довгострокові відносини з клієнтами</p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>Висока якість виконання робіт та увага деталям</p>
            </li>
          </ul>
        </div>
        <div className="AdventagesItem">
          <div className="AdventagesItemTitle">Надійність</div>
          <ul className="AdventagesItemList">
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>Ліцензії</p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>Великий досвід на ринку</p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>Співпраця з відомими компаніями</p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>Досвідчені фахівці</p>
            </li>
          </ul>
        </div>
        <div className="AdventagesItem">
          <div className="AdventagesItemTitle">Прозорість</div>
          <ul className="AdventagesItemList">
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>
                Надаємо всю необхідну інформацію для прийняття раціональних рішень у відкритій, повній, своєчасній і
                зрозумілій формі
              </p>
            </li>
            <li className="AdventagesItemListData">
              <div className="AdventagesItemListDot"></div>
              <p>Публікуємо процес роботи в соціальних мережах та на сайті</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Adventages;
