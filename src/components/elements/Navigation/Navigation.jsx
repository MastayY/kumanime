import { Link } from "react-router-dom";
import { addToHistory } from "../../../utils";

const Navigation = (props) => {
    const {prevSlug, nextSlug, slug} = props;

    return(
        <>
            <div className="grid grid-cols-3 gap-1 text-center text-white font-poppins">
                <Link className={`col-span-1 w-full ${prevSlug === "-" ? "cursor-not-allowed" : ""} p-2 bg-kumanime`} onClick={prevSlug === "-" ? "javascript:void(0)" : () => addToHistory(slug, prevSlug, prevSlug.match(/\d+/)[0])} to={prevSlug === "-" ? "javascript:void(0)" : `/watch/${prevSlug}`}>{"<<"}</Link>
                <Link className="col-span-1 w-full p-2 bg-kumanime" to={`/anime/${slug}`}>Semua Episode</Link>
                <Link className={`col-span-1 w-full ${nextSlug === "-" ? "cursor-not-allowed" : ""} p-2 bg-kumanime`} onClick={nextSlug === "-" ? "javascript:void(0)" : () => addToHistory(slug, nextSlug, nextSlug.match(/\d+/)[0])} to={nextSlug === "-" ? "javascript:void(0)" : `/watch/${nextSlug}`}>{">>"}</Link>
            </div>
        </>
    )
}

export default Navigation;