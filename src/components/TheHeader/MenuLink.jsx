import { Link } from "react-scroll";

export const MenuLink = ({ link, handleClick }) => {
  const linkHref = `/${link.toLowerCase()}`;
  return (
    <Link to={linkHref} smooth={true} duration={1500} onClick={handleClick}>
      {link}
    </Link>
  );
};
