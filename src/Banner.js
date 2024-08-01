import React from "react"
import './Banner.css'
export default function Banner({ titleBanner1, titleBanner2, titleBanner3, titleBanner4, titleBanner5,titleBanner6}){
    return(
        <>
        <div className="bottom-menu-2">
          <div className="menu-bottom-2">
            <div className="item-bottom">{titleBanner1}</div>
            <div className="dauxet">/</div>
            <div className="item-bottom">{titleBanner2}</div>
            <div className="dauxet">/</div>
            <div className="item-bottom">{titleBanner3}</div>
            <div className="dauxet">/</div>
            <div className="item-bottom">{titleBanner4}</div>
            <div className="dauxet">/</div>
            <div className="item-bottom-5">{titleBanner5}</div>
          </div>
        </div>
        <div className="Image">
          <img alt="" src="https://nctu.edu.vn/videos/background-students2.jpg" />
        </div>
        </>
    )
}