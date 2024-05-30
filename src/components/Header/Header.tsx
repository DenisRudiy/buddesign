import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import BurgerIcon from "../../icons/BurgerIcon";
import CrossIcon from "../../icons/CrossIcon";
import ArrowDown from "../../icons/ArrowDown";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 1200;

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
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
            <div className="Dropdown">
              Наші послуги
              <div className="HeaderDropdownServices">
                <Link to="/buddesign/technique" className="HeaderServicesRouteItem">
                  Техніка
                </Link>
                <Link to="/buddesign/works" className="HeaderServicesRouteItem">
                  Роботи
                </Link>
                <Link to="/buddesign/products" className="HeaderServicesRouteItem">
                  Товари
                </Link>
                <Link to="/buddesign/outsourcing" className="HeaderServicesRouteItem">
                  Аутсорсинг
                </Link>
                <Link to="/buddesign/houses" className="HeaderServicesRouteItem">
                  Будинки
                </Link>
                <Link to="/buddesign/recyclables" className="HeaderServicesRouteItem">
                  Вторсировина
                </Link>
              </div>
            </div>

            <Link to="/buddesign/about" className="HeaderRouteItem">
              Про нас
            </Link>
            <Link to="/buddesign/projects" className="HeaderRouteItem">
              Проекти
            </Link>
            <Link to="/buddesign/gallery" className="HeaderRouteItem">
              Галерея
            </Link>
            <Link to="#" onClick={scrollToBottom} className="HeaderRouteItem">
              Контакти
            </Link>
            <div className="HeaderLanguage">
              <div className="LangDropdown">
                <ArrowDown />
                <span>UA</span>
                <div className="HeaderDropdownServices">
                  <button className="HeaderRouteItem">UA</button>
                  <button className="HeaderRouteItem">ENG</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isMobile ? (
          <div className="headerMobile">
            <div className="HeaderLanguage">
              <div className="LangDropdown">
                <ArrowDown />
                <span>UA</span>
                <div className="HeaderDropdownServices">
                  <button className="HeaderRouteItem">UA</button>
                  <button className="HeaderRouteItem">ENG</button>
                </div>
              </div>
            </div>
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
                <Link
                  to="/buddesign/technique"
                  className="modalNavItem"
                  onClick={() => {
                    scrollToTop();
                    showModal();
                  }}
                >
                  Техніка
                </Link>
                <Link
                  to="/buddesign/works"
                  className="modalNavItem"
                  onClick={() => {
                    scrollToTop();
                    showModal();
                  }}
                >
                  Роботи
                </Link>
                <Link
                  to="/buddesign/products"
                  className="modalNavItem"
                  onClick={() => {
                    scrollToTop();
                    showModal();
                  }}
                >
                  Товари
                </Link>
                <Link
                  to="/buddesign/outsourcing"
                  className="modalNavItem"
                  onClick={() => {
                    scrollToTop();
                    showModal();
                  }}
                >
                  Аутсорсинг
                </Link>
                <Link
                  to="/buddesign/houses"
                  className="modalNavItem"
                  onClick={() => {
                    scrollToTop();
                    showModal();
                  }}
                >
                  Будинки
                </Link>
                <Link
                  to="/buddesign/recyclables"
                  className="modalNavItem"
                  onClick={() => {
                    scrollToTop();
                    showModal();
                  }}
                >
                  Вторсировина
                </Link>

                <Link
                  to="/buddesign/about"
                  className="modalNavItem"
                  onClick={() => {
                    scrollToTop();
                    showModal();
                  }}
                >
                  Про нас
                </Link>
                <Link
                  to="/buddesign/projects"
                  className="modalNavItem"
                  onClick={() => {
                    scrollToTop();
                    showModal();
                  }}
                >
                  Проекти
                </Link>
                <Link
                  to="/buddesign/gallery"
                  className="modalNavItem"
                  onClick={() => {
                    scrollToTop();
                    showModal();
                  }}
                >
                  Галерея
                </Link>
                <Link to="#" onClick={scrollToBottom} className="modalNavItem">
                  Контакти
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
