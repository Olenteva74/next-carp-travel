"use client";
import { Link } from "react-scroll";

export const MobileMenu = ({ onCloseMenu }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[rgba(1, 10, 5, 0.75)] backdrop-blur-xl
    flex justify-center items-center "
    >
      <div
        className="flex justify-center items-center 
    text-sm tracking-[1.4px] cursor-pointer"
      >
        <button
          type="button"
          className="absolute top-[43px] right-[20px] cursor-pointer hover:opacity-20"
          onClick={onCloseMenu}
        >
          CLOSE
        </button>
        <nav>
          <ul className="flex flex-col gap-y-12 justify-center items-center">
            <li className="hover:underline">
              <Link
                to="about"
                smooth={true}
                duration={1500}
                onClick={onCloseMenu}
              >
                About
              </Link>
            </li>
            <li className="hover:underline">
              <Link
                to="services"
                smooth={true}
                duration={1500}
                onClick={onCloseMenu}
              >
                Services
              </Link>
            </li>
            <li className="hover:underline">
              <Link
                to="career"
                smooth={true}
                duration={1500}
                onClick={onCloseMenu}
              >
                Career
              </Link>
            </li>
            <li className="hover:underline">
              <Link
                to="gallery"
                smooth={true}
                duration={1500}
                onClick={onCloseMenu}
              >
                Gallery
              </Link>
            </li>
            <li className="hover:underline">
              <Link
                to="contacts"
                smooth={true}
                duration={1500}
                onClick={onCloseMenu}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
