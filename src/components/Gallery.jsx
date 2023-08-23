import { Slider } from "./Slider";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="w-screen h-full mx-auto bg-[#0A1813]
    bg-gallery md:bg-gallery-tablet xl:bg-gallery-desktop bg-no-repeat bg-cover
    relative"
    >
      <div
        className="w-[320px] md:w-[768px] xl:w-[1280px] mx-auto px-5 md:px-8 xl:px-6
      py-14 md:py-16 xl:py-[104px]"
      >
        <div className="md:text-center xl:text-start">
          <h1
            className="text-[40px] leading-[1.4] tracking-[-1.6px] mb-6
        md:text-[67px] md:leading-[1] md:tracking-[-2.68px] md:mb-[65px]
        xl:text-[98px] xl:leading-[1] xl:tracking-[-3.92px] xl:mb-[15px]"
          >
            <span className="font-thin">OUR</span>
            <span className="font-medium">GALLERY</span>
          </h1>
        </div>
        <ul className="md:hidden">
          <li className="mb-6">
            <img
              src="/mountain-mobile.jpg"
              alt="high angle shot beautiful mountainous landscape with hills cloudy sky"
            />
          </li>
          <li className="mb-6">
            <img
              src="/lake-mobile.jpg"
              alt="breathtaking view lake high carpathian mountains"
            />
          </li>
          <li>
            <img src="village-mobile.jpg" alt="carpathian village" />
          </li>
        </ul>
        <Slider />
      </div>
    </section>
  );
};
