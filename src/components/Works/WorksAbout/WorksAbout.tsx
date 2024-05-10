import React from "react";
import '../WorksAbout/WorksAbout.scss'
const WorksAbout = () => {
return(
    <>
    <h4 className="technics__toptitle">Роботи</h4>
            <section className="page__technics" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
                <div className="technics__container">
                    <div className="technics__technics">
                        <div className="technics__content">
                            <h4 className="technics__subtitle">INFO</h4>
                            <h2 className="technics__title">Роботи</h2>
                            <p className="technics__text">
                            При виконанні різноманітних робіт наша компанія має великий досвід у таких сферах, як монтаж інженерних мереж, будівництво житлових та комерційних об'єктів, асфальтування доріг, благоустрій територій та багато іншого. 
Наші фахівці забезпечують високоякісне та ефективне виконання робіт завдяки власним знанням і сучасному обладнанню.
                            </p>
                            <button className="technics__button">Про нас</button>
                        </div>
                        <div className="technics__decoration">
                            <img src={`${process.env.PUBLIC_URL + "/works3.png"}`} alt="decor" />
                        </div>
                    </div>
                </div>
            </section>
    </>
)
}
export default WorksAbout