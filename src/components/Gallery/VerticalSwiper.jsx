"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode, A11y, Virtual } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export const VerticalSwiper = ({ images }) => {
  return (
    <div className="md:hidden h-[609px]">
      <Swiper
        loop={true}
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={24}
        mousewheel={true}
        modules={[FreeMode, A11y, Virtual, Mousewheel]}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index} virtualIndex={index}>
              <Image src={image.url} width={280} height={187} alt={image.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
