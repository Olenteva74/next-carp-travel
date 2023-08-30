import { Link } from "react-scroll";

export const HeroButton = ({ name }) => {
  return (
    <div
      className="border-white
      bg-[rgba(255, 255, 255, 0.10)] md:bg-[rgba(255, 255, 255, 0.05)] 
      text-lg xl:text-[32px] leading-[2.67] md:leading-tight font-bold"
    >
      <div className="flex justify-between">
        <div className="w-[42px] md:w-[34px] xl:w-[44px] h-2  xl:h-[10px] border-t border-l"></div>
        <div className="w-[42px] md:w-[34px] xl:w-[44px] h-2  xl:h-[10px] border-t border-r"></div>
      </div>
      <div
        className="flex justify-center items-center cursor-pointer hover:opacity-40 
         h-[37px]  xl:h-[51px]"
      >
        <Link to="/contacts" smooth={true} duration={1500}>
          {name}
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="w-[42px] md:w-[34px] xl:w-[44px] h-2 md:h-[7] xl:h-[10px] border-b border-l"></div>
        <div className="w-[42px] md:w-[34px] xl:w-[44px] h-2 md:h-[7] xl:h-[10px] border-b border-r"></div>
      </div>
    </div>
  );
};
