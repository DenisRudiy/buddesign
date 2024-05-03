import React from "react";

const OutsourcingAbout = () =>{
    return(
        <>
         <h4 className="technics__Toptitle">Наша техніка</h4>
            <section className="page__technics">
                <div className="technics__container">
                    <div className="technics__technics">
                        <div className="technics__content">
                            <h4 className="technics__subtitle">INFO</h4>
                            <h2 className="technics__title">СПЕЦТЕХНІКА</h2>
                            <p className="technics__text">
                                При виконанні багатьох робіт виникає необхідність у
                                використанні спецтехніки. Наш парк має велику кількість
                                екскаваторів та самоскидів, що дасть вам можливість вибрати
                                оптимальний варіант для виконання конкретних завдань!
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