const Title = (props) => {
    const {children} = props;
    return (
        <>
            <h1 className="text-xl text-white md:text-3xl font-bold mb-4 mt-3 pl-3 py-2 border-l-4 border-kumanime">{children}</h1>
        </>
    )
}

export default Title;