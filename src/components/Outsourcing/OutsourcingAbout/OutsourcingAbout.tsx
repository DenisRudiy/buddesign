import React from "react";
import '../OutsourcingAbout/OutsourcingAbout.scss'
const OutsourcingAbout = () =>{
    return(
        <>
         <h4 className="technics__toptitle">Аутсорсинг</h4>
            <section className="page__technics">
                <div className="technics__container">
                    <div className="technics__technics">
                        <div className="technics__content">
                            <h4 className="technics__subtitle">INFO</h4>
                            <h2 className="technics__title">Аутсорсинг та Аутстафінг</h2>
                            <p className="technics__text">
                            Звертаючись до нас, Ви платите тільки за відпрацьований час працівників!
Ми надаємо Вам ту кількість працівників, в яких є необхідність. Таким чином вирішується проблема пікового завантаження і простою персоналу.
                            </p>
                            <button className="technics__button">Про нас</button>
                        </div>
                        <div className="technics__decoration">
                            <img src={`${process.env.PUBLIC_URL + "/outsourcingAbout.png"}`} alt="decor" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OutsourcingAbout