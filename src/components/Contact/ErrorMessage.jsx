export const ErrorMessage = ({message}) => {
    return (
        <p className="flex items-center justify-end text-[12px] leading-[2]  tracking-[2.4px] text-[#FF5757] absolute right-0 bottom-[-24px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M4.375 4.375L13.625 13.625M13.625 4.375L4.375 13.625"
            stroke="currentColor"
          />
        </svg>
        <span>{message}</span>
      </p>
    )
}
