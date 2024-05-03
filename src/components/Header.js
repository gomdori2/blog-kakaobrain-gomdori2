import React, { useEffect, useRef } from "react";
import "../css/header.css";
const Header = () => {
  // js 코딩 자리
  // JSX Element 렌더링 완료 시 - UI 용 / 애니메이션
  const header = useRef(null);
  useEffect(() => {
    //const header = document.querySelector(".header");
    const headerActiveClass = "line-active";
    const headerActiveValue = 0;
    // 주석은 퍼블릭 header.js 참조
    const showLine = (_html, _tgY, _active, _scY) => {
      if (_scY > _tgY) {
        _html.classList.add(_active);
      } else {
        _html.classList.remove(_active);
      }
    };
    showLine(
      header.current,
      headerActiveValue,
      headerActiveClass,
      window.scrollY
    );
    window.addEventListener("scroll", () => {
      showLine(
        header.current,
        headerActiveValue,
        headerActiveClass,
        window.scrollY
      );
    });
    return () => {
      window.removeEventListener("scroll", () => {
        showLine(
          header.current,
          headerActiveValue,
          headerActiveClass,
          window.scrollY
        );
      });
    };
  }, []);

  // json 연동 시 - 빽엔드 연동 >
  // fetch로 했다가 exios로 고친다.
  const json = useEffect(() => {}, []);
  // animation

  return (
    <header ref={header} className="header">
      {/* <!-- 상단 로고 --> */}
      <div className="inner">
        <div className="header-logo">
          <a className="header-logo-link" href="index.html">
            <img
              src="./www/images/etc/logo-kakao.png"
              alt="카카오브레인 블로그"
              className="header-logo-img"
            />
            {/* <!-- start 로고 슬라이드 교수님 컨벤션 id = js / className = css --> */}
            {/* <!-- end 로고 슬라이드 --> */}
            <div className="header-logo-slide" id="logo-slide">
              {/* <!-- swlogo -> swiper-logo --> */}
              <div className="swiper swlogo">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      src="./www/images/etc/logo-blog01.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./www/images/etc/logo-blog02.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./www/images/etc/logo-blog03.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./www/images/etc/logo-blog04.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./www/images/etc/logo-blog05.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./www/images/etc/logo-blog06.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./www/images/etc/logo-blog07.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./www/images/etc/logo-blog08.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./www/images/etc/logo-blog09.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* <!-- 상단 메뉴 > nav = navigation --> */}
        <nav className="header-navi">
          <ul className="navi-list">
            <li>
              <a href="#">소식</a>
            </li>
            <li>
              <a href="#">팀&크루</a>
            </li>
            <li>
              <a href="#">영입</a>
            </li>
            <li className="navi-search">
              <a href="#"></a>
            </li>
            <li className="mobile-menu">
              <a href="#"></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
