import { useTranslation } from "react-i18next";
import SandClockIcon from "../../../icons/SandClockIcon";
import UserIcon from "../../../icons/UserIcon";
import "../Vacancii/Vacancii.scss";

const Vacancii = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="Vacancies">
      <h2 className="VacanciesTitle">{t("VacanciesTitle")}</h2>
      <div className="VacanciesBody">
        {vacanscies.map((item: any) => (
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
                <button className="VacanciesItemButtonSend">
                  {i18n.language === "en" ? "Send your resume" : "Відправити резюме"}
                </button>
                <button className="VacanciesItemButtonPhone">(099) 099-99-99</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vacancii;

const vacanscies = [
  {
    id: 0,
    img: "/vac1.jpg",
    titleUkr: "Водій на самоскид (категорія С)",
    titleEng: "Dump truck driver (category C)",
    priceUkr: "20 000 грн",
    priceEng: "20 000 uah",
    conditionOffUkr: "Офіційне працевлаштування",
    conditionOffEng: "Official employment",
    conditionEmployUkr: "Повна зайнятість",
    conditionEmployEng: "Full-time employment",
    descriptionUkr:
      "Шукаємо відповідальних, порядних водіїв. Надсилайте своє резюме або телефонуйте за вказаним номером телефону. Будемо раді ,що саме Ви станете частиною нашої команди Buddesign!",
    descriptionEng:
      "We are looking for responsible, decent drivers. Send your resume or call us at the specified phone number. We will be glad that you will become a part of our Buddesign team!",
  },
  {
    id: 1,
    img: "/vac2.jpg",
    titleUkr: "Водій на напівпричіп (категорія С,Е)",
    titleEng: "Semi-trailer driver (category C, E)",
    priceUkr: "20 000 грн",
    priceEng: "20 000 uah",
    conditionOffUkr: "Офіційне працевлаштування",
    conditionOffEng: "Official employment",
    conditionEmployUkr: "Повна зайнятість",
    conditionEmployEng: "Full-time employment",
    descriptionUkr:
      "Шукаємо відповідальних, порядних водіїв. Надсилайте своє резюме або телефонуйте за вказаним номером телефону. Будемо раді ,що саме Ви станете частиною нашої команди Buddesign!",
    descriptionEng:
      "We are looking for responsible, decent drivers. Send your resume or call us at the specified phone number. We will be glad that you will become a part of our Buddesign team!",
  },
  {
    id: 2,
    img: "/vac3.jpg",
    titleUkr: "Водій на екскаватор JCB 3CX, 4CX",
    titleEng: "Driver for excavator JCB 3CX, 4CX",
    priceUkr: "180 грн/год",
    priceEng: "180 uah/hour",
    conditionOffUkr: "Офіційне працевлаштування",
    conditionOffEng: "Official employment",
    conditionEmployUkr: "Повна зайнятість",
    conditionEmployEng: "Full-time employment",
    descriptionUkr:
      "Шукаємо відповідальних, порядних водіїв. Надсилайте своє резюме або телефонуйте за вказаним номером телефону. Будемо раді ,що саме Ви станете частиною нашої команди Buddesign!",
    descriptionEng:
      "We are looking for responsible, decent drivers. Send your resume or call us at the specified phone number. We will be glad that you will become a part of our Buddesign team!",
  },
];
