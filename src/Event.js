import "./Event.css";
import { FaCalendarAlt } from "react-icons/fa";
export default function Event({
  titleEvent1,
  titleEvent2,
  titleEvent3,
  titleEvent4,
  titleEvent5,
  titleEvent6,
  titleEvent7,
  titleEvent8,
  titleEvent9,
  titleEvent10,
  titleEvent11,
  titleEvent12,
  titleEvent13,
  titleEvent14,
  titleEvent15,
  titleEvent16,
  titleEvent17,
  titleEvent18,
}) {
  return (
    <>
      <div className="event">
        <div className="event-item-1">{titleEvent1}</div>
        <div className="event-item-2">
          <div class="menu-event">
            <img
              alt=""
              src="https://nctu.edu.vn/uploads/page/2024_07/hoidongdecuongduoc-bia_thumb.jpg"
            />
            <text>{titleEvent2}</text>
            <p>
              <FaCalendarAlt color="#293B8F" /> {titleEvent3}
            </p>
          </div>
          <div class="menu-event">
            <img
              alt=""
              src="https://nctu.edu.vn/uploads/page/2024_07/talkshow-viemphoiotreem_thumb.jpg"
            />
            <text>{titleEvent4}</text>
            <p>
              <FaCalendarAlt color="#293B8F" /> {titleEvent5}
            </p>
          </div>
          <div class="menu-event">
            <img
              alt=""
              src="https://nctu.edu.vn/uploads/page/2024_06/nhanhosocangay_thumb.jpg"
            />
            <text>{titleEvent6}</text>
            <p>
              <FaCalendarAlt color="#293B8F" /> {titleEvent7}
            </p>
          </div>
          <div class="menu-event">
            <img
              alt=""
              src="https://nctu.edu.vn/uploads/page/2024_07/bannerTN19201080-Final_thumb.png"
            />
            <text>{titleEvent8}</text>
            <p>
              <FaCalendarAlt color="#293B8F" /> {titleEvent9}
            </p>
          </div>

          <div class="menu-event">
            <img
              alt=""
              src="	https://nctu.edu.vn/uploads/page/2024_07/hoithao0724_thumb.jpg"
            />
            <text>{titleEvent10}</text>
            <p>
              <FaCalendarAlt color="#293B8F" /> {titleEvent11}
            </p>
          </div>
          <div class="menu-event">
            <img
              alt=""
              src="https://nctu.edu.vn/uploads/page/2024_06/ptrienkt4-0_thumb.jpg"
            />
            <text>{titleEvent12}</text>
            <p>
              <FaCalendarAlt color="#293B8F" /> {titleEvent13}
            </p>
          </div>
          <div class="menu-event">
            <img
              alt=""
              src="https://nctu.edu.vn/uploads/page/2024_06/vnsumenhvinhquang-bia_thumb.jpg"
            />
            <text>{titleEvent14}</text>
            <p>
              <FaCalendarAlt color="#293B8F" /> {titleEvent15}
            </p>
          </div>
          <div class="menu-event">
            <img
              alt=""
              src="	https://nctu.edu.vn/uploads/page/2024_06/english-khoaluat-bia_thumb.jpg"
            />
            <text>{titleEvent16}</text>
            <p>
              <FaCalendarAlt color="#293B8F" /> {titleEvent17}
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
