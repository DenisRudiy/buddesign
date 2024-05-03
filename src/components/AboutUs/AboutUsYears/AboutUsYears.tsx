import React from "react";
import '../AboutUsYears/AboutUsYears.scss'
const AboutUsYears = () =>{
    return(
        <>
        <section className="page__about-us about-us">
            <div className="about-us-decor">
                <div className="about-us-decor__item">
                    <div className="about-us-decor_all_text">
                        <h1 className="about-us-decor_number">10+</h1>
                        <p className="about-us-decor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <h3 className="about-us-decor_subtitle">Років на ринку будівельних послуг</h3>
                    </div>
                    <img  src={`${process.env.PUBLIC_URL + " /aboutus2.png"}`} alt="decor"/>
                </div>
                <div className="about-us-decor__item">
                    <div className="about-us-decor_all_text">
                        <h1 className="about-us-decor_number">10+</h1>
                        <p className="about-us-decor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <h3 className="about-us-decor_subtitle">Років на ринку будівельних послуг</h3>
                    </div>
                    <img  src={`${process.env.PUBLIC_URL + " /aboutus2.png"}`} alt="decor"/>
                </div>
                <div className="about-us-decor__item">
                    <div className="about-us-decor_all_text">
                        <h1 className="about-us-decor_number">10+</h1>
                        <p className="about-us-decor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <h3 className="about-us-decor_subtitle">Років на ринку будівельних послуг</h3>
                    </div>
                    <img  src={`${process.env.PUBLIC_URL + " /aboutus2.png"}`} alt="decor"/>
                </div>
                <div className="about-us-decor__item">
                    <div className="about-us-decor_all_text">
                        <h1 className="about-us-decor_number">10 +</h1>
                        <p className="about-us-decor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <h3 className="about-us-decor_subtitle">Років на ринку будівельних послуг</h3>
                    </div>
                    <img  src={`${process.env.PUBLIC_URL + " /aboutus2.png"}`} alt="decor"/>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutUsYears