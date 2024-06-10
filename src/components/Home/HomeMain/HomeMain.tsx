import { useTranslation } from "react-i18next";
import "./HomeMain.scss";
import { useState } from "react";
import CrossIcon from "../../../icons/CrossIcon";

const HomeMain = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Ім'я:", name);
    console.log("Email:", email);

    setName("");
    setEmail("");
    closeModal();
  };
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
              <form>
                <input placeholder={t("footerPlaceholer1")} />
                <input placeholder={t("footerPlaceholer2")} />
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
