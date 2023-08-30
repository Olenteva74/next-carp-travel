export const Fraction = ({num, total}) => {
    return (
        <p className="text-[43px] font-thin md:text-[67px] md:leading-[1.16] xl:text-[98px]">
            <span>{num.padStart(2, 0)}</span><span>/</span>
            <span className="opacity-50">{total.padStart(2, 0)}</span>
        </p>
    )
}