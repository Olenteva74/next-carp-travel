import { ListTravel } from "./ListTravel";

export const HeroTravelList = ({travelList}) => {
    return (
        <ul className="text-[10px] md:text-[14px] xl:text-base
        md:tracking-[1.26px] xl:tracking-[1.44px]
        leading-4 font-extralight
        xl:flex
        mb-6 md:mb-0 p-0">
            {travelList.map((item, index) => {
                return (
                    <li key={index}>
                        <ListTravel list={item}/>
                    </li>
                )
            })}
        </ul>
    )
}