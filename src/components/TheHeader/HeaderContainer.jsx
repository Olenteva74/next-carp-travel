export const HeaderContainer = ({ children }) => {
  return (
    <div
      className="w-[320px] md:w-[768px] xl:w-[1280px] mx-auto px-5 md:px-8 xl:px-6
        pt-[25px] pb-9 md:pb-16  xl:pb-12"
    >
      {children}
    </div>
  );
};
