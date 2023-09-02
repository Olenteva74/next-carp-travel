"use client";
import { useState } from "react";
import header from "../../data/header.json";
import { TheLogo } from "./TheLogo";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "./Menu";
import { HeaderContainer } from "./HeaderContainer";

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
      <header className="relative top-[105px] md:top-[122px] xl:top-[106px] mt-[-105px] md:mt-[-122px] xl:[-106px]">
       <HeaderContainer>
       <div className="flex justify-between items-center">
          <TheLogo alt={header.alt} />
          <nav className="hidden md:block">
            <Menu
              menu={header.menu}
              styled={"flex md:gap-6 xl:gap-14 text-sm tracking-[1.4px]"}
            />
          </nav>
          <button
            type="button"
            className="md:hidden text-sm tracking-[1.4px] cursor-pointer hover:underline focus:underline"
            onClick={handleOpenMenu}
          >
            {header.buttonOpen}
          </button>
        </div>
       </HeaderContainer>
      </header>
      {isOpenMobileMenu && <MobileMenu onCloseMenu={handleCloseMenu} />}
    </>
  );
};