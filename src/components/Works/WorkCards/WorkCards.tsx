import React from "react";
import '../WorkCards/WorkCards.scss'
const WorkCards = () =>{
    return(
        <>
        
        <section className="page__work-gallery">
            <div className="work-gallery__container">
              <div className="work-gallery__item">
                <div className="work-gallery__item_img">
                  <img src={`${process.env.PUBLIC_URL + "/work2.png"}`} alt="gallery_img"/>
                </div>
                <h4 className="work-gallery__item_price">$ 3000 <span>|т.</span></h4>
                <h2 className="work-gallery__item_title">Монолітні роботи</h2>
              </div>
              <div className="work-gallery__item">
                <div className="work-gallery__item_img">
                  <img src={`${process.env.PUBLIC_URL + "/work2.png"}`} alt="gallery_img"/>
                </div>
                <h4 className="work-gallery__item_price">$ 3000 <span>|т.</span></h4>
                <h2 className="work-gallery__item_title">Монолітні роботи</h2>
              </div>
              <div className="work-gallery__item">
                <div className="work-gallery__item_img">
                  <img src={`${process.env.PUBLIC_URL + "/work2.png"}`} alt="gallery_img"/>
                </div>
                <h4 className="work-gallery__item_price">$ 3000 <span>|т.</span></h4>
                <h2 className="work-gallery__item_title">Монолітні роботи</h2>
              </div>
              <div className="work-gallery__item">
                <div className="work-gallery__item_img">
                  <img src={`${process.env.PUBLIC_URL + "/work2.png"}`} alt="gallery_img"/>
                </div>
                <h4 className="work-gallery__item_price">$ 3000 <span>|т.</span></h4>
                <h2 className="work-gallery__item_title">Монолітні роботи</h2>
              </div>
              <div className="work-gallery__item">
                <div className="work-gallery__item_img">
                  <img src={`${process.env.PUBLIC_URL + "/work2.png"}`} alt="gallery_img"/>
                </div>
                <h4 className="work-gallery__item_price">$ 3000 <span>|т.</span></h4>
                <h2 className="work-gallery__item_title">Монолітні роботи</h2>
              </div>
              <div className="work-gallery__item">
                <div className="work-gallery__item_img">
                  <img src={`${process.env.PUBLIC_URL + "/work2.png"}`} alt="gallery_img"/>
                </div>
                <h4 className="work-gallery__item_price">$ 3000 <span>|т.</span></h4>
                <h2 className="work-gallery__item_title">Монолітні роботи</h2>
              </div>
              </div>
          </section>
        </>
    )
}
export default WorkCards