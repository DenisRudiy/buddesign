import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Globe from "../../icons/GlobeIcon";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      <div className="Header__container">
        <div className={`Header ${isBurgerOpen ? 'active' : ''}`}>
          <Link to="/">
            <div className="HeaderLogo">
              <img src={process.env.PUBLIC_URL + "/BuddesignLogo.png"} alt="" />
              <h1 className="HeaderTitle">Buddesign</h1>
            </div>
          </Link>
          <div className="HeaderRoutes">
            <Link to="/technique">Техніка</Link>
            <Link to="/works">Роботи</Link>
            <Link to="/products">Товари</Link>
            <Link to="/outsourcing">Аутсорсинг</Link>
            <Link to="/houses">Будинки</Link>
            <Link to="/recyclables">Вторсировина</Link>
            <Link to="/gallery">Галерея</Link>
            <Link to="/about" className="dropdown">
              Про нас
              <div className="dropdown-content">
                <div className="dropdown-content-container">
                  <Link to="/about">Про нас</Link>
                  <Link to="/projects">Проекти</Link>
                </div>
              </div>
            </Link>
            <Link className="hideOption" to="/projects">Проекти</Link>
            <Link to="#" onClick={scrollToBottom}>
              Контакты
            </Link>
            <button className="HeaderLanguage">
              <Globe />
              <span>UA</span>
            </button>
          </div>
        </div>
        <div className={`burger ${isBurgerOpen ? 'active' : ''}`} onClick={handleBurgerClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
