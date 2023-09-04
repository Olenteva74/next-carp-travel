import { MenuLink } from "./MenuLink"

export const Menu = ({menu, styled, menuClose}) => {
    return (
        <ul className={styled}>
            {menu.map((link, index) => {
                return (
                    <li key={index} className="cursor-pointer hover:outline hover:rounded-sm focus:outline focus:rounded-sm">
                       <MenuLink link={link} handleClick={menuClose}/>
                    </li>
                )
            })}
        </ul>
    )
}