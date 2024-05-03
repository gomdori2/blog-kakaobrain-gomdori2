import React from "react";

// 프라그먼트는 html 요소에 변화를 주지않음.
const MbHeader = () => {
  return (
    <>
      <div className="mb-header-bg"></div>
      <div className="mb-header-menu">
        <div className="inner">
          <ul className="mb-nav">
            <li>
              <a href="#">소식</a>
            </li>
            <li>
              <a href="#">팀 & 크루</a>
            </li>
            <li>
              <a href="#">영입</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MbHeader;
