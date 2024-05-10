import React from "react";

import '../TechnicAbout/TechnicAbout.scss'
const TechnicAbout = () =>{
    return(
        <>
        <h4 className="technics__toptitle">Наша техніка</h4>
            <section className="page__technics">
                <div className="technics__container">
                    <div className="technics__technics">
                        <div className="technics__content">
                            <h4 className="technics__subtitle">INFO</h4>
                            <h2 className="technics__title">Спецтехніка</h2>
                            <p className="technics__text">
                            При виконанні багатьох робіт виникає необхідність у викоританні спецтехніки. 
Наш парк має велику кількість екскаваторів та самоскидів, що дасть вам можливість вибрати оптимальний варіант для виконання конкретних завдань!
                            </p>
                            <button className="technics__button">Про нас</button>
                        </div>
                        <div className="technics__decoration">
                            <img src={`${process.env.PUBLIC_URL + "/tech2.png"}`} alt="decor" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TechnicAbout