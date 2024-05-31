import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BottleIcon from "../../icons/BottleIcon";
import HouseIcon from "../../icons/HouseIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import TechniqueIcon from "../../icons/TechniqueIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import TikTokIcon from "../../icons/TikTokIcon";
import ToolsIcon from "../../icons/ToolsIcon";
import ViberIcon from "../../icons/ViberIcon";
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="Footer">
      <div className="FooterLeftSection">
        <h1 className="FooterLeftSectionTitle">{t("ourContacts")}</h1>
        <div className="FooterLeftSectionData">
          <TechniqueIcon></TechniqueIcon>
          <div className="FooterLeftSectionText">
            <h2 className="FooterLeftSectionTextTitle">{t("ourContacts1")}</h2>

            <p className="FooterLeftSectionTextDescription">067 359 4797 - {t("phoneMain")}</p>
            <p className="FooterLeftSectionTextDescription">067 329 4797</p>
            <p className="FooterLeftSectionTextDescription">093 041 2181</p>
            <p className="FooterLeftSectionTextDescription">0930412181@ukr.net</p>
          </div>
        </div>
        <div className="FooterLeftSectionData">
          <ToolsIcon></ToolsIcon>
          <div className="FooterLeftSectionText">
            <h2 className="FooterLeftSectionTextTitle">{t("ourContacts2")}</h2>
            <p className="FooterLeftSectionTextDescription">068 946 8981 - {t("phoneMain")}</p>
            <p className="FooterLeftSectionTextDescription">093 035 1703</p>
            <p className="FooterLeftSectionTextDescription">buddizaine21@gmail.com</p>
          </div>
        </div>
        <div className="FooterLeftSectionData">
          <BottleIcon></BottleIcon>
          <div className="FooterLeftSectionText">
            <h2 className="FooterLeftSectionTextTitle">{t("ourContacts3")}</h2>
            <p className="FooterLeftSectionTextDescription">067 506 9886</p>
            <p className="FooterLeftSectionTextDescription">Vtor.Plast@ukr.net</p>
          </div>
        </div>
        <div className="FooterLeftSectionData">
          <HouseIcon></HouseIcon>
          <div className="FooterLeftSectionText">
            <h2 className="FooterLeftSectionTextTitle">{t("ourContacts4")}</h2>
            <p className="FooterLeftSectionTextDescription">067 433 88 22</p>
          </div>
        </div>
        <h2 className="FooterCopyrighting">&copy; {t("copyrighting")}</h2>
      </div>
      <div className="FooterRightSection">
        <h1 className="FooterRightSectionTitle">{t("footerRightSectionTitle")}</h1>
        <input type="text" className="FooterRightSectionInput" placeholder={t("footerPlaceholer1")} />
        <input type="text" className="FooterRightSectionInput" placeholder={t("footerPlaceholer2")} />
        <button className="FooterRightSectionButton">{t("footerSend")}</button>

        <div className="FooterSocialButtons">
          <button className="FooterSocialButton">
            <Link
              to="https://www.instagram.com/buddesign.21?igsh=Y2FneWFvdnhxajZy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon></InstagramIcon>
            </Link>
          </button>
          <button className="FooterSocialButton">
            <TelegramIcon></TelegramIcon>
          </button>
          <button className="FooterSocialButton">
            <ViberIcon></ViberIcon>
          </button>
          <button className="FooterSocialButton">
            <TikTokIcon></TikTokIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
