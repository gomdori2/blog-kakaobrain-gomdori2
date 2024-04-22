window.addEventListener("load", () => {
  // 할일
  const dataUrl = "./apis/banner.json";
  fetch(dataUrl)
    .then((reponse) => {
      const result = reponse.json();
      return result;
    })
    .then((result) => {
      let tags = "";
      result.forEach((item) => {
        const temp = `<div class="swiper-slide">
        <a href="${item.url}" style="background : url('./images/${item.pic}') no-repeat center; background-size : cover;">
          <p class="slide-title">${item.title}</p>
        </a>
      </div>`;
        tags += temp;
      });
      // for (let i = 0; i < result.length; i++) {
      //   const obj = result[i];
      //   const temp = `<div class="swiper-slide">
      //   <a href="${obj.url}" style="background : url('./images/${obj.pic}') no-repeat center; background-size : cover;">
      //     <p class="slide-title">${obj.title}</p>
      //   </a>
      // </div>`;
      //   tags += temp;
      // }

      const whereTag = {
        slideTag: document.querySelector(".bannerslide .swiper-wrapper"),
        eventConTag: document.querySelector(".main-top-slide"),
      };

      whereTag.slideTag.innerHTML = tags;

      const bannerSlide = new Swiper(".bannerslide", {
        loop: true,
        speed: 800,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      whereTag.eventConTag.addEventListener("mouseenter", function () {
        bannerSlide.autoplay.start();
      });

      whereTag.eventConTag.addEventListener("mouseleave", function () {
        bannerSlide.autoplay.stop();
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
