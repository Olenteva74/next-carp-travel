export const Container = ({children}) => {
    return (
      <div className="w-[320px] md:w-[768px] xl:w-[1280px] mx-auto px-5 md:px-8 xl:px-6
      py-14 md:py-16 xl:py-[104px]"
        >{children}</div>
    )
}