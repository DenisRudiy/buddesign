import React from "react";
import { Link } from "react-router-dom";
import '../TechnicCards/TechnicCards.scss'
import TechnicAbout from "../TechnicAbout/TechnicAbout";
import { TypeTechnicTypes } from "../../../services/dataService";
interface TechnicsCardsProps {
    technics: TypeTechnicTypes[];
  }
const TechnicCards: React.FC<TechnicsCardsProps> = ({ technics }) => {
    return(
        <>
     
            {/*<div className="card_technics">
                                    <Link to='types' className="cover_technics card-image_technics">
                                        <div className="content_technics">
                                            <  img src={`${process.env.PUBLIC_URL + "/tech3.png"}`} alt="car" />
                                            <h3 className="products__gallery__item_price_technics">$ 400 <span className="products__span">| год</span></h3>
                                            <h3 className="products__gallery__item_title_technics">lalala</h3>
                                        </div>
                                    </Link>
                                    
                            </div> */}






                            <section className="page_gallery_technics">
                <h2 className="page_gallery_technics_-title title-big">
                    ЕКСКАВАТОРИ
                </h2>
                <div className="container2_technics">
                    <div className="container_technicsCards">
                        
                            {technics.map((item) =>{
                                return(
                                    <>
                                   <Link to='types'>
        <div className="AboutTechniqueImg">
          <div
            className="AboutTechniqueImgBackground"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/car1.png"})` }}
          />
          <div className="AboutTechniqueImgText">
            <h1 className="AboutTechniqueImgTitle">Екскаватори</h1>
            <h4 className="AboutTechniqueImgDescription ">Arch, intrerier</h4>
          </div>
        </div>
      </Link>
                             </>
                                )
                            })}
                            
                        
                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default TechnicCards