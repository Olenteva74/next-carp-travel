export const HeroParagraph = ({ text }) => {
  return (
    <p
      className="text-sm md:text-base xl:text-lg
      md:leading-5 xl:leading-6
      font-extralight
      mb-6 md:mb-0"
    >
      {text}
    </p>
  );
};
