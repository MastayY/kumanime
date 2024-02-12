const WatchlistCard = (props) => {
    const {title, href, imgUrl, total_eps, genres, status, type, score} = props;

    return(
        <div className="text-white px-6 py-4 my-2 font-inter">
            <a href={href} className="grid md:grid-cols-7 grid-cols-3 gap-3 transition-all group">
                <div className="col-span-1">
                    <img src={imgUrl} alt={title} width="202" height="277" />
                </div>
                <div className="md:col-span-6 col-span-2">
                    <h1 className="md:text-2xl text-lg font-bold group-hover:text-kumanime">{title}</h1>
                    <p className="text-sm md:text-base">Status : {status}</p>
                    <p className="text-sm md:text-base">Type : {type}</p>
                    <p className="text-sm md:text-base">Score : {score}</p>
                    <p className="text-sm md:text-base">Episode : {total_eps} Eps</p>
                    <p className="text-sm md:text-base">Genre : </p>
                    <div className="flex flex-wrap gap-2">
                        {
                            genres.map((genre, index) => (
                                <p key={index} className="mt-2 bg-kumanime uppercase font-semibold px-2 py-[2px] text-xs">{genre.genre_name}</p>
                            ))
                        }
                    </div>
                </div>
            </a>
        </div>
    )
}

export default WatchlistCard;