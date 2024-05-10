import React from "react";
import '../RecyclablesAbout/RecyclablesAbout.scss'

const RecyclablesAbout = () =>{
    return(
        <>
        <h4 className="technics__toptitle">Вторсировина</h4>
            <section className="page__technics">
                <div className="technics__container">
                    <div className="technics__technics">
                        <div className="technics__content">
                            <h4 className="technics__subtitle">INFO</h4>
                            <h2 className="technics__title">Вторсировина</h2>
                            <p className="technics__text">
                            Наша компанія спеціалізується на постачанні різноманітної вторсировини для виробництва та переробки. Наші матеріали відповідають всім стандартам якості та екологічним вимогам, що робить нас надійним постачальником для вашого бізнесу.
                            </p>
                            <button className="technics__button">Про нас</button>
                        </div>
                        <div className="technics__decoration">
                            <img src={`${process.env.PUBLIC_URL + "/recycebles2.png"}`} alt="decor" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RecyclablesAbout