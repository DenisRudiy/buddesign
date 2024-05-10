import React from "react";
import './TechnicCardsTypes.scss'
import { TypeTechnicTypes } from "../../../services/dataService";
import TechnicMain from "../TechnicMain/TechnicMain";
import TechnicAbout from "../TechnicAbout/TechnicAbout";

interface TechnicsCardsProps {
    technics: TypeTechnicTypes[];
  } 
  
const TechnicCardsTypes: React.FC<TechnicsCardsProps> = ({ technics }) => {
    
    return (
        <>
        <TechnicMain/>
      <TechnicAbout/>
            <section className="page_gallery_technics">
                <h2 className="page_gallery_technics_-title title-big">
                    ЕКСКАВАТОРИ
                </h2>
                <div className="container1_technics">
                    <div className="container_technics">
                        
                            {technics.map((item) =>{
                                return(
                                    <>
                                    <div className="card_technics">
                                    <div className="cover_technics card-image_technics">
                                        <div className="content_technics">
                                            <  img src={`${process.env.PUBLIC_URL + "/tech3.png"}`} alt="car" />
                                            <h3 className="products__gallery__item_price_technics">$ {item.price} <span className="products__span">| год</span></h3>
                                            <h3 className="products__gallery__item_title_technics">{item.title}</h3>
                                        </div>
                                    </div>
                                    <div className="cover_technics card-info_technics">
                                <div className="content_technics">
                                    <p className="characteristics_technics">Характеристики:</p>
                                    <p className="mass_technics"> Маса: <span className="products__span">{item.weight} т</span></p>
                                    <p className="volime_technics"> Об'єм ковша: <span className="products__span">{item.obem}м3</span></p>
                                    <p className="depth_technics"> Глибина копання: <span className="products__span">{item.deep} м</span></p>
                                    <button className="transparent-button2_technics">Розрахувати вартість</button>
                                </div>
                                </div>
                            </div>
                             </>
                                )
                            })}
                            
                        
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default TechnicCardsTypes
