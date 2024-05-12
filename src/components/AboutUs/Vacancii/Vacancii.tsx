import SandClockIcon from "../../../icons/SandClockIcon";
import UserIcon from "../../../icons/UserIcon";
import "../Vacancii/Vacancii.scss";

const Vacancii = () => {
  return (
    <div className="Vacancies">
      <h2 className="VacanciesTitle">Наші вакансії</h2>
      <div className="VacanciesBody">
        <div className="VacanciesItem">
          <img src={process.env.PUBLIC_URL + "/vac1.jpg"} alt="" className="VacanciesImg" />
          <div className="VacanciesItemText">
            <h1 className="VacanciesItemTitle">Водій на самоскид (категорія С)</h1>
            <h5 className="VacanciesItemSalary">
              від <span> 20 000 грн</span>
            </h5>
            <div className="VacanciesItemDetails">
              <h2 className="VacanciesItemDetailsEmployment">
                <SandClockIcon></SandClockIcon>Офіційне працевлаштування
              </h2>
              <h2 className="VacanciesItemDetailsExperience">
                <UserIcon></UserIcon>Повна зайнятість
              </h2>
            </div>
            <p className="VacanciesItemDescription">
              Шукаємо відповідальних, порядних водіїв. Надсилайте своє резюме або телефонуйте за вказаним номером
              телефону. Будемо раді ,що саме Ви станете частиною нашої команди Buddesign!
            </p>
            <div className="VacanciesItemButtons">
              <button className="VacanciesItemButtonSend">Відправити резюме</button>
              <button className="VacanciesItemButtonPhone">(099) 099-99-99</button>
            </div>
          </div>
        </div>
        <div className="VacanciesItem">
          <img src={process.env.PUBLIC_URL + "/vac2.jpg"} alt="" className="VacanciesImg" />
          <div className="VacanciesItemText">
            <h1 className="VacanciesItemTitle">Водій на напівпричіп (категорія С,Е)</h1>
            <h5 className="VacanciesItemSalary">
              від <span> 20 000 грн</span>
            </h5>
            <div className="VacanciesItemDetails">
              <h2 className="VacanciesItemDetailsEmployment">
                <SandClockIcon></SandClockIcon>Офіційне працевлаштування
              </h2>
              <h2 className="VacanciesItemDetailsExperience">
                <UserIcon></UserIcon>Повна зайнятість
              </h2>
            </div>
            <p className="VacanciesItemDescription">
              Шукаємо відповідальних, порядних водіїв. Надсилайте своє резюме або телефонуйте за вказаним номером
              телефону. Будемо раді ,що саме Ви станете частиною нашої команди Buddesign!
            </p>
            <div className="VacanciesItemButtons">
              <button className="VacanciesItemButtonSend">Відправити резюме</button>
              <button className="VacanciesItemButtonPhone">(099) 099-99-99</button>
            </div>
          </div>
        </div>
        <div className="VacanciesItem">
          <img src={process.env.PUBLIC_URL + "/vac3.jpg"} alt="" className="VacanciesImg" />
          <div className="VacanciesItemText">
            <h1 className="VacanciesItemTitle">Водій на екскаватор JCB 3CX, 4CX</h1>
            <h5 className="VacanciesItemSalary">
              ЗП. <span> 180 грн/год</span>
            </h5>
            <div className="VacanciesItemDetails">
              <h2 className="VacanciesItemDetailsEmployment">
                <SandClockIcon></SandClockIcon>Офіційне працевлаштування
              </h2>
              <h2 className="VacanciesItemDetailsExperience">
                <UserIcon></UserIcon>Повна зайнятість
              </h2>
            </div>
            <p className="VacanciesItemDescription">
              Шукаємо відповідальних, порядних водіїв. Надсилайте своє резюме або телефонуйте за вказаним номером
              телефону. Будемо раді ,що саме Ви станете частиною нашої команди Buddesign!
            </p>
            <div className="VacanciesItemButtons">
              <button className="VacanciesItemButtonSend">Відправити резюме</button>
              <button className="VacanciesItemButtonPhone">(099) 099-99-99</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancii;
