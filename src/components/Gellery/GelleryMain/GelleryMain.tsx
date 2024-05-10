import React from "react";
import '../GelleryMain/GelleryMain.scss'

const GelleryMain = () =>{
    return(
        <>
        <div className="HomeMain">
            
            <div
              className="HomeMainBackground"
              style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + "/gal3.jpg"})`,
                objectFit: "contain",
                backgroundSize:"cover",
                maxWidth:"2800px"
              }}
            ></div>
            <div className="HomeMainData">
              <h1 className="HomeMainTitle">Lorem</h1>
              <h1 className="HomeMainTitle"> Ipsum dolor sit</h1>
      
            </div>
          </div>
        </>
    )
}

export default GelleryMain