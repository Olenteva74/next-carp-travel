export const AccentSubtitle = ({ firstTitle, secindTitle, text }) => {
  return (
    <div
      className="w-[180px] md:w-[221px] xl:w-[296px] 
      text-sm md:text-base xl:text-lg
      leading-tight xl:leading-normal"
    >
      <h6 className="font-normal uppercase flex flex-col">
        <span>{firstTitle}</span>
        <span className="flex justify-end">{secindTitle}</span>
      </h6>
      <p className="font-extraligh tracking-tight xl:tracking-widest">{text}</p>
    </div>
  );
};
