const Aside = (props) => {
    const {children} = props;
    return (
        <>
            <aside className="p-5">
                {children}
            </aside>
        </>
    )
}

export default Aside;