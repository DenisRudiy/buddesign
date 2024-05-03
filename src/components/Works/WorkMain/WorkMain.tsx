import React from "react";

import '../WorkMain/WorkMain.scss'
const WorkMain = () =>{
    return(
        <>
        <div className="HomeMain">
            
      <div
        className="HomeMainBackground"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/work1.png"})`
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
export default WorkMain