export const LinkItem = ({ url, text, target, rel }) => {
  return (
    <li
      className="text-[14px] leading-[1.71] font-normal
        md:text-[16px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.33
          hover:underline"
    >
      <a href={url} target={target} rel={rel}>
        {text}
      </a>
    </li>
  );
};
