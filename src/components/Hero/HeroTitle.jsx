export const HeroTitle = ({titleMedium, titleThin}) => {
    return (
        <h1
          className="text-[40px] md:text-[67px] xl:text-[98px]
        leading-[1.4] md:leading-tight 
        tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px]
        uppercase
        mb-6 md:mb-0"
        >
          <span className="font-medium">{titleMedium}</span>
          <br />
          <span className="font-thin">
            {" "}
            {titleThin[0]}
            <br />
            {titleThin[1]}
          </span>
        </h1>
    )
}