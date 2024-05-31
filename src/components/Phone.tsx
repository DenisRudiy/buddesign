import React, { useState } from "react";
import PhoneIcon from "../icons/PhoneIcon";
import "../styles/App.scss";
import { useTranslation } from "react-i18next";

const Phone = () => {
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
    <>
      <div className="Phone" onClick={openModal}>
        <button className="PhoneButton">
          <PhoneIcon size={35}></PhoneIcon>
        </button>
      </div>

      {isOpen && (
        <div className="modal-wrapper">
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{i18n.language === "en" ? "Request a call" : "Замовити дзвінок"}</h2>
              <form>
                <input placeholder={t("footerPlaceholer1")} />
                <input placeholder={t("footerPlaceholer2")} />
                <button className="modal-btn" type="submit">
                  {t("footerSend")}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Phone;
