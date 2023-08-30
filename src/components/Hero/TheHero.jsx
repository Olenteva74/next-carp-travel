"use client";
import hero from "../../data/hero.json";
import { HeroTitle } from "./HeroTitle";
import { HeroTravelList } from "./HeroTravelList";
import { HeroSubtitle } from "./HeroSubtitle";
import { HeroParagraph } from "./HeroParagraph";
import { HeroButton } from "./HeroButton";
import { HeroContainer } from "./HeroContainer";

export const TheHero = () => {
  return (
    <HeroContainer>
    <div
      className="flex flex-col md:flex-row md:justify-between
  md:grid md:grid-cols-[426px_230px] xl:grid-cols-[646px_305px] 
  md:grid-rows-[144px_201px] xl:grid-rows-[310px_219px]"
    >
      <div className="md:flex md:flex-col md:justify-between md:row-span-2">
        <HeroTitle
          titleMedium={hero.titleMedium}
          titleThin={hero.titleThin}
        />
        <HeroTravelList travelList={hero.listTravel} />
      </div>
      <div className="order-first md:order-none flex justify-end md:justify-center mb-6 md:mb-0 md:self-start">
        <HeroSubtitle
          subtitleMedium={hero.subtitleMedium}
          subtitleThin={hero.subtitleThin}
          subtitleLight={hero.subtitleLight}
        />
      </div>
      <div className="flex flex-col justify-between">
        <HeroParagraph text={hero.paragraph} />
        <HeroButton name={hero.buttonText} />
      </div>
    </div>
  </HeroContainer>
  );
};
