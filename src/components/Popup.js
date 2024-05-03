import React, { useEffect, useRef } from "react";
import "../css/popup.css";
const Popup = () => {
  // 자바스크립트 코드 자리
  // 리액트에서 화면에 컴포넌트 그린 렌더링 된 시점.
  // DOM에서 그려지는건 루트만 그려진다.
  // useEffect <==> window.addEventListener("load", function () {}); 다르다.
  // load는 html 렌더링 / Effect는 리액트 기반 렌더링
  // 렌더링 되는 과정
  // 꼭 DOM 이벤트 시점을 console.log() 찍어보자.
  // 리액트는 첫 시점에 로드 한번만 해준다.
  // 이 후 useEffect는 리액트 컴포넌트만 불러오는거 같음

  // html 태그를 찾을 때는 useRef 를 사용하자. 변수/html 참조한다.
  // useEffect가 끝난시점에 html 렌더링이 끝남.
  // useRef(null); 이렇게 적자.
  // 이유 : 아직 렌더링이 덜 끝난 시점이기 때문임.
  const closeBt = useRef(null);
  const popup = useRef(null);
  console.log(popup.current);
  // 창닫기 버튼 html 태그 찾기
  // 문제 해결을 위해 console.log를 찍어본다.
  useEffect(() => {
    console.log("렌더링");
    // useRef로 대체함.
    // const closeBt = document.querySelector(".popup-close");
    // useRef로 참조한 태그는 DOM 요소가 아니다.
    // 그래서 document에서 사용되는 메서드를 사용못한다.

    // 제발 좀 선언된거 지우고 좀 해라.
    // const popup = document.querySelector(".popup");
    const closeBt_Element = closeBt.current;
    const popup_Element = popup.current;

    // 펑션 쓰면 좋은점.
    // 1. 가독성
    // 2. 재활용
    // 3. 유지보수
    const handleClick = () => {
      if (popup_Element) popup_Element.style.display = "none";
    };

    if (closeBt_Element) {
      closeBt_Element.addEventListener("click", () => handleClick());
    }
    // cleanUp 함수 : 컴포넌트가 파괴될 때 반드시 실행
    // js 가 남아 있기 때문에 의미없는 작업 못하게 죽여놔야함
    return () => {
      // 실행중에 current에 대한 값이 없으면 어떻게 할껀데
      // removeEventListener 이벤트 삭제
      // 있으면 지워라. 없으면 지울 필요가 없음.
      if (closeBt_Element) {
        closeBt_Element.removeEventListener("click", () => handleClick());
      }
    };
  }, []);

  window.addEventListener("load", function () {
    console.log("로드완료");
  });
  return (
    // <!-- 저작권 안내 -->
    <div ref={popup} className="popup">
      <div className="popup-content">
        <p>
          <strong>
            해당 사이트는 스터디용으로 제작되었으며, 모든 리소스의 저작권은
            원저작자에게 있습니다.
            <br />
            * 본 사이트는 Chrome 에 최적화되어 있습니다. <br />* 해당 사이트와
            관련한 문제가 있으면 여기로 연락바랍니다
          </strong>
        </p>
        {/* ref={closeBt} js 넣어야해서 {} 이걸로 넣음. */}
        <button className="popup-close" ref={closeBt}>
          <b>❌</b>
        </button>
      </div>
    </div>
  );
};

export default Popup;
