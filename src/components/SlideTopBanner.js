import React, { useEffect, useRef, useState } from "react";
import SlideTopBannerItem from "./SlideTopBannerItem";
import { getBanner, getTopslide } from "../apis/api";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// swiper css
import "swiper/css";
import "swiper/css/pagination";

// 정리 다시해야함.
const SlideTopBanner = () => {
  // js 코드 자리
  const whereTag = useRef(null);
  const [bannerData, setBannerData] = useState([]);
  const swiperOption = {
    loop: true,
    pagination: true,
    // pagination: { el: ".swiper-pagination", clickable: true },
    modules: { Pagination },
  };
  // axios 를 연동하는 경우는 2가지 경우가 많다.
  // 1. 초기 화면 출력용 api (로딩창 ? )
  // 2. 사용자 행동에 따른 api

  // 1번용 axios 를 위해서 useEffect 를 쓴다.
  // axios 를 컴포넌트에서 사용할때 비동기 함수로 처리함.

  const getBannerCall = async () => {
    const result = await getBanner();
    // 화면 갱신을 위해서 useState 로 담아야 한다.
    setBannerData(result);
  };

  useEffect(() => {
    getBannerCall();
    return () => {};
  }, []);
  return (
    <div className="main-top-banner br-20">
      <Swiper className="bannerslide" {...swiperOption}>
        {bannerData.map((item, index, arr) => (
          <SwiperSlide key={index}>
            <SlideTopBannerItem
              url={item.url}
              pic={item.pic}
              title={item.title}
            ></SlideTopBannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideTopBanner;
