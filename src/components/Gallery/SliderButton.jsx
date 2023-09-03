export const SliderButton = ({ name, handleClick }) => {
  return (
    <button
      type="button"
      className="text-[33px] font-thin hover:outline"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
