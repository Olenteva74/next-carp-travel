"use client";
import React, { useRef, useState } from "react";
import services from "../../data/services.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {
  EffectFade,
  FreeMode,
  A11y,
  Virtual,
} from "swiper/modules";
import Image from "next/image";
import { Section } from "../Section";
import { Container } from "../Container";
import { Title } from "../Title";
import { Subtitle } from "../Contact/Subtitle";
import { Paragraph } from "./Paragraph";
import { Fraction } from "./Fraction";
import { NavList } from "./Navlist";

export const Services = () => {
  const swiperRef = useRef();
  const [activeInd, setActiveInd] = useState(0);
  const handleInd = (index) => {
    setActiveInd(index);
    swiperRef.current?.slideTo(index);
  };
  let sectionName;
  activeInd === 0 ? sectionName="services" : sectionName=`services${activeInd}`;
  return (
    <Section name={sectionName}>
      <Container>
        <div className="md:flex md:justify-between md:mb-9 xl:mb-[21px]">
          <div className="mb-6 md:mb-0">
            <Title
              title={services.titleThin}
              titleAccent={services.titleMedium}
            />
          </div>
          <div className="text-end mb-4 md:mb-0">
            <Fraction
              num={String(activeInd + 1)}
              total={String(services.images.length)}
            />
          </div>
        </div>
        <div className="md:flex md:gap-[20px]">
          <div className="w-[280px] h-[213px] md:w-[463px] md:h-[400px] xl:w-[607px] xl:h-[492px] mb-3 md:mb-0 ">
            <Swiper
              spaceBetween={10}
              effect={"fade"}
              modules={[EffectFade, FreeMode, A11y, Virtual]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="mySwiper"
            >
              {services.images.map(({ img, alt }, index) => {
                return (
                  <SwiperSlide key={img} virtualIndex={index}>
                    <Image
                      src={img}
                      alt={alt}
                      width={280}
                      height={213}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="md:flex md:flex-col md:justify-between">
            <div className="md:flex md:flex-col-reverse xl:flex-row-reverse md:gap-[25px] xl:gap-[60px]">
              <div className="mb-6 md:mb-0 xl:w-[293px]">
                <Subtitle text={services.title[activeInd]} />
              </div>
              <NavList
                className="swiper-pagination"
                list={services.paginationList}
                activeIndex={activeInd}
                setindex={handleInd}
              />
            </div>
            <div className="xl:flex xl:flex-row-reverse">
            <div className="w-[280px] md:w-[221px] max-h-[120px] xl:w-[293px] xl:max-h-[168px]">
              <Paragraph text={services.paragraph[activeInd]} />
            </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
