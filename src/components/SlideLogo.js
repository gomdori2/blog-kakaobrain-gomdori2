import React, { useEffect, useRef, useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// swiper css
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const SlideLogo = ({ isOver }) => {
  const [logoSlide, setLogoSlide] = useState(null);
  // swiper 를 저장한다
  // html 의 swiper를 모듈로 삽입을 하면
  // 최종적으로 html 생성됨
  // 그래서,
  const swLogoSlide = useRef(null);
  const headerLogoLink = useRef(null);
  const imgArr = [
    "logo-blog01.png",
    "logo-blog02.png",
    "logo-blog03.png",
    "logo-blog04.png",
    "logo-blog05.png",
    "logo-blog06.png",
    "logo-blog07.png",
    "logo-blog08.png",
    "logo-blog09.png",
  ];
  // Swiper 의 옵션은 별도로 변수에 담아서 관리 추천
  const swiperOption = {
    speed: 500,
    effect: "fade",
    autoplay: { delay: 1000, disableOnInteraction: false },
    modules: [EffectFade, Autoplay],
    onInit: swiper => {
      // 매개변수 swiper 는
      // 현재 생성된 슬라이드를 말함.
      swiper.autoplay.stop();
      swLogoSlide.current = swiper;
    },
  };
  // js 코드 자리
  //   const headerLogoLink = useRef(null);

  useEffect(() => {
    headerLogoLink.current;
    return () => {};
  }, []);

  return (
    // 상위에 제어해야함.
    <div
      className="header-logo-slide"
      id="logo-slide"
      onMouseEnter={() => {
        swLogoSlide?.current.autoplay.start();
      }}
      onMouseLeave={() => {
        swLogoSlide?.current.autoplay.stop();
        swLogoSlide?.current.slideTo(0);
      }}
    >
      {/* swiper 제공 컴포넌트 */}
      {/* 안에 속성들을 객체리터럴로 만든 후 적용 시킨다. */}
      <Swiper {...swiperOption}>
        {imgArr.map((item, index) => (
          <SwiperSlide key={index} style={{ background: "#fff" }}>
            <img src={`./images/etc/${item}`} alt="카카오브레인 블로그" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideLogo;
