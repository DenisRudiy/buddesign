import "../styles/App.scss";
import PhoneIcon from "../icons/PhoneIcon";
import CrossIcon from "../icons/CrossIcon";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMask } from "@react-input/mask";
import { sendMessage } from "../services/telegram";
import { Toast } from "primereact/toast";

const Phone = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
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

        if (formValues.phone.length === 17) {
          await sendMessage(message);
          showSuccess();
          closeModal();
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
    <>
      <Toast ref={toast} />
      <div className="Phone" onClick={openModal}>
        <button className="PhoneButton">
          <PhoneIcon size={35}></PhoneIcon>
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
    </>
  );
};

export default Phone;
