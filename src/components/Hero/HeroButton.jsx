"use client";
import { Link } from "react-scroll";

export const HeroButton = ({ name }) => {
  return (
    <>
      <div
        className="w-[280px] md:w-[230px] xl:w-[293px] flex justify-between border-white 
   relative top-0 md:top-[12px] xl:top-[12px] mb-[-8px] md:mb-[-12px] xl:mb-[-12px]"
      >
        <div className="w-[42px] md:w-[34px] xl:w-[44px] h-2  xl:h-[10px] border-t border-l"></div>
        <div className="w-[42px] md:w-[34px] xl:w-[44px] h-2  xl:h-[10px] border-t border-r"></div>
      </div>
      <div
        className="w-[280px] md:w-[230px] xl:w-[293px] h-[53px] md:h-[50px] xl:h-[71px] py-[18px] md:py-[14px] xl:py-4 px-16 flex justify-center items-center
    bg-[hsla(0,0%,100%,.1)] md:bg-[hsla(0,0%,100%,.05]
    text-lg xl:text-[32px] leading-[2.67] md:leading-tight font-bold
    cursor-pointer hover:opacity-40 hover:transition-all focus:transition-all"
      >
        <Link to="/contacts" smooth={true} duration={1500}>
          {name}
        </Link>
      </div>
      <div
        className="w-[280px] md:w-[230px] xl:w-[293px] flex justify-between border-white 
    relative bottom-2 md:bottom-[24px] xl:bottom-[24px] mb-[-8px] md:mb-[-24px] xl:mb-[-24px]"
      >
        <div className="w-[42px] md:w-[34px] xl:w-[44px] h-2 md:h-[7] xl:h-[10px] border-b border-l"></div>
        <div className="w-[42px] md:w-[34px] xl:w-[44px] h-2 md:h-[7] xl:h-[10px] border-b border-r"></div>
      </div>
    </>
  );
};
