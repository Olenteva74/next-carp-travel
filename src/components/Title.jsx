export const Title = ({title, titleAccent}) => {
    return (
        <>
          <h1
            className="text-[40px] leading-[1.4] tracking-[-1.6px]
        md:text-[67px] md:leading-[1] md:tracking-[-2.68px]
        xl:text-[98px] xl:leading-[1] xl:tracking-[-3.92px]"
          >
            <span className="font-thin">{title}</span>
            <span className="font-medium">{titleAccent}</span>
          </h1>
        </>
    )
}