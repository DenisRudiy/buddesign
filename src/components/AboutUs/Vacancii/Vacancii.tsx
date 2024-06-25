import { useTranslation } from "react-i18next";
import SandClockIcon from "../../../icons/SandClockIcon";
import UserIcon from "../../../icons/UserIcon";
import "../Vacancii/Vacancii.scss";
import { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firebase";
import VacanciesModal from "../../VacanciesModal";
import { Toast } from "primereact/toast";

const Vacancii = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [vacancies, setVacancies] = useState<any>([]);
  const toast = useRef<Toast>(null);

  useEffect(() => {
    const colRef = collection(db, "vacanscies");
    getDocs(colRef)
      .then((snapshot) => {
        let vacs: any = [];
        snapshot.docs.forEach((doc) => {
          vacs.push({ ...doc.data(), id: doc.id });
        });
        vacs = vacs.sort((a: any, b: any) => a.id - b.id);
        setVacancies(vacs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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

  return (
    <div className="Vacancies">
      <Toast ref={toast} />
      <h2 className="VacanciesTitle">{t("VacanciesTitle")}</h2>
      {isOpen && (
        <VacanciesModal closeModal={closeModal} showSuccess={showSuccess} showError={showError}></VacanciesModal>
      )}
      <div className="VacanciesBody">
        {vacancies.map((item: any) => (
          <div className="VacanciesItem">
            <img src={process.env.PUBLIC_URL + item.img} alt="" className="VacanciesImg" />
            <div className="VacanciesItemText">
              <h1 className="VacanciesItemTitle">{i18n.language === "en" ? item.titleEng : item.titleUkr}</h1>
              <h5 className="VacanciesItemSalary">
                {i18n.language === "en" ? "from " : "від"}{" "}
                <span> {i18n.language === "en" ? item.priceEng : item.priceUkr}</span>
              </h5>
              <div className="VacanciesItemDetails">
                <h2 className="VacanciesItemDetailsEmployment">
                  <SandClockIcon></SandClockIcon>
                  {i18n.language === "en" ? item.conditionOffEng : item.conditionOffUkr}
                </h2>
                <h2 className="VacanciesItemDetailsExperience">
                  <UserIcon></UserIcon>
                  {i18n.language === "en" ? item.conditionEmployEng : item.conditionEmployUkr}
                </h2>
              </div>
              <p className="VacanciesItemDescription">
                {i18n.language === "en" ? item.descriptionEng : item.descriptionUkr}
              </p>
              <div className="VacanciesItemButtons">
                <button className="VacanciesItemButtonSend" onClick={openModal}>
                  {i18n.language === "en" ? "Send your resume" : "Відправити резюме"}
                </button>
                <button className="VacanciesItemButtonPhone">
                  <a href="tel:+380673594797">(067) 359-47-97</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vacancii;
