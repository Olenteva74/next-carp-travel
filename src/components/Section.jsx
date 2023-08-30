export const Section = ({name, children}) => {
    return (
        <section
        id={name}
        className={name}
        >{children}</section>
    )
}