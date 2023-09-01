import { NavLink } from "./NavLink";
import { Subtitle } from "./Subtitle";

export const NavList = ({ list, activeIndex, setindex, titleList }) => {
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
          <li
            key={index}
            className={classNames}
            onClick={() => {
              setindex(index);
            }}
          >
            <>
              <NavLink text={link} />
              {index === activeIndex && (
                <div className="hidden xl:inline-block">
                  <Subtitle text={titleList[activeIndex]} />
                </div>
              )}
            </>
          </li>
        );
      })}
    </ul>
  );
};

