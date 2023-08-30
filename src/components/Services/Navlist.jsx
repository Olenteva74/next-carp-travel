import { NavLink } from "./NavLink";

export const NavList = ({ list, activeIndex, setindex }) => {
  let classNames;
  const styledLink = "opacity-50 font-extralight";
  const activeLink = "font-medium list-disc list-inside";
  return (
    <ul className="flex flex-col gap-4 xl:gap-6 mb-[34px] md:mb-0">
      {list.map((link, index) => {
        index === activeIndex
          ? (classNames = activeLink)
          : (classNames = styledLink);
        return (
          <li key={index} className={classNames}
          onClick={() => {setindex(index)}}>
            <NavLink text={link} />
          </li>
        );
      })}
    </ul>
  );
};
