export const HeroSubtitle = ({subtitleMedium, subtitleThin, subtitleLight}) => {
    return (
        <h2>
          <span className="text-[37px] md:text-[67px] xl:text-[98px] flex justify-center">
            <span className="font-medium">{subtitleMedium}</span>
            <span className="font-thin">{subtitleThin}</span>
          </span>
          <span
            className="block text-center
          text-xs md:text-sm xl:text-base
          ml-[9.48px] md:ml-[25.9px] xl:ml-[36.48px] 
          tracking-[9.48px] md:tracking-[25.9px] xl:tracking-[36.48px] 
          font-light"
          >
            {subtitleLight}
          </span>
        </h2>
    )
}