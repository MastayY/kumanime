import { useParams } from "react-router-dom"
import Pagination from "../../components/elements/Pagination/Pagination.jsx";
import { useEffect, useState } from "react";
import { getOngoingAnime } from "../../Hooks/Api/index.js";
import Loading from "../../components/layouts/Loading/Loading.jsx";
import Title from "../../components/elements/Title/Title.jsx";
import Card from "../../components/elements/Card/Card.jsx";
import { Helmet } from "react-helmet";

const Ongoing = () => {
    const {page} = useParams();
    const [ongoingAnime, setOngoingAnime] = useState([]);

    useEffect(() => {
        async function ongoingAnime() {
            try {
                const result = await getOngoingAnime(page);
                setOngoingAnime(result);
            } catch (error) {
                console.log(error)
            }
        }

        ongoingAnime()
    }, [page])

    return(
        <>
            <Helmet>
                <title>Ongoing Anime - Kumanime</title>
                <meta
                name="description"
                content="Nonton anime subtitle Indonesia secara gratis di KUMANIME.FUN"
                />
                <meta
                property="og:title"
                content="Ongoing Anime - Kumanime"
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
                <meta name="twitter:title" content="Ongoing Anime - Kumanime" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="keywords" content="kumanime, otakudesu, kuronime, kuramanime, web streaming anime, moenime, moenime id, moenime list, moe anime, anime batch indonesia, anime batch sub indo, animebatch sub indo, anime batch terbaru, download anime batch subtitle indonesia, situs download anime, anime sub indo, download anime sub indo, download anime subtitle indonesia, download anime terbaru, download anime bd, download anime movie, download anime batch, download anime batch sub indo, download anime batch subtitle indonesia terlengkap, streaming anime, streaming anime sub indo, streaming anime subtitle indonesia, streaming anime sub indo lengkap" />
                <meta name="twitter:description" content="Nonton Anime Online Sub Indo Gratis di KUMANIME.FUN" />
                <meta
                name="twitter:image"
                content="https://raw.githubusercontent.com/MastayY/kumanime/main/public/logo.png"
                />
            </Helmet>
            {
                ongoingAnime.status === "success" ? (
                    (<main className="px-5 md:px-10 lg:px-16 my-14">
                    <Title>Ongoing Anime List</Title>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-5 px-6">
                    {
                        ongoingAnime.animeList.map((data, index) => {
                            return(
                                <Card
                                    key={index}
                                    imgUrl={data.thumb}
                                    href={`/anime/${data.id}`}
                                    title={data.title}
                                    episode={data.episode}
                                    rating={data.day_updated}
                                />
                            )
                        })
                    }
                    </div>
                    <Pagination currentPage={parseInt(page) || 1} totalPages={ongoingAnime.maxPage} destination="ongoing" />
                </main>)
                ) : <Loading />
            }
            </>
    )
}

export default Ongoing;