const DetailCard = (props) => {
    const {title, poster, synopsis, slug} = props;

    return(
        <div className="grid grid-cols-7 gap-3 py-5 px-6 place-content-center font-inter">
            <div className="col-span-2 mt-3">
                <img src={poster} alt="" height="277" width="202" />
            </div>
            <div className="col-span-5">
                <a href={`/anime/${slug}`} className="text-xl md:text-2xl font-semibold">{title}</a>
                <p className="text-sm py-3">{synopsis || "No synopsis available" }</p>
                <p className="mt-5 text-sm md:text-base"><span className="font-semibold">KUMANIME.FUN</span> merupakan situs tempat nonton anime <span className="font-semibold">{title}</span> subtitle indonesia secara gratis</p>
            </div>
        </div>
    )
}

export default DetailCard;