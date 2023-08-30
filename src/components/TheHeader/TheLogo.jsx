import { Karantina } from "next/font/google";
import Image from "next/image";
import { Link } from "react-scroll";
import logo from "/public/logo.png";

export const TheLogo = ({alt}) => {
  return (
    <div>
      <Link to="/" className="cursor-pointer">
        <Image src={logo} alt={alt} width={61} height={34} />
      </Link>
    </div>
  );
};
