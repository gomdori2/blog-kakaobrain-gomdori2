window.addEventListener("load", function () {
  // 브라우저의 스크롤바의 위치를 파악해야함
  // 현재 스크롤바의 위치값 알아내기

  // function은 웬만하면 동사로 짓자
  // scY 즉, 스크롤바의 위치가 0 보다 크면 스크롤 된거다.

  // 변경되는 css 클래스명
  const headerActiveClass = "line-active";

  const header = document.querySelector(".header");
  // 클래스가 적용되는 최소 높이값
  const headerActiveValue = 2500;
  /*
   * 스크롤바의 위치에 따라서 css 적용 함수
   * _html : 대상 html 태그
   * _tgY : css가 적용될 위치 값
   * _active : 적용할 css 클래스명
   * _scY : 스크롤바의 위치
   */
  // 매개변수로 받기에는 문제가 하나있다.
  // _scY 의 _ 는 매개변수 구분해주려고 적어둔 것.
  // 매개변수 순서 1번 대상 2번 목표위치 3번
  const showLine = (_html, _tgY, _active, _scY) => {
    // header 에 라인의 css 를 적용한다.
    if (_scY > _tgY) {
      // header 객체, 즉, DOM 에 css 목록에 추가 하자 (class명)
      _html.classList.add(_active);
    } else {
      // header 객체, 즉, DOM 에 css 목록에 제거 하자 (class명)
      _html.classList.remove(_active);
      // header.classList.toggle("line-active");
      // header.classList.contains("line-active");
    }
  };

  showLine(header, headerActiveValue, headerActiveClass, window.scrollY);

  document.addEventListener("scroll", () => {
    showLine(header, headerActiveValue, headerActiveClass, window.scrollY);
  });
});
// 모바일 메뉴 관련
window.addEventListener("load", function () {
  // 필요로 한 DOM 요소 보관
  // 버튼
  const mbBt = document.querySelector(".mobile-menu a");
  // 배경
  const mbBg = document.querySelector(".mb-header-bg");
  // 메뉴
  const mbMenu = document.querySelector(".mb-header-menu");
  let mbMenuOpen = false;

  // 2. 버튼 기능
  // 2.1. 클릭하면 아이콘을 바꾼다.
  // 2.2. 클릭하면 모바일 메뉴 및 배경을 보여준다.

  mbBt.addEventListener("click", (event) => {
    // a 태그 이므로 웹브라우저가 갱신 된다.
    // a 태그가 작동이 안되도록 기능을 막는다.
    event.preventDefault();
    // 아이콘 바꾸기
    if (mbMenuOpen) {
      mbBt.classList.remove("mobile-menu-open");
      mbBg.classList.remove("mb-header-bg-show");
      mbMenu.classList.remove("mb-Menu-show");
      mbMenuOpen = false;
    } else {
      // 메뉴가 펼침이 아닌데 사용자가 클릭하면 메뉴를 펼침.
      mbBt.classList.add("mobile-menu-open");
      mbBg.classList.add("mb-header-bg-show");
      mbMenu.classList.add("mb-Menu-show");
      mbMenuOpen = true;
    }
  });

  // 반응형 코드
  window.addEventListener("resize", function () {
    const winWidth = window.innerWidth;
    if (winWidth > 1024) {
      if (mbMenuOpen) {
        mbBt.classList.remove("mobile-menu-open");
        mbBg.classList.remove("mb-header-bg-show");
        mbMenu.classList.remove("mb-Menu-show");
        mbMenuOpen = false;
      }
    }
  });
});
