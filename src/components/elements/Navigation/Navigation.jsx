import { Link } from "react-router-dom";

const Navigation = (props) => {
    const {prevSlug, nextSlug, slug} = props;

    return(
        <>
            <div className="grid grid-cols-3 gap-1 text-center text-white font-poppins">
                <Link className={`col-span-1 w-full ${prevSlug === "-" ? "cursor-not-allowed" : ""} p-2 bg-kumanime`} to={prevSlug === "-" ? "javascript:void(0)" : `/watch/${prevSlug}`}>{"<<"}</Link>
                <Link className="col-span-1 w-full p-2 bg-kumanime" to={`/anime/${slug}`}>Semua Episode</Link>
                <Link className={`col-span-1 w-full ${nextSlug === "-" ? "cursor-not-allowed" : ""} p-2 bg-kumanime`} to={nextSlug === "-" ? "javascript:void(0)" : `/watch/${nextSlug}`}>{">>"}</Link>
            </div>
        </>
    )
}

export default Navigation;