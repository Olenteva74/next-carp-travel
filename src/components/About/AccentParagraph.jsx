export const AccentParagraph = ({text, textAccent}) => {
  return (
    <p className="text-sm md:text-[16px] md:leading-[1.25] xl:text-[18px] xl:leading-[1.33]">
      <span className="font-normal">{textAccent}</span>
      <span className="font-extralight">{text}</span>
    </p>
  );
};
