import { useEffect, useState } from "react";
import { getAnimeDetails } from "../../Hooks/Api";
import Loading from "../../components/layouts/Loading/Loading";
import WatchlistCard from "../../components/fragments/WatchlistCard/WatchlistCard";
import Title from "../../components/elements/Title/Title";
import { Helmet } from "react-helmet";

const Watchlist = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getBookmarkData() {
            try {
                const result = JSON.parse(localStorage.getItem('bookmarks') || '[]');
                const updatedBookmarks = await Promise.all(result.map(async (bookmark) => {
                    return await getAnimeDetails(bookmark);
                }));
                setBookmarks(updatedBookmarks);
                setIsLoading(false);
                console.log(updatedBookmarks);
            } catch (error) {
                console.log(error);
            }
        }

        getBookmarkData();
    }, [bookmarks])

    return(
        <>
            <Helmet>
                <title>Watchlist - Kumanime</title>
                <meta
                name="description"
                content="Nonton anime subtitle Indonesia secara gratis di KUMANIME.FUN"
                />
                <meta
                property="og:title"
                content="Watchlist - Kumanime"
                />
                <meta name="robots" content="index, follow" />
                <meta
                property="og:description"
                content="Nonton anime subtitle Indonesia secara gratis di KUMANIME.FUN"
                />
                <meta property="og:locale" content="id_ID" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Kumanime" />
                <meta property="og:image" content="https://raw.githubusercontent.com/MastayY/kumanime/main/public/logo.png" />
                <meta name="googlebot" content="index, follow" />
                <meta name="twitter:title" content="Watchlist - Kumanime" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="keywords" content="kumanime, otakudesu, kuronime, kuramanime, web streaming anime, moenime, moenime id, moenime list, moe anime, anime batch indonesia, anime batch sub indo, animebatch sub indo, anime batch terbaru, download anime batch subtitle indonesia, situs download anime, anime sub indo, download anime sub indo, download anime subtitle indonesia, download anime terbaru, download anime bd, download anime movie, download anime batch, download anime batch sub indo, download anime batch subtitle indonesia terlengkap, streaming anime, streaming anime sub indo, streaming anime subtitle indonesia, streaming anime sub indo lengkap" />
                <meta name="twitter:description" content="Nonton Anime Online Sub Indo Gratis di KUMANIME.FUN" />
                <meta
                name="twitter:image"
                content="https://raw.githubusercontent.com/MastayY/kumanime/main/public/logo.png"
                />
            </Helmet>
            {
                isLoading ? <Loading /> :
                (bookmarks.length > 0 ? (
                    <div className="my-10 mx-auto md:max-w-[70%] max-w-[90%] min-h-screen">
                        <Title>Watchlist</Title>
                        {bookmarks.map((anime, index) => (
                            <WatchlistCard
                                key={index}
                                title={anime.title}
                                href={`/anime/${anime.anime_id}`}
                                total_eps={anime.total_episode}
                                imgUrl={anime.thumb}
                                genres={anime.genre_list}
                                status={anime.status}
                                type={anime.type}
                                score={anime.score}
                            />
                        )).reverse()}
                    </div>
                ) : (
                    <div className="my-10 font-poppins mx-auto text-white md:max-w-[70%] max-w-[90%] h-[80vh]">
                        <Title>Watchlist</Title>
                        <p className="mt-8 text-center">No Bookmarks</p>
                    </div>
                ))
            }
        </>
    );
}

export default Watchlist;