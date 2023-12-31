export const NavLink = ({ text }) => {
  return (
    <span className="text-xl md:text-[22px] xl:text-[28px] uppercase leading-[0.85] md:leading-[0.82] xl:leading-[0.86] cursor-pointer
    xl:inline-block xl:w-[236px] xl:mr-[60px]">
      {text}
    </span>
  );
};
