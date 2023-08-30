"use client";
import { useState } from "react";
import header from "../../data/header.json";
import { TheLogo } from "./TheLogo";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "./Menu";
import { Container } from "../Container";

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
      <header>
       <Container>
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
       </Container>
      </header>
      {isOpenMobileMenu && <MobileMenu onCloseMenu={handleCloseMenu} />}
    </>
  );
};

// className="mb-9 md:mb-[66px] xl:mb-[72px]"