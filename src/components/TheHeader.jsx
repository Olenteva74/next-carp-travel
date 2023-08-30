"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { TheLogo } from "./TheLogo";
import { MobileMenu } from "./MobileMenu";

export const TheHeader = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMobileMenu(true);
  };

  const handleCloseMenu = () => {
    setIsOpenMobileMenu(false);
  };

  return (
    <>
      <header className="mb-9 md:mb-[66px] xl:mb-[72px]">
        <div className="flex justify-between items-center">
          <TheLogo />
          <nav className="hidden md:block">
            <ul className="flex md:gap-6 xl:gap-14 text-sm tracking-[1.4px] cursor-pointer">
            <li className="hover:underline">
                <Link to="about" smooth={true} duration={1500}>About</Link>
              </li>
              <li className="hover:underline">
                <Link to="services" smooth={true} duration={1500}>Services</Link>
              </li>
              <li className="hover:underline">
                <Link to="career" smooth={true} duration={1500}>Career</Link>
              </li>
              <li className="hover:underline">
                <Link to="gallery" smooth={true} duration={1500}>Gallery</Link>
              </li>
              <li className="hover:underline">
                <Link to="contacts" smooth={true} duration={1500}>Contacts</Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="md:hidden text-sm tracking-[1.4px] cursor-pointer hover:opacity-20"
            onClick={handleOpenMenu}
          >
            MENU
          </button>
        </div>
      </header>
      {isOpenMobileMenu && <MobileMenu onCloseMenu={handleCloseMenu} />}
    </>
  );
};
