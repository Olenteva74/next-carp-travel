export const Section = ({name, children}) => {
    const nameId = `/${name}`;
    return (
        <section
        id={nameId}
        className={name}
        >{children}</section>
    )
}