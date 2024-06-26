import CrossIcon from "../icons/CrossIcon";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { sendFile, sendMessage } from "../services/telegram";
import { useMask } from "@react-input/mask";
import PaperClipIcon from "../icons/PaperClipIcon";

const VacanciesModal = ({ closeModal, showSuccess, showError }: any) => {
  const { t, i18n } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>("");
  const inputRef = useMask({ mask: "+38(___)___-__-__", replacement: { _: /\d/ } });

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const succFunc = () => {
    showSuccess();
  };
  const errFunc = () => {
    showError();
  };
  const closeVacModal = () => {
    closeModal(false);
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "file" && files.length > 0) {
      setFormValues({
        ...formValues,
        [name]: files[0],
      });
      setSelectedFileName(files[0].name);
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
      if (formValues.name && formValues.phone && formValues.file) {
        const message = `Новий відгук на вакансію: %0A- Ім'я: ${formValues.name} %0A- Tel: ${formValues.phone}`;

        if (formValues.phone.length === 17) {
          await sendMessage(message);
          await sendFile(formValues.file);
          succFunc();
          closeModal();
        } else {
          errFunc();
        }
      } else {
        errFunc();
      }
    } catch (e) {
      console.log("Error");
    } finally {
      setFormValues({
        name: "",
        phone: "",
        file: null,
      });
    }
  };
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    file: null,
  });
  return (
    <div className="VacanciesModal">
      <div className="modal-overlay" onClick={closeVacModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <button onClick={closeVacModal}>
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
            <div className="footer__attach">
              <input
                id="file"
                name="file"
                type="file"
                accept=".pdf, .doc, .docx, .svg, .webp, .png, .jpg, .jpeg, .HEIC"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <button type="button" onClick={handleFileUpload} className="footer__attach-btn">
                <PaperClipIcon />
              </button>
              <h4>{selectedFileName ? selectedFileName : t("footerFile")}</h4>
            </div>
            <button className="modal-btn" type="submit">
              {t("footerSend")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VacanciesModal;
