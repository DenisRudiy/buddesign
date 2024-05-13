import EmailIcon from "../../icons/EmailIcon";
import LocationIcon from "../../icons/LocationIcon";
import PhoneIconFooter from "../../icons/PhoneIconFooter";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterLeftSection">
        <h1 className="FooterLeftSectionTitle">Наші контакти</h1>
        <div className="FooterLeftSectionData">
          <LocationIcon></LocationIcon>
          <div className="FooterLeftSectionText">
            <h2 className="FooterLeftSectionTextTitle">Спецтехніка та роботи</h2>

            <p className="FooterLeftSectionTextDescription">067 359 4797 -основний</p>
            <p className="FooterLeftSectionTextDescription">067 329 4797</p>
            <p className="FooterLeftSectionTextDescription">093 041 2181</p>
            <p className="FooterLeftSectionTextDescription">пошта 0930412181@ukr.net</p>
          </div>
        </div>
        <div className="FooterLeftSectionData">
          <EmailIcon></EmailIcon>
          <div className="FooterLeftSectionText">
            <h2 className="FooterLeftSectionTextTitle">Аутсорсинг</h2>
            <p className="FooterLeftSectionTextDescription">068 946 8981- основний</p>
            <p className="FooterLeftSectionTextDescription">093 035 1703</p>
            <p className="FooterLeftSectionTextDescription">пошта buddizaine21@gmail.com</p>
          </div>
        </div>
        <div className="FooterLeftSectionData">
          <PhoneIconFooter size={30}></PhoneIconFooter>
          <div className="FooterLeftSectionText">
            <h2 className="FooterLeftSectionTextTitle">Вторсировина</h2>
            <p className="FooterLeftSectionTextDescription">067 506 9886</p>
            <p className="FooterLeftSectionTextDescription">пошта Vtor.Plast@ukr.net</p>
          </div>
        </div>
        <div className="FooterLeftSectionData">
          <PhoneIconFooter size={30}></PhoneIconFooter>
          <div className="FooterLeftSectionText">
            <h2 className="FooterLeftSectionTextTitle">Будинки</h2>
            <p className="FooterLeftSectionTextDescription">067 433 88 22</p>
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
