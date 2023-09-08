export const SliderButton = ({ name, handleClick }) => {
  return (
    <button
      type="button"
      className="text-[33px] font-thin cursor-pointer hover:outline hover:rounded-sm hover:transition-all focus:transition-all"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
