import Top from "./Top";
import Banner from "./Banner";
import Container from "./Container";
import MoreStudent from "./MoreStudent";
import Event from "./Event";
import Footer from "./Footer";
import { useState } from "react";
export default function App() {
  //Top
  // State để quản lý các tiêu đề
  const [titles, setTitles] = useState([
    "Trang chủ",
    "Tra Cứu",
    "Sinh viên",
    "CB-GV",
    "Cựu sinh viên",
    "GIỚI THIỆU",
    "TUYỂN SINH",
    "ĐÀO TẠO",
    "ĐỜI SỐNG SINH VIÊN",
    "NGHIÊN CỨU KHOA HỌC",
    "TIN TỨC & THÔNG BÁO",
    "VSTEP",
  ]);
  // Hàm để cập nhật tiêu đề
  const handleTitleChange = (index, newTitle) => {
    const newTitles = [...titles];
    newTitles[index] = newTitle;
    setTitles(newTitles);
  };
  //Banner
  const [titleBanners, setTitleBanners] = useState([
    "CÔNG TÁC SV",
    "HỖ TRỢ SV",
    "CLB SV",
    "GT VIỆC LÀM",
    "THÔNG BÁO",
  ]);
  const TitleBannerChange = (index, newTitleBanner) => {
    const newTitleBanners = [...titleBanners];
    newTitleBanners[index] = newTitleBanner;
    setTitleBanners(newTitleBanners);
  };
  //Container
  const [titleContainers, setTitleContainers] = useState([
    "Công cụ ",
    "Cổng thông tin sinh viên",
    "E-learning",
    "Đăng ký học phần",
    "Thời khóa biểu",
    "Xác nhận sinh viên tại trường",
    "Cổng thông tin hỗ trợ",
    "Cổng Thư viện",
    "Hỗ trợ việc làm",
    "Đánh giá giảng dạy",
    "IT Hỗ trợ",
  ]);
  const titleContainerChange = (index, newTitleContainer) => {
    const newTitleContainers = [...titleContainers];
    newTitleContainers[index] = newTitleContainer;
    setTitleContainers(newTitleContainers);
  };
  //More Student
  const [titleMoreStudents, setTitleMoreStudents] = useState([
    "Đời sống sinh viên",
    "Việc làm sinh viên",
    "Hỗ trợ sinh viên",
    'Thông tin',
  ]);
  const titleMoreStudentChange = (index, newTitleMoreStudent) => {
    const newTitleMoreStudents = [...titleMoreStudents];
    newTitleMoreStudents[index] = newTitleMoreStudent;
    setTitleMoreStudents(newTitleMoreStudents);
  };
  //Event 
  const [titleEvents, setTitleEvents] = useState([
    "Lịch sự kiện",

    "Hội đồng Nghiệm thu giáo trình, nghiệm thu đề tài…",
    '23/07/2024 - 26/07/2024',
    "Talkshow - Chắp cánh ước mơ y khoa: Viêm phổi ở trẻ…",
    '20/07/2024',
    'DNC nhận hồ sơ xét tuyển cả ngày thứ bảy, chủ nhật',
    '01/06/2024 - 31/08/2024',
    "Lễ trao bằng tốt nghiệp Tân Bác Sĩ Y Khoa",
    '05/07/2024',

    "Hội thảo khoa học quốc tế về chủ đề: “Phát triển bền…",
    '08/11/2024 - 09/11/2024',
    'Hội thảo Khoa học “Phát triển Kinh tế & Tài chính…',
    '29/06/2024',
    'Hành trình về nguồn 2024 với chủ đề "Việt Nam sứ mệnh…',
    '30/06/2024',
    "Câu lạc bộ Tiếng anh Pháp lý tổ chức sinh hoạt với…",
    '26/06/2024',
  ]);
  const titleEventChange = (index, newTitleEvent) => {
    const newTitleEvents = [...titleEvents];
    newTitleEvents[index] = newTitleEvent;
    setTitleEvents(newTitleEvents);
  };
  //Footer
  const [titleFooters, setTitleFooters] = useState([
    "Truy cập nhanh",
    "Tuyển sinh",
    "VSTEP",
    'Lịch thi',
    "Thời khóa biểu",
    "Cổng thông tin sinh viên",
    "Thông báo mới",
    'Thư viện',

    "Về Đại học Nam Cần Thơ",
    "Tin tức",
    "Tuyển dụng",
    'Cơ sở vật chất',
    "Mô hình doanh nghiệp",
    "Kiểm định chất lượng",
    
    "Về Đại học Nam Cần Thơ",
    " (0292) 3 798 222- 3 798 668",
    "dnc@moet.edu.vn",
    '168, Nguyễn Văn Cừ (nối dài), P. An Bình, Q. Ninh Kiều, TP. Cần Thơ',
    'CopyRight © 2024 Trường Đại học Nam Cần Thơ',
  ]);
  const titleFooterChange = (index, newTitleFooter) => {
    const newTitleFooters = [...titleFooters];
    newTitleFooters[index] = newTitleFooter;
    setTitleFooters(newTitleFooters);
  };
  return (
    <>
      <div className="top">
        <Top
          title1={titles[0]}
          title2={titles[1]}
          title3={titles[2]}
          title4={titles[3]}
          title5={titles[4]}
          title6={titles[5]}
          title7={titles[6]}
          title8={titles[7]}
          title9={titles[8]}
          title10={titles[9]}
          title11={titles[10]}
          title12={titles[11]}
          title13={titles[12]}
        />
      </div>
      <body>
        <Banner
          titleBanner1={titleBanners[0]}
          titleBanner2={titleBanners[1]}
          titleBanner3={titleBanners[2]}
          titleBanner4={titleBanners[3]}
          titleBanner5={titleBanners[4]}
          titleBanner6={titleBanners[5]}
        />
        <Container
          titleContainer1={titleContainers[0]}
          titleContainer2={titleContainers[1]}
          titleContainer3={titleContainers[2]}
          titleContainer4={titleContainers[3]}
          titleContainer5={titleContainers[4]}
          titleContainer6={titleContainers[5]}
          titleContainer7={titleContainers[6]}
          titleContainer8={titleContainers[7]}
          titleContainer9={titleContainers[8]}
          titleContainer10={titleContainers[9]}
          titleContainer11={titleContainers[10]}
        />
        <MoreStudent
          titleMoreStudent1={titleMoreStudents[0]}
          titleMoreStudent2={titleMoreStudents[1]}
          titleMoreStudent3={titleMoreStudents[2]}
          titleMoreStudent4={titleMoreStudents[3]}
        />
        <Event 
        titleEvent1={titleEvents[0]}
        
        titleEvent2={titleEvents[1]}
        titleEvent3={titleEvents[2]}
        titleEvent4={titleEvents[3]}
        titleEvent5={titleEvents[4]}
        titleEvent6={titleEvents[5]}
        titleEvent7={titleEvents[6]}
        titleEvent8={titleEvents[7]}
        titleEvent9={titleEvents[8]}

        titleEvent10={titleEvents[1]}
        titleEvent11={titleEvents[10]}
        titleEvent12={titleEvents[11]}
        titleEvent13={titleEvents[12]}
        titleEvent14={titleEvents[13]}
        titleEvent15={titleEvents[14]}
        titleEvent16={titleEvents[15]}
        titleEvent17={titleEvents[16]}
        />  
      </body>
      <Footer
       titleFooter1={titleFooters[0]}
       titleFooter2={titleFooters[1]}
       titleFooter3={titleFooters[2]}
       titleFooter4={titleFooters[3]}
       titleFooter5={titleFooters[4]}
       titleFooter6={titleFooters[5]}
       titleFooter7={titleFooters[6]}
       titleFooter8={titleFooters[7]}

       titleFooter9={titleFooters[8]}
       titleFooter10={titleFooters[9]}
       titleFooter11={titleFooters[10]}
       titleFooter12={titleFooters[11]}
       titleFooter13={titleFooters[12]}
       titleFooter14={titleFooters[13]}

       titleFooter15={titleFooters[14]}
       titleFooter16={titleFooters[15]}
       titleFooter17={titleFooters[16]}
       titleFooter18={titleFooters[17]}
       
       titleFooter19={titleFooters[18]}/>
    </>
  );
}
