import React from "react";
import '../WorkCards/WorkCards.scss'
import { TypeWork } from "../../../services/dataService";
interface WorksCardsProps {
  works: TypeWork[];
} 

const WorkCards: React.FC<WorksCardsProps> = ({ works }) =>{

    return(
        <>
        
        <section className="page__work-gallery">
            <div className="work-gallery__container"> 
              {works.map((item) =>{
                return(
                  <>
                  <div className="work-gallery__item">
                <div className="work-gallery__item_img">
                  <img src={`${process.env.PUBLIC_URL + "/work2.png"}`} alt="gallery_img"/>
                </div>
                <h4 className="work-gallery__item_price">$ {item.price} <span>|т.</span></h4>
                <h2 className="work-gallery__item_title">{item.title}</h2>
              </div>
                  </>
                )
              })}
              </div>
          </section>
        </>
    )
}
export default WorkCards