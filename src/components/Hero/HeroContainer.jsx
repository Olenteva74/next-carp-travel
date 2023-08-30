export const HeroContainer = ({ children }) => {
  return (
    <div
      className="w-[320px] md:w-[768px] xl:w-[1280px] mx-auto px-5 md:px-8 xl:px-6
        pt-0 pb-14 md:pb-16 xl:pt-6 xl:pb-[104px]"
    >
      {children}
    </div>
  );
};
