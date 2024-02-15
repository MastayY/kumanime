
const Card = (props) => {
    const {imgUrl, title, href, episode, rating, genres} = props;
    return (
        <>
            <div className="relative font-poppins transition-alloverflow-hidden max-w-[200px] text-white">
                <a href={href}>
                    <div className="anime-poster relative">
                        <div className="relative">
                            <img src={imgUrl} alt="" className="transition-all w-full aspect-[3/4]" loading="lazy" height="277" width="202" />
                            {
                                episode ? <p className="absolute bottom-0 left-0 bg-kumanime p-2 text-white text-xs md:text-sm">{episode}</p> : ""
                            }
                            {
                                rating ? <p className="absolute top-3 right-0 bg-kumanime p-2 text-white text-xs md:text-sm">{rating}</p> : ""
                            }
                        </div>
                        <div className="absolute transition-all opacity-0 hover:opacity-100 top-0 left-0 w-full h-full bg-gradient-to-t from-black flex items-center justify-center">
                            <i className="fa-regular fa-circle-play text-5xl md:text-6xl text-kumanime"></i>
                        </div>
                    </div>
                    <div className="pt-2 px-1">
                        { genres ?
                            <div>
                                    <p className="text-xs text-slate-500">
                                        {genres.slice(0, 2).join(", ")}
                                    </p>
                            </div> : ""
                        
                        }
                        <p className="font-bold text-ellipsis overflow-hidden w-full h-[42px] line-clamp-2 leading[1.3em] text-sm hover:text-kumanime transition-all duration-200">{title}</p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Card;