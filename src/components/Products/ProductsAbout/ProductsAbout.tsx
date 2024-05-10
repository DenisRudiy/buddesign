import React from "react";
import '../ProductsAbout/ProductsAbout.scss'

const ProductsAbout = () =>{
    return(
        <>
           <h4 className="technics__toptitle">Товари</h4>
            <section className="page__technics" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/patrn1.png"})` }}>
                
                <div className="technics__container">
                    <div className="technics__technics">
                        <div className="technics__content">
                            <h4 className="technics__subtitle">INFO</h4>
                            <h2 className="technics__title">Наші Товари</h2>
                            <p className="technics__text">
                            При реалізації різноманітних проектів, наша компанія пропонує широкий спектр будівельних матеріалів відповідної якості та надійності. 
Ми гарантуємо високу якість наших продуктів та швидку поставку, що робить нас надійним партнером для будь-якого будівельного проекту.
                            </p>
                            <button className="technics__button">Про нас</button>
                        </div>
                        <div className="technics__decoration">
                            <img src={`${process.env.PUBLIC_URL + "/product3.png"}`} alt="decor" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsAbout