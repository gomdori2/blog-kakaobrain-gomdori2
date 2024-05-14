import React, { useEffect, useRef } from "react";

const SlideTopBanner = () => {
  const eventConTag = useRef(null);
  const slideTag = useRef(null);

  useEffect(() => {
    const dataUrl = "./apis/banner.json";
    fetch(dataUrl)
      .then(reponse => {
        const result = reponse.json();
        return result;
      })
      .then(result => {
        console.log(result);
        let tags = "";
        result.forEach(item => {
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

        slideTag.current.innerHTML = tags;

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
        eventConTag.current.addEventListener("mouseenter", function () {
          bannerSlide.autoplay.start();
        });

        eventConTag.current.addEventListener("mouseleave", function () {
          bannerSlide.autoplay.stop();
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="main-top-banner br-20" ref={eventConTag}>
      {/* <!-- Start 타이틀 배너 --> */}
      <div className="swiper bannerslide" ref={slideTag}>
        <div className="swiper-wrapper">{/* <!-- 외부 데이터 연동 --> */}</div>
        <div className="swiper-pagination"></div>
      </div>
      {/* <!-- End 타이틀 배너 --> */}
    </div>
  );
};

export default SlideTopBanner;
