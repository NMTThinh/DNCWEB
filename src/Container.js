import React from "react";
import './Container.css'

export default function Container({titleContainer1,titleContainer2,titleContainer3,titleContainer4,titleContainer5,titleContainer6,titleContainer7,titleContainer8,titleContainer9,titleContainer10,titleContainer11}){
    return(
        <>
           <div className="board-1">
          <div className="board-2">
            <div className="board-in-2">
              <h1>{titleContainer1}</h1>
            </div>
            <div className="menu-board">
              <div class="inner-box">
                <img alt="" src="https://nctu.edu.vn/videos/icon-layout-sv/congthongtinsv.png" />
                <p>{titleContainer2}</p>
              </div>
              <div class="inner-box">
                <img alt="" src="https://nctu.edu.vn/videos/icon-layout-sv/elearning.png" />
                <p>{titleContainer3}</p>
              </div>
              <div class="inner-box">
                <img alt="" src="https://nctu.edu.vn/videos/icon-layout-sv/dvdaotao.png" />
                <p>{titleContainer4}</p>
              </div>
              <div class="inner-box">
                <img alt="" src="https://nctu.edu.vn/videos/icon-layout-sv/thoikhoabieu.png" />
                <p>{titleContainer5}</p>
              </div>
              <div class="inner-box">
                <img alt="" src="https://nctu.edu.vn/videos/icon-layout-sv/phongqlsv.png" />
                <p>{titleContainer6}</p>
              </div>

              <div class="inner-box">
                <img alt="" src="https://nctu.edu.vn/videos/icon-layout-sv/tthotrosv.png" />
                <p>{titleContainer7}</p>
              </div>
              <div class="inner-box">
                <img alt="" src="https://nctu.edu.vn/videos/icon-layout-sv/congthuvien.png" />
                <p>{titleContainer8 }</p>
              </div>
              <div class="inner-box">
                <img alt="" src="	https://nctu.edu.vn/videos/icon-layout-sv/hotrotimkiemvieclam.png" />
                <p>{titleContainer9}</p>
              </div>
              <div class="inner-box">
                <img alt="" src="https://nctu.edu.vn/videos/icon-layout-sv/danhgiagiangday.png" />
                <p>{titleContainer10}</p>
              </div>
              <div class="inner-box">
                <img alt="" src="	https://nctu.edu.vn/videos/icon-layout-sv/ithotro.png" />
                <p>{titleContainer11}</p>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}