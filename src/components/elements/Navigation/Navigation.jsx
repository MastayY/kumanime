const Navigation = (props) => {
    const {prevSlug, nextSlug, slug} = props;

    return(
        <>
            <div className="grid grid-cols-3 gap-1 text-center text-white font-poppins">
                <a className={`col-span-1 w-full ${prevSlug === "-" ? "cursor-not-allowed" : ""} p-2 bg-kumanime`} href={prevSlug === "-" ? "javascript:void(0)" : `/watch/${prevSlug}`}>{"<<"}</a>
                <a className="col-span-1 w-full p-2 bg-kumanime" href={`/anime/${slug}`}>Semua Episode</a>
                <a className={`col-span-1 w-full ${nextSlug === "-" ? "cursor-not-allowed" : ""} p-2 bg-kumanime`} href={nextSlug === "-" ? "javascript:void(0)" : `/watch/${nextSlug}`}>{">>"}</a>
            </div>
        </>
    )
}

export default Navigation;