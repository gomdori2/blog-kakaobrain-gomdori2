import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer.js";
import Header from "./components/Header";
import Main from "./components/Main.js";
import MbHeader from "./components/MbHeader.js";
import Popup from "./components/Popup.js";
import "./css/common.css";
import "./css/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 파일로 만드는게 관례 : 모듈
// html의 모양
// html을 돌려주는 형태
// 이것을 파일로 별도로 뽑는다.
const Wrap = () => {
  const [mbMenuOpen, setMbMenuOpen] = useState(false);
  const clickMbbt = () => {
    setMbMenuOpen(prev => {
      return !prev;
    });
  };

  return (
    <div className="wrap">
      {/* 호출한 값 */}
      {/* 앞에 있는 애가 매개변수 명임. 
        clickMbbt={clickMbbt} 
    */}
      <Header clickMbbt={clickMbbt} mbMenuOpen={mbMenuOpen}></Header>
      <MbHeader mbMenuOpen={mbMenuOpen} setMbMenuOpen={setMbMenuOpen} />
      <Main></Main>
      <Footer />
    </div>
  );
};
root.render(
  <>
    <Popup />
    <Wrap />
  </>,
);
