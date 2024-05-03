import { Link } from "react-router-dom";
import "./Header.scss";
import Globe from "../../icons/GlobeIcon";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        <img src={process.env.PUBLIC_URL + "/BuddesignLogo.png"} alt="" />
        <h1 className="HeaderTitle">Buddesign</h1>
      </div>
      <div className="HeaderRoutes">
        <Link to="/buddesign/technique">Техніка</Link>
        <Link to="/buddesign/works">Роботи</Link>
        <Link to="/buddesign/products">Товари</Link>
        <Link to="/buddesign/outsourcing">Аутсорсинг</Link>
        <Link to="/buddesign/houses">Будинки</Link>
        <Link to="/buddesign/recyclables">Вторсировина</Link>
        <Link to="/buddesign/about">Про нас</Link>
        <Link to="/buddesign/contacts">Контакты</Link>
        <button className="HeaderLanguage">
          <Globe></Globe>
          <span>UA</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
