import React from "react";
import '../TechnicMain/TechnicMain.scss'
const TechnicMain = () =>{
    return(

        <>
        <div className="HomeMain">
      <div
        className="HomeMainBackground"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/tech1.png"})` }}
      ></div>
      <div className="HomeMainData">
        <h1 className="HomeMainTitle">Lorem</h1>
        <h1 className="HomeMainTitle"> Ipsum dolor sit</h1>

      </div>
    </div>
        </>
    )
}
export default TechnicMain