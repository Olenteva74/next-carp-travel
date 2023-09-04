"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import {
  EffectCoverflow,
  FreeMode,
  A11y,
  Virtual,
} from "swiper/modules";
import Image from "next/image";
import { SliderButton } from "./SliderButton";

export const Slider = ({ images, backButton, nextButton }) => {
  const swiperRef = useRef();
  const handleClickBack = () => {
    swiperRef.current?.slidePrev();
  };
  const handleClickNext = () => {
    swiperRef.current?.slideNext();
  };
  return (
    <div>
      <div className="hidden md:flex h-[306px] w-full xl:h-[447px]">
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={100}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, FreeMode, A11y, Virtual]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index} virtualIndex={index}>
                <Image
                  src={image.url}
                  width={460}
                  height={306}
                  alt={image.alt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="hidden md:flex justify-between w-[500px] xl:w-[750px] mx-auto relative top-[-40px] mb-[-40px] z-10">
        <SliderButton
          name={backButton}
          handleClick={handleClickBack}
        />
        <SliderButton
          name={nextButton}
          handleClick={handleClickNext}
        />
      </div>
    </div>
  );
};
