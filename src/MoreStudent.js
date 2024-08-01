import React from 'react'
import './MoreStudent.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
export default function MoreStudent({titleMoreStudent1,titleMoreStudent2,titleMoreStudent3,titleMoreStudent4}){
    return(
        <>
         <div className="student">
          <div className="inner-students">
            <div className="inner-student">
              <img alt="" src="	https://nctu.edu.vn/uploads/page/2024_07/doisongsinhvien-student.jpg" />
              <div className="title-student">{titleMoreStudent1}</div>
            </div>
            <div className="inner-student">
              <img alt="" src="https://nctu.edu.vn/uploads/studentpage/2024_07/sinhvien-more-2.jpg" />
              <div className="title-student">{titleMoreStudent2}</div>
            </div>
            <div className="inner-student">
              <img alt="" src="https://nctu.edu.vn/uploads/studentpage/2024_07/sinhvien-more-3.jpg" />
              <div className="title-student">{titleMoreStudent3}</div>
            </div>
          </div>
        </div>

        <div className="calendar">
          <div className="calendar-item-1">{titleMoreStudent4}</div>
          <div className="calendar-item-2">
            <div className="calendar-inner-1">
              <div>Không có kết quả được tìm thấy.</div>
            </div>
            <div className="calendar-inner-2">
              <div class="lich">
                <div class="calendar-header">
                  <FaArrowLeft size={24} color="#B7B7B7" />
                  <span>Tháng 7, 2024</span>
                  <FaArrowRight size={24} color="#B7B7B7" />
                </div>
                <div class="calendar-body">
                  <div class="calendar-day">T2</div>
                  <div class="calendar-day">T3</div>
                  <div class="calendar-day">T4</div>
                  <div class="calendar-day">T5</div>
                  <div class="calendar-day">T6</div>
                  <div class="calendar-day">T7</div>
                  <div class="calendar-day">CN</div>

                  <div class="calendar-date">1</div>
                  <div class="calendar-date">2</div>
                  <div class="calendar-date">3</div>
                  <div class="calendar-date">4</div>
                  <div class="calendar-date">5</div>
                  <div class="calendar-date">6</div>
                  <div class="calendar-date">7</div>
                  <div class="calendar-date">8</div>
                  <div class="calendar-date">9</div>
                  <div class="calendar-date">10</div>
                  <div class="calendar-date">11</div>
                  <div class="calendar-date">12</div>
                  <div class="calendar-date">13</div>
                  <div class="calendar-date">14</div>
                  <div class="calendar-date">15</div>
                  <div class="calendar-date">16</div>
                  <div class="calendar-date">17</div>
                  <div class="calendar-date">18</div>
                  <div class="calendar-date">19</div>
                  <div class="calendar-date">20</div>
                  <div class="calendar-date">21</div>
                  <div class="calendar-date">22</div>
                  <div class="calendar-date">23</div>
                  <div class="calendar-date">24</div>
                  <div class="calendar-date">25</div>
                  <div class="calendar-date">26</div>
                  <div class="calendar-date">27</div>
                  <div class="calendar-date">28</div>
                  <div class="calendar-date">29</div>
                  <div class="calendar-date">30</div>
                  <div class="calendar-date">31</div>
                </div>
                <div className="bottom-calendar">
                  <div>
                    <brgblue> </brgblue>
                    Lịch Thi
                  </div>
                  <div>
                    <brggreen> </brggreen>
                    Thời khóa biểu
                  </div>
                  <div>
                    <brgogrange> </brgogrange>
                    Thông báo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}