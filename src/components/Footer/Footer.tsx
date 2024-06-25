import "./Footer.scss";
import BottleIcon from "../../icons/BottleIcon";
import HouseIcon from "../../icons/HouseIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import TechniqueIcon from "../../icons/TechniqueIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import TikTokIcon from "../../icons/TikTokIcon";
import ToolsIcon from "../../icons/ToolsIcon";
import ViberIcon from "../../icons/ViberIcon";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMask } from "@react-input/mask";
import { sendMessage } from "../../services/telegram";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";

const Footer = () => {
  const { t } = useTranslation();
  const inputRef = useMask({ mask: "+38(___)___-__-__", replacement: { _: /\d/ } });
  const toast = useRef<Toast>(null);

  const showSuccess = () => {
    toast.current?.show({
      severity: "success",
      summary: t("toastSuccessTitle"),
      detail: t("toastSuccessDescription"),
      life: 3000,
    });
  };

  const showError = () => {
    toast.current?.show({
      severity: "error",
      summary: t("toastErrorTitle"),
      detail: t("toastErrorDescription"),
      life: 3000,
    });
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "file" && files.length > 0) {
      setFormValues({
        ...formValues,
        [name]: files[0],
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (formValues.name && formValues.phone) {
        const message = `Нове повідомлення: %0A- Ім'я: ${formValues.name} %0A- Tel: ${formValues.phone}`;

        if (formValues.phone.length === 17) {
          await sendMessage(message);
          showSuccess();
        } else {
          showError();
        }
      } else {
        showError();
      }
    } catch (e) {
      console.log("Error");
    } finally {
      setFormValues({
        name: "",
        phone: "",
      });
    }
  };
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
  });
  return (
    <div className="Footer">
      <Toast ref={toast} />
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
        <form onSubmit={handleSubmit} className="FooterRightSection">
          <input
            placeholder={t("footerPlaceholer1")}
            id="name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
            className="FooterRightSectionInput"
          />
          <input
            placeholder={t("footerPlaceholer2")}
            ref={inputRef}
            id="phone"
            type="tel"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            required
            className="FooterRightSectionInput"
          />
          <button type="submit" className="FooterRightSectionButton">
            {t("footerSend")}
          </button>
        </form>
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
            <Link to="https://t.me/buddesign21" target="_blank" rel="noopener noreferrer">
              <TelegramIcon></TelegramIcon>
            </Link>
          </button>
          <button className="FooterSocialButton">
            <Link to="viber://chat?number=%2B3800673594797" target="_blank" rel="noopener noreferrer">
              <ViberIcon></ViberIcon>
            </Link>
          </button>
          <button className="FooterSocialButton">
            <Link
              to="https://www.tiktok.com/@buddesign.21?_t=8mtApRkpZ3N&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon></TikTokIcon>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
