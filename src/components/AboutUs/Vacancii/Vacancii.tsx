import React from "react";

import '../Vacancii/Vacancii.scss'
const Vacancii = () =>{
    return(
        <>

<section className="page__new-vacancies new-vacancies" >
          <div className="new-vacancies__container">
            <h2 className="new-vacancies__title">НАШІ ВАКАНСІЇ</h2>
            <div className="new-vacancies_items">
              <div className="new-vacancies__item new-vacancies-item">
                <div className="new-vacancies__decor">
                  <img src={`${process.env.PUBLIC_URL + " /AboutUs4.png"}`}  alt="decor" />
                </div>
                <h2 className="new-vacancies__item__title">
                  ВОДІЙ НА САМОСВАЛ (КАТЕГОРІЯ Е)
                </h2>
                <h4 className="new-vacancies__item__subtitle">
                  від <span>$400</span>
                </h4>
                <div className="new-vacancie__icons">
                  <p className="new-vacancie__icons-text1 new-vacancie__icons-text">
                    ПОВНА ЗАЙНЯТІСТЬ
                  </p>
                  <p className="new-vacancie__icons-text2 new-vacancie__icons-text">
                    ОФІЙІЙНЕ ПРАЦЕВЛАШТУВАННЯ
                  </p>
                </div>
                <div className="new-vacancie__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="new-vacancie__buttns">
                  <button className="new-vacancie__button-sent">
                    ВІДПРАВИТИ РЕЗЮМЕ
                  </button>
                  <button className="new-vacancie__button-phone">
                    (099) 099-99-99
                  </button>
                </div>
              </div>
              <div className="new-vacancies__item new-vacancies-item">
                <div className="new-vacancies__decor">
                  <img src={`${process.env.PUBLIC_URL + " /AboutUs4.png"}`}  alt="decor" />
                </div>
                <h2 className="new-vacancies__item__title">
                  ВОДІЙ НА САМОСВАЛ (КАТЕГОРІЯ Е)
                </h2>
                <h4 className="new-vacancies__item__subtitle">
                  від <span>$400</span>
                </h4>
                <div className="new-vacancie__icons">
                  <p className="new-vacancie__icons-text1 new-vacancie__icons-text">
                    ПОВНА ЗАЙНЯТІСТЬ
                  </p>
                  <p className="new-vacancie__icons-text2 new-vacancie__icons-text">
                    ОФІЙІЙНЕ ПРАЦЕВЛАШТУВАННЯ
                  </p>
                </div>
                <div className="new-vacancie__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="new-vacancie__buttns">
                  <button className="new-vacancie__button-sent">
                    ВІДПРАВИТИ РЕЗЮМЕ
                  </button>
                  <button className="new-vacancie__button-phone">
                    (099) 099-99-99
                  </button>
                </div>
              </div>
              <div className="new-vacancies__item new-vacancies-item">
                <div className="new-vacancies__decor">
                  <img src={`${process.env.PUBLIC_URL + " /AboutUs4.png"}`}  alt="decor" />
                </div>
                <h2 className="new-vacancies__item__title">
                  ВОДІЙ НА САМОСВАЛ (КАТЕГОРІЯ Е)
                </h2>
                <h4 className="new-vacancies__item__subtitle">
                  від <span>$400</span>
                </h4>
                <div className="new-vacancie__icons">
                  <p className="new-vacancie__icons-text1 new-vacancie__icons-text">
                    ПОВНА ЗАЙНЯТІСТЬ
                  </p>

<p className="new-vacancie__icons-text2 new-vacancie__icons-text">
                    ОФІЙІЙНЕ ПРАЦЕВЛАШТУВАННЯ
                  </p>
                </div>
                <div className="new-vacancie__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="new-vacancie__buttns">
                  <button className="new-vacancie__button-sent">
                    ВІДПРАВИТИ РЕЗЮМЕ
                  </button>
                  <button className="new-vacancie__button-phone">
                    (099) 099-99-99
                  </button>
                </div>
              </div>
            </div>
            <div className="new-vacancie__more">
              <button className="new-vacancie__more_button">
                ДИВИТИСЯ БІЛЬШЕ
              </button>
            </div>
          </div>
        </section>
        </>
    )
}

export default Vacancii