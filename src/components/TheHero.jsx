"use client";
import { Link } from "react-scroll";

export const TheHero = () => {
  return (
    <section
      className="flex flex-col py-6
    md:flex-row md:justify-between
    md:grid md:grid-cols-[426px_230px] 
    xl:grid-cols-[646px_305px] 
    md:grid-rows-[144px_201px] 
    xl:grid-rows-[310px_219px]"
    >
      <div className="md:flex md:flex-col md:justify-between md:row-span-2">
        <h1
          className="text-[40px] md:text-[67px] xl:text-[98px]
        leading-[1.4] md:leading-tight 
        tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px]
        uppercase
        mb-6 md:mb-0"
        >
          <span className="font-medium">Uncover</span>
          <br />
          <span className="font-thin">
            {" "}
            Carpathian’s
            <br />
            Secrets
          </span>
        </h1>
        <ul
          className="text-[10px] md:text-[14px] xl:text-base
        md:tracking-[1.26px] xl:tracking-[1.44px]
        leading-4 font-extralight
        xl:flex
        mb-6 md:mb-0 p-0"
        >
          <li>
            <ul className="flex p-0">
              <li>Hoverla /</li>
              <li>Yaremche /</li>
              <li>Zakarpattia /</li>
            </ul>
          </li>
          <li>
            <ul className="flex p-0">
              <li>Vorokhta /</li>
              <li>Synevyr Lake /</li>
              <li>Bukovel</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="order-first md:order-none flex justify-end md:justify-center mb-6 md:mb-0 md:self-start">
        <h2>
          <div className="text-[37px] md:text-[67px] xl:text-[98px] flex justify-center">
            <span className="font-medium">7</span>
            <span className="font-thin">DAYS</span>
          </div>
          <span
            className="block text-center
          text-xs md:text-sm xl:text-base
          ml-[9.48px] md:ml-[25.9px] xl:ml-[36.48px] 
          tracking-[9.48px] md:tracking-[25.9px] xl:tracking-[36.48px] 
          font-light"
          >
            JOURNEY
          </span>
        </h2>
      </div>
      <div className="flex flex-col justify-between">
        {" "}
        <p
          className="text-sm md:text-base xl:text-lg
        md:leading-5 xl:leading-6
        font-extralight
        mb-6 md:mb-0"
        >
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <div
          className="border-white 
      bg-[rgba(255, 255, 255, 0.05)]
      text-lg xl:text-[32px] leading-[2.67] md:leading-tight font-bold"
        >
          <div className="flex justify-between">
            <div className="w-11 h-2 border-t border-l"></div>
            <div className="w-11 h-2 border-t border-r"></div>
          </div>
          <div className="text-center cursor-pointer hover:opacity-40">
            <Link to="contacts" smooth={true} duration={1500}>
              JOIN NOW
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="w-11 h-2 border-b border-l"></div>
            <div className="w-11 h-2 border-b border-r"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
