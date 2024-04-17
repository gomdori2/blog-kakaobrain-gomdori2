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

      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const temp = `<div class="swiper-slide">
        <a href="${obj.url}" style="background : url('./images/${obj.pic}') no-repeat center; background-size : cover;">
          <p class="slide-title">${obj.title}</p>
        </a>
      </div>`;
        tags += temp;
      }

      const whereTag = document.querySelector(".bannerslide .swiper-wrapper");
      whereTag.innerHTML = tags;

      const bannerSlide = new Swiper(".bannerslide", {
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
      // whereTag.addEventListener("mouseenter", function () {
      //   bannerSlide.autoplay.start();
      // });

      // whereTag.addEventListener("mouseleave", function () {
      //   bannerSlide.autoplay.stop();
      // });
    })
    .catch((error) => {
      console.log(error);
    });
});
