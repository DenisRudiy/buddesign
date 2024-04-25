import EmailIcon from "../../icons/EmailIcon";
import LocationIcon from "../../icons/LocationIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterLeftSection">
        <h1 className="FooterLeftSectionTitle">Наші контакти</h1>
        <div className="FooterLeftSectionData">
          <LocationIcon></LocationIcon>
          <div className="FooterLeftSectionText">
            <h2 className="FooterLeftSectionTextTitle">Адреса офісу</h2>
            <p className="FooterLeftSectionTextDescription">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="FooterLeftSectionData">
          <EmailIcon></EmailIcon>
          <div className="FooterLeftSectionText">
            <h2 className="FooterLeftSectionTextTitle">Наш Email</h2>
            <p className="FooterLeftSectionTextDescription">buddesign@gmail.com</p>
          </div>
        </div>
        <div className="FooterLeftSectionData">
          <PhoneIcon size={30}></PhoneIcon>
          <div className="FooterLeftSectionText">
            <h2 className="FooterLeftSectionTextTitle">Зателефонуйте нам</h2>
            <p className="FooterLeftSectionTextDescription">+380 99 999 99 99</p>
          </div>
        </div>
        <h2 className="FooterCopyrighting">&copy; Буддизайн-21</h2>
      </div>
      <div className="FooterRightSection">
        <h1 className="FooterRightSectionTitle">Замовити дзвінок</h1>
        <input type="text" className="FooterRightSectionInput" placeholder="Ім'я" />
        <input type="text" className="FooterRightSectionInput" placeholder="Телефон" />
        <button className="FooterRightSectionButton">Відправити</button>
      </div>
    </div>
  );
};

export default Footer;
