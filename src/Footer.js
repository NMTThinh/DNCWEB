import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer({
  titleFooter1,
  titleFooter2,
  titleFooter3,
  titleFooter4,
  titleFooter5,
  titleFooter6,
  titleFooter7,
  titleFooter8,
  titleFooter9,
  titleFooter10,
  titleFooter11,
  titleFooter12,
  titleFooter13,
  titleFooter14,
  titleFooter15,
  titleFooter16,
  titleFooter17,
  titleFooter18,
  titleFooter19,
}) {
  return (
    <>
      <div className="footer">
        <div className="image-footer">
          <img
            alt=""
            src="	https://nctu.edu.vn/uploads/page/2023_10/lg-dnc-pad0.png"
          />
        </div>
        <div className="body-footer">
          <div className="inner-box-footer">
            <span>{titleFooter1}</span>
            <p>{titleFooter2}</p>
            <p>{titleFooter3}</p>
            <p>{titleFooter4}</p>
            <p>{titleFooter5}</p>
            <p>{titleFooter6}</p>
            <p>{titleFooter7}</p>
            <p>{titleFooter8}</p>
          </div>
          <div className="inner-box-footer">
            <span>{titleFooter9}</span>
            <p>{titleFooter10}</p>
            <p>{titleFooter11}</p>
            <p>{titleFooter12}</p>
            <p>{titleFooter13}</p>
            <p>{titleFooter14}</p>
          </div>
          <div className="inner-box-footer">
            <span>{titleFooter15}</span>
            <p>
              <FaPhoneAlt /> {titleFooter16}
            </p>
            <p>
              <CgMail /> {titleFooter17}
            </p>
            <p>
              <FaLocationDot />
              {titleFooter18}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <img
              alt=""
              src="	https://nctu.edu.vn/videos/logo-doitac/instaicon.png"
            ></img>
            <img
              alt=""
              src="	https://nctu.edu.vn/videos/logo-doitac/tiktokicon.png"
            ></img>
            <img
              alt=""
              src="	https://nctu.edu.vn/videos/logo-doitac/facebookicon.png"
            ></img>
            <img
              alt=""
              src="	https://nctu.edu.vn/videos/logo-doitac/youtubeicon.png"
            ></img>
            <img
              alt=""
              src="	https://nctu.edu.vn/videos/logo-doitac/zaloicon.png"
            ></img>
          </div>
          <div2>{titleFooter19}</div2>
        </div>
      </div>
    </>
  );
}
