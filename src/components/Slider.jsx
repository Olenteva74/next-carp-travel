"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, FreeMode, Navigation, A11y } from "swiper/modules";

export const Slider = () => {
  const swiperRef = useRef();
  return (
    <div className="hidden md:flex h-[294px] xl:h-[447px]">
      <div className="w-[120px] xl:w-[313px] flex flex-col justify-end">
        <div className="opacity-20 w-full h-[87px] xl:h-[225px] mb-[47px] xl:mb-[70px]">
          <picture>
            <source src="/mountain-mobile.jpg" media="(max-width: 1279px)" />
            <source src="/mountain-tablet.jpg" media="(min-width: 1280px)" />
            <img
              src="/mountain-tablet.jpg"
              alt="high angle shot beautiful mountainous landscape with hills cloudy sky"
            />
          </picture>
        </div>
        <div className="mb-[17px] xl:mb-0 text-[33px] font-thin text-end hover:opacity-40">
          <button type="button" onClick={() => swiperRef.current?.slidePrev()}>
            {" "}
            BACK
          </button>
        </div>
      </div>

      <div className="grow px-6 w-[415px] xl:w-[606px]">
        <Swiper
          loop={true}
          spaceBetween={10}
          effect={"fade"}
          modules={[EffectFade, FreeMode, Navigation, A11y]}
          navigation={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <picture>
              <source src="/mountain-tablet.jpg" media="(max-width: 1279px)" />
              <source src="/mountain-desktop.jpg" media="(min-width: 1280px)" />
              <img
                src="/mountain-desktop.jpg"
                alt="high angle shot beautiful mountainous landscape with hills cloudy sky"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source src="/lake-tablet.jpg" media="(max-width: 1279px)" />
              <source src="/lake-desktop.jpg" media="(min-width: 1280px)" />
              <img
                src="/lake-desktop.jpg"
                alt="breathtaking view lake high carpathian mountains"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source src="/village-tablet.jpg" media="(max-width: 1279px)" />
              <source src="/village-desktop.jpg" media="(min-width: 1280px)" />
              <img src="/village-desktop.jpg" alt="carpathian village" />
            </picture>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-[120px] xl:w-[313px] flex flex-col justify-end">
        <div className="opacity-20 w-full h-[87px] xl:h-[225px] mb-[47px] xl:mb-[70px]">
          <picture>
            <source src="/village-mobile.jpg" media="(max-width: 1279px)" />
            <source src="/village-tablet.jpg" media="(min-width: 1280px)" />
            <img src="/village-tablet.jpg" alt="carpathian village" />
          </picture>
        </div>
        <div className="mb-[17px] xl:mb-0 text-[33px] font-thin hover:opacity-40">
          <button type="button" onClick={() => swiperRef.current?.slideNext()}>
            {" "}
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};
