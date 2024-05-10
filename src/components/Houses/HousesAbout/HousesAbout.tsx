import React from "react";
import '../HousesAbout/HousesAbout.scss'

const HousesAbout = () =>{
    return(
        <>
        <h4 className="technics__toptitle">Будинки</h4>
            <section className="page__technics">
                <div className="technics__container">
                    <div className="technics__technics">
                        <div className="technics__content">
                            <h4 className="technics__subtitle">INFO</h4>
                            <h2 className="technics__title">Наші будинки</h2>
                            <p className="technics__text">
                            При реалізації різноманітних проектів, наша компанія пропонує широкий спектр будівельних матеріалів відповідної якості та надійності. 
Ми гарантуємо високу якість наших продуктів та швидку поставку, що робить нас надійним партнером для будь-якого будівельного проекту.
                            </p>
                            <button className="technics__button">Про нас</button>
                        </div>
                        <div className="technics__decoration">
                            <img src={`${process.env.PUBLIC_URL + "/houses1.png"}`} alt="decor" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HousesAbout