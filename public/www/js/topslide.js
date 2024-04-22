// DOM 을 다루려고 하는 목적인 경우

window.addEventListener("load", function () {
  // 1. 외부에서 자료를 불러온다.
  const dataUrl = "./apis/topslide.json";

  fetch(dataUrl)
    .then((response) => {
      // Step 1. 자료 받아서 json 변경하기

      // 이 문장은 변경 X

      // json은 내려온 데이터를 문자열(토큰) 배열로 바꿈.
      // 자바스크립트의 문법(syntax)로 바꿔서 해준다.
      const data = response.json();
      //   console.log(response);
      // 변환된 결과를 돌려주기
      return data;
    })
    .then((result) => {
      // Step 2. json 변경된 데이터 활용하기.
      // 전체 글자 모음
      let slideTags = "";

      result.forEach((item) => {
        const aaa = `<div class="swiper-slide">
                            <a href="${item.url}" style="background : url('./images/${item.pic}') no-repeat center; background-size : cover;">
                                <p class="slide-title">
                                    ${item.title}
                                </p>
                            </a>
                        </div>`;
        slideTags += aaa;
      });

      // 템플릿 문법(``) 필요
      // 원하는 장소에 출력해 보자.
      // 2. 자료를 이용해서 슬라이드에 배치할 html 을 만든다.
      const whereTag = {
        slideTag: document.querySelector(".topslide .swiper-wrapper"),
        eventConTag: document.querySelector(".main-top-slide"),
      };
      whereTag.slideTag.innerHTML = slideTags;

      // 3. html 완성 후 swiper 를 생성한다.
      // 기본코드를 넣어보자

      const topSlide = new Swiper(".topslide", {
        loop: true,
        speed: 800,
        autoplay: {
          delay: 2500,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      whereTag.eventConTag.addEventListener("mouseenter", function (e) {
        topSlide.autoplay.stop();
      });

      whereTag.eventConTag.addEventListener("mouseleave", function () {
        topSlide.autoplay.start();
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
