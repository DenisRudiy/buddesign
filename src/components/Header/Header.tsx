import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Globe from "../../icons/GlobeIcon";
import BurgerIcon from "../../icons/BurgerIcon";
import CrossIcon from "../../icons/CrossIcon";

const Header = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 1200;

  const showServicesDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showModal = () => {
    setModal(!modal);
    const modalEl = document.querySelector(".Modal") as HTMLElement;
    if (modalEl && modal === false) {
      modalEl.classList.add("show");
    }
    if (modalEl && modal === true) {
      modalEl.classList.remove("show");
    }
  };

  return (
    <>
      <div className="Header">
        <Link to="/buddesign">
          <div className="HeaderLogo">
            <img src={process.env.PUBLIC_URL + "/BuddesignLogo.png"} alt="" />
            <h1 className="HeaderTitle">Buddesign</h1>
          </div>
        </Link>
        {isMobile ? (
          <></>
        ) : (
          <div className="HeaderRoutes">
            <button className="HeaderDropdownButton" onClick={showServicesDropdown}>
              Наші послуги
              {isDropdown ? (
                <div className="HeaderDropdownServices">
                  <Link to="/technique" className="HeaderServicesRouteItem" onClick={showServicesDropdown}>
                    Техніка
                  </Link>
                  <Link to="/works" className="HeaderServicesRouteItem" onClick={showServicesDropdown}>
                    Роботи
                  </Link>
                  <Link to="/products" className="HeaderServicesRouteItem" onClick={showServicesDropdown}>
                    Товари
                  </Link>
                  <Link to="/outsourcing" className="HeaderServicesRouteItem" onClick={showServicesDropdown}>
                    Аутсорсинг
                  </Link>
                  <Link to="/houses" className="HeaderServicesRouteItem" onClick={showServicesDropdown}>
                    Будинки
                  </Link>
                  <Link to="/recyclables" className="HeaderServicesRouteItem" onClick={showServicesDropdown}>
                    Вторсировина
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </button>

            <Link to="/about" className="HeaderRouteItem">
              Про нас
            </Link>
            <Link to="/projects" className="HeaderRouteItem">
              Проекти
            </Link>
            <Link to="/gallery" className="HeaderRouteItem">
              Галерея
            </Link>
            <Link to="#" onClick={scrollToBottom} className="HeaderRouteItem">
              Контакты
            </Link>
            <button className="HeaderLanguage">
              <Globe />
              <span>UA</span>
            </button>
          </div>
        )}
        {isMobile ? (
          <div className="headerMobile">
            <button className="HeaderLanguage">
              <Globe />
              <span>UA</span>
            </button>
            <button className="MenuButton" onClick={showModal}>
              <BurgerIcon></BurgerIcon>
            </button>
            <div className="Modal">
              <div className="ModalHead">
                <button className="CloseButton" onClick={showModal}>
                  <CrossIcon></CrossIcon>
                </button>
              </div>
              <div className="ModalBody">
                <Link to="/technique" className="modalNavItem">
                  Техніка
                </Link>
                <Link to="/works" className="modalNavItem">
                  Роботи
                </Link>
                <Link to="/products" className="modalNavItem">
                  Товари
                </Link>
                <Link to="/outsourcing" className="modalNavItem">
                  Аутсорсинг
                </Link>
                <Link to="/houses" className="modalNavItem">
                  Будинки
                </Link>
                <Link to="/recyclables" className="modalNavItem">
                  Вторсировина
                </Link>

                <Link to="/about" className="modalNavItem">
                  Про нас
                </Link>
                <Link to="/projects" className="modalNavItem">
                  Проекти
                </Link>
                <Link to="/gallery" className="modalNavItem">
                  Галерея
                </Link>
                <Link to="#" onClick={scrollToBottom} className="modalNavItem">
                  Контакты
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Header;
