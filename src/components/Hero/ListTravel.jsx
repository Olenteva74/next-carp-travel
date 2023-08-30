export const ListTravel = ({list}) => {
    return (
        <ul className="flex p-0">
            {list.map((item, index) => {
                return (
                    <li key={index}>{item}</li>
                )
            })}
        </ul>
    )
}