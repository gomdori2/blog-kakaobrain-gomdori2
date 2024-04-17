/*
-- 의사코드
상단 로고 기능
처음에는 로고가 기본 그림이 보인다.
사용자가 마우스 오버를 하면 로고가 부드럽게 변경된다.
사용자가 마우스 아웃을 하면 로고가 첫 기본 그림으로 보인다.
-- 구현
나는 위의 기능을 구현하기 위해서 Swiper 라이브러리를 사용할 예정이다.
이유는 React 로 마이그레이션 할 거니까.
    1. 라이브러리를 사용하려면 레퍼런스를 참조해야 한다.
        https://swiperjs.com/swiper-api
    2. 
    3.  
*/
// 과연 swlogo 라는 html 클래스를 찾을 수 있을까?
// 증명해보자.
// css 형식으로 찾아가라.
// const swLogo = document.querySelector(".swlogo");

// 변수 만들기
// let      : 변경되는 값.
// const    : html을 참조할 때 /  / 상수
// 일단 const로 > 안되면 let으로
// 두번이상 사용할 거면 변수로 담아두곡 사용
//       3       2       1 순으로 해석 했으면 좋겠다.
// 무엇을 logoSlide에 할당(assigment)
// 만약 html 태그를 참조해야 하는 경우라면

// 1. html 태그 제일 뒷쪽에서 참조한다. (비 추천)
// 2. window.onload = function(){ 코드 } (비 추천)
// 3. window.addEventListener("load", function(){코드}) (적극추천))

// load가 된 후에 js를 실행해라
// 아래 구문은 html 태그, css 파일, image 파일, js 파일 등이 로드완료 시 실행
// 리소스 준비된 후 실행
window.addEventListener("load", function () {
  const logoSlide = new Swiper(".swlogo", {
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
  });
  // 무조건 모션이 재생되면 안됨.
  // 위에 var logoSlide의 객체 내부 메서드 실행
  logoSlide.autoplay.stop();

  // 사용자가 마우스 오버 하면 모션 재생
  // .header-logo-link 클래스에 마우스 오버하면 logoSlide 가 모션 재생

  const headerLogoLink = document.querySelector(".header-logo-link");
  headerLogoLink.addEventListener("mouseenter", function () {
    logoSlide.autoplay.start();
  });

  headerLogoLink.addEventListener("mouseleave", function () {
    logoSlide.autoplay.stop();
    // 첫번째 이미지로 돌려야함. 0번
    logoSlide.slideTo(0);
  });

  // addEventListener로 제어하면 2개 다 가능.
  // 한줄로 하면 덮어씀.
  // window.onload = function () {
  //   console.log("와우");
  // };

  // window.onload = function () {
  //   console.log("zz");
  // };
});
