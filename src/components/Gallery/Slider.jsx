"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, FreeMode, Navigation, A11y, Virtual } from "swiper/modules";
import Image from "next/image";

export const Slider = ({images}) => {
  const swiperRef = useRef();
  return (
    <div className="hidden md:flex h-[294px] xl:h-[447px]">
      <div className="w-[120px] xl:w-[313px] flex flex-col justify-end">
        <div className="opacity-20 w-[120px] xl:w-[305px] h-[87px] xl:h-[225px] mb-[47px] xl:mb-[70px]">
         <Image src={images[0].url} width={120} height={87} alt={images[0].alt}/>
        </div>
        <div className="mb-[17px] xl:mb-0 text-[33px] font-thin text-end hover:opacity-40">
          <button type="button" onClick={() => swiperRef.current?.slidePrev()}>
            {" "}
            BACK
          </button>
        </div>
      </div>

      <div className="grow px-6 w-[458px] h-[306px] xl:w-[669px] xl:h-[447px]">
        <Swiper
          loop={true}
          spaceBetween={10}
          effect={"fade"}
          modules={[EffectFade, FreeMode, Navigation, A11y, Virtual]}
          navigation={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index} virtualIndex={index}>
                <Image src={image.url} width={415} height={294} alt={image.alt}
                 sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className="w-[120px] xl:w-[313px] flex flex-col justify-end">
        <div className="opacity-20 w-full h-[87px] xl:h-[225px] mb-[47px] xl:mb-[70px]">
         <Image src={images[2].url} alt={images[2].alt} width={120} height={87} />
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
