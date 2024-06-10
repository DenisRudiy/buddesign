import { useTranslation } from "react-i18next";
import "./HomeMain.scss";
import { useState } from "react";
import CrossIcon from "../../../icons/CrossIcon";
import { useMask } from "@react-input/mask";
import { sendMessage } from "../../../services/telegram";

const HomeMain = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useMask({ mask: "+38(___)___-__-__", replacement: { _: /\d/ } });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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

        await sendMessage(message);
        // messageSuccess();
      } else {
        // messageError();
      }
    } catch (e) {
      console.log("Error");
    } finally {
      closeModal();
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
    <div className="HomeMain">
      <div
        className="HomeMainBackground"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/ForMain/HomeMain.webp"})` }}
      ></div>
      <div className="HomeMainData">
        <h1 className="HomeMainTitle">{t("homeMainTitle")}</h1>
        <button className="HomeMainButton" onClick={openModal}>
          {t("honeMainButton")}
        </button>
      </div>
      {isOpen && (
        <div className="modal-wrapper">
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <button onClick={closeModal}>
                  <CrossIcon></CrossIcon>
                </button>
              </div>
              <h2>{i18n.language === "en" ? "Request a call" : "Замовити дзвінок"}</h2>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder={t("footerPlaceholer1")}
                  id="name"
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder={t("footerPlaceholer2")}
                  // placeholder="098-000-00-00"
                  ref={inputRef}
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  required
                />
                <button className="modal-btn" type="submit">
                  {t("footerSend")}
                </button>
                <button className="modal-btn">
                  <a href="tel:+380673594797">067 359 47 97</a>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeMain;
