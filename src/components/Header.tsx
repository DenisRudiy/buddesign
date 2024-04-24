import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        <img src={process.env.PUBLIC_URL + "/BuddesignLogo.png"} alt="" />
        <h1 className="HeaderTitle">Buddesign</h1>
      </div>
      <div className="HeaderRoutes">
        <Link to="/technique">Техніка</Link>
        <Link to="/works">Роботи</Link>
        <Link to="/products">Товари</Link>
        <Link to="/outsourcing">Аутсорсинг</Link>
        <Link to="/houses">Будинки</Link>
        <Link to="/recyclables">Вторсировина</Link>
        <Link to="/about">Про нас</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
      <div className="HeaderLanguage"></div>
    </div>
  );
};

export default Header;
