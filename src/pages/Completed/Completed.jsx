import { useParams } from "react-router-dom"
import Pagination from "../../components/elements/Pagination/Pagination.jsx";
import { useEffect, useState } from "react";
import { getCompletedAnime } from "../../Hooks/Api/index.js";
import Loading from "../../components/layouts/Loading/Loading.jsx";
import Title from "../../components/elements/Title/Title.jsx";
import Card from "../../components/elements/Card/Card.jsx";
import { Helmet } from "react-helmet";

const Completed = () => {
    const {page} = useParams();
    const [completedAnime, setCompletedAnime] = useState([]);

    useEffect(() => {
        async function completedAnime() {
            try {
                const result = await getCompletedAnime(page);
                setCompletedAnime(result);
            } catch (error) {
                console.log(error)
            }
        }

        completedAnime()
    }, [page])

    return(
        <>
            <Helmet>
                <title>Kumanime - Streaming Anime Sub Indo</title>
                <meta
                name="description"
                content="Nonton anime subtitle Indonesia secara gratis di KUMANIME.FUN"
                />
                <meta name="robots" content="index, follow" />
                <meta
                property="og:title"
                content="Kumanime - Streaming Anime Sub Indo"
                />
                <meta
                property="og:description"
                content="Nonton anime subtitle Indonesia secara gratis di KUMANIME.FUN"
                />
                <meta property="og:locale" content="id_ID" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Kumanime" />
                <meta property="og:image" content="https://raw.githubusercontent.com/MastayY/kumanime/main/public/logo.png" />
                <meta name="twitter:description" content="Nonton Anime Online Sub Indo Gratis di KUMANIME.FUN" />
                <meta
                name="twitter:image"
                content="https://raw.githubusercontent.com/MastayY/kumanime/main/public/logo.png"
                />
            </Helmet>
            {
                completedAnime.status === "success" ? (
                    (<main className="px-5 md:px-10 lg:px-16 my-14">
                    <Title>Completed Anime List</Title>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-5 px-6">
                    {
                        completedAnime.animeList.map((data, index) => {
                            return(
                                <Card
                                    key={index}
                                    imgUrl={data.thumb}
                                    href={`/anime/${data.id}`}
                                    title={data.title}
                                    episode={data.episode.replace("Episode", " Episode")}
                                    rating={`☆ ${data.score}`}
                                />
                            )
                        })
                    }
                    </div>
                    <Pagination currentPage={parseInt(page) || 1} totalPages={completedAnime.maxPage} destination="completed" />
                </main>)
                ) : <Loading />
            }
            </>
    )
}

export default Completed;