import { useEffect, useState } from "react";
import DetailCard from "../../elements/DetailCard/DetailCard";
import Navigation from "../../elements/Navigation/Navigation";
import { getAnimeDetails } from "../../../Hooks/Api";

const IframeVideo = (props) => {
    const { title, id, prevSlug, nextSlug, streamUrl } = props;

    const [animeData, setAnimeData] = useState();

    useEffect(() => {
        getAnimeDetails(id, (data) => {
            setAnimeData(data);
        })
    }, [id])

    return(
        <>
            <div className="w-full relative pb-[56.25%] mb-3">
                <iframe className="absolute w-full h-full" src={streamUrl}  allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" frameBorder="0" width="448" height="252"></iframe>
            </div>
            <Navigation 
                prevSlug={prevSlug}
                nextSlug={nextSlug}
                slug={id}
            />
            <DetailCard
                title={title}
                poster={animeData?.thumb}
                synopsis={animeData?.synopsis}
                slug={id}
            />
        </>
    )
}

export default IframeVideo;