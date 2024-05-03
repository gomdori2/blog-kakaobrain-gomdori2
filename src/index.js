import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main.js";
import MbHeader from "./components/MbHeader.js";
import Footer from "./components/Footer.js";
import Popup from "./components/Popup.js";
import "./css/reset.css";
import "./css/common.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 파일로 만드는게 관례 : 모듈
// html의 모양
// html을 돌려주는 형태
// 이것을 파일로 별도로 뽑는다.

root.render(
  <>
    <Popup />
    <div className="wrap">
      {/* 호출한 값 */}
      <Header />
      <MbHeader />
      <Main></Main>
      <Footer />
    </div>
  </>
);
