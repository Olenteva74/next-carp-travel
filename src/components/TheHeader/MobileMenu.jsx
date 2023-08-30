"use client";
import { Menu } from "./Menu";
import header from "../../data/header.json";

export const MobileMenu = ({ onCloseMenu }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[rgba(1, 10, 5, 0.75)] backdrop-blur-xl
    flex justify-center items-center"
    >
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="absolute top-[43px] right-[20px] text-sm tracking-[1.4px] cursor-pointer hover:underline focus:underline"
          onClick={onCloseMenu}
        >
          {header.buttonClose}
        </button>
        <nav>
          <Menu
            menu={header.menu}
            menuClose={onCloseMenu}
            styled="flex flex-col gap-12 justify-center items-center text-lg tracking-[1.8px]"
          />
        </nav>
      </div>
    </div>
  );
};
