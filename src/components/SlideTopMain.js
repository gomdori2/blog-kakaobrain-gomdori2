import { useEffect, useRef, useState } from "react";
import SlideTopMainItem from "./SlideTopMainItem";
import { getTopSlide } from "../apis/api";
import { Autoplay, Pagination, pagination } from "swiper/modules";
// Swiper npm 사용 - 기본형태
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const SlideTopMain = () => {
  // hook 자리
  const whereTag = useRef(null);
  const slideArea = useRef(null);
  // 슬라이드 데이터 관리 (화면 갱신 반영)
  const [list, setList] = useState([]);
  // swiper 로 만든 html 을 제어한다.
  const topSlide = useRef(null);
  const swiperOption = {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    modules: [Autoplay, Pagination],
    onInit: swiper => {
      topSlide.current = swiper;
    },
  };

  const getTopslideCall = async () => {
    const result = await getTopSlide();
    setList(result);

    // const slideArea = document.querySelector(".topslide");
    slideArea.current.addEventListener("mouseenter", function () {
      topSlide.current.autoplay.stop();
    });
    slideArea.current.addEventListener("mouseleave", function () {
      topSlide.current.autoplay.start();
    });
  };
  useEffect(() => {
    getTopslideCall();

    return () => {};
  }, []);

  return (
    <div className="main-top-slide br-20">
      <Swiper className="topslide" ref={slideArea} {...swiperOption}>
        {/* 아이템 배치 : 리액트 반복문은 key 가 필요하다. */}
        {list.map((item, index, arr) => (
          // map 돌리는 컴포넌트 빼야함.
          // swiper slide
          <SwiperSlide key={index}>
            <SlideTopMainItem
              url={item.url}
              pic={item.pic}
              title={item.title}
            ></SlideTopMainItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideTopMain;
