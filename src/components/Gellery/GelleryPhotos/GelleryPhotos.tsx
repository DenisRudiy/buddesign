import React from "react";
import '../GelleryPhotos/GelleryPhotos.scss';
import { galleryImages } from "./Photos";

const GelleryPhotos = () => {
   
    return (
        <section className="page__gallery-main">
            <section className="page__projects gallery-main">
                <h2 className="gallery-main__title">ФОТО</h2>
                <div className="gallery-main_items">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="gallery-main_item">
                            <div className="gallery-main_item_image">
                                <img
                                    src={`${process.env.PUBLIC_URL}/${image.src}`}
                                    alt=""
                                    className="gallery-main_item_img"
                                />
                            </div>
                            <div className="gallery-main_items_text">
                                <div className="gallery-main_items_text_title1">Наш проєкт</div>
                                <div className="gallery-main_items_text_subtitle1">
                                    {image.subtitle}
                                </div>
                                <div className="gallery-main_items_text_text">
                                    {image.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}

export default GelleryPhotos;
