export const Paragraph = ({ text }) => {
  return (
    <p
      className="text-sm font-extralight leading-tight
        md:text-[13px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.33]"
    >
      {text}
    </p>
  );
};
