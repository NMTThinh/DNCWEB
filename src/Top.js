import React from "react";
import "./Top.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
export default function Top({ title1, title2, title3, title4, title5,title6,title7,title8,title9,title10,title11,title12 }){
    return(
        <div>
            <div className="top-menu">
          <div className="top-menu-1">
            <div className="top-menu-in-1">
              <div className="menu-item-1">{title1}</div>
              <div className="menu-item-2">{title2}</div>
              <div className="menu-item-3">{title3}</div>
              <div className="menu-item-4">{title4}</div>
              <div className="menu-item-5">{title5}</div>
              <div className="menu-item-6">
                <FaSearch size={16} color="black" />
              </div>
              <div className="menu-item-7">
                <img alt=""
                  className="iconflag_eng"
                  src="https://nctu.edu.vn/uploads/page/2023_10/flagENG.png"
                />
                <p>ENG</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-menu">
          <div className="menu-bottom">
            <div className="left-menu">
              <img alt="" src="https://nctu.edu.vn/videos/logodnc/lg-dnc-pad1.png" />
            </div>
            <div className="right-menu">
              <div className="right-menu-item-1">{title6}</div>
              <div className="right-menu-item-2">{title7}</div>
              <div className="right-menu-item-3">{title8}</div>
              <div className="right-menu-item-4">{title9}</div>
              <div className="right-menu-item-5">{title10}</div>
              <div className="right-menu-item-6">{title11}</div>
              <div className="right-menu-item-7">{title12}</div>
            </div>
          </div>
        </div>
        </div>
    );
}
