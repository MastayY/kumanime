import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeNews, getEpisodeDetails, getOngoingAnime } from "../../Hooks/Api";
import IframeVideo from "../../components/fragments/IframeVideo/IframeVideo";
import Aside from "../../components/fragments/Aside/Aside";
import AsideCard from "../../components/elements/AsideCard/AsideCard";
import Title from "../../components/elements/Title/Title";
import { Helmet } from "react-helmet";
import Loading from "../../components/layouts/Loading/Loading";
import Slider from "../../components/layouts/Slider/Slider";
import Card from "../../components/elements/Card/Card";

const Watch = () => {
    const {slug} = useParams();

    const [epsData, setEpsData] = useState();
    const [newsAnimeData, setNewsAnimeData] = useState([]);
    const [ongoingAnime, setOngoingAnime] = useState([]);

    useEffect(() => {
        async function ongoingAnime() {
            try {
                const result = await getOngoingAnime(1);
                setOngoingAnime(result);
            } catch (error) {
                console.log(error);
            }
        }

        ongoingAnime()
    }, [])

    useEffect(() => {
        async function epsDetails() {
            try {
                const result = await getEpisodeDetails(slug);
                setEpsData(result);
            } catch (error) {
                console.log(error);
            }
        }

        epsDetails()
    }, [slug])

    useEffect(() => {
        async function animeNews() {
            try {
                const result = await getAnimeNews();
                setNewsAnimeData(result);
            } catch (error) {
                console.log(error);
            }
        }

        animeNews()
    }, [])

    return (
        <>
            {(epsData && newsAnimeData && ongoingAnime.status === "success") ? (
                <>
                <Helmet>
                    <title>Nonton {epsData.title}</title>
                    <link rel="shortcut icon" type="image/x-icon" href="logo.png" />
                    <meta
                    name="description"
                    content={`Watch your favorite anime ${epsData.title} with subtitles in Indonesian.`}
                    />
                    <meta name="robots" content="index, follow" />
                    <meta
                    property="og:title"
                    content={`Kumanime - Watch Anime ${epsData.title}`}
                    />
                    <meta
                    property="og:description"
                    content={`Watch your favorite anime ${epsData.title}  with subtitles in Indonesian.`}
                    />
                    <meta
                    property="og:image"
                    content="https://raw.githubusercontent.com/LuckyIndraEfendi/KyoukaLive/main/public/logo.svg"
                    />
                    <meta property="og:locale" content="id_ID" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Kumanime.FUN" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                    name="twitter:title"
                    content="Kumanime - Streaming Anime Sub Indo"
                    />
                    <meta
                    name="twitter:description"
                    content="Nonton Anime Online Sub Indo Gratis di KUMANIME.FUN"
                    />
                    <meta
                    name="twitter:image"
                    content="https://raw.githubusercontent.com/LuckyIndraEfendi/KyoukaLive/main/public/logo.svg"
                    />
                </Helmet>
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-7 py-7 px-3 md:px-7 bg-bg-kumanime text-white">
                    <div className="lg:col-span-7">
                        <div>
                            <h1 className="font-bold text-xl md:text-3xl py-3 px-3 mb-3">Nonton {epsData.title}</h1>
                            <IframeVideo 
                                title={epsData.title}
                                id={epsData.id}
                                nextSlug={epsData.next_eps_slug}
                                prevSlug={epsData.prev_eps_slug}
                                streamUrl={epsData.stream_link}
                            />
                        </div>
                        <div className="my-6">
                            <Title>Rekomendasi Anime</Title>
                            <Slider>
                                {
                                    ongoingAnime.animeList.map((data, index) => {
                                        return(
                                            <div className="swiper-slide" key={index}>
                                                <Card
                                                    key={index}
                                                    imgUrl={data.thumb}
                                                    href={`/anime/${data.id}`}
                                                    title={data.title}
                                                    episode={data.episode}
                                                    rating="Baru"
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className="lg:col-span-3 mt-0 lg:mt-16 px-3">
                        <Title>Berita</Title>
                        <div className="bg-bg-kumanime-semi">
                            <Aside>
                                {
                                    newsAnimeData ? (newsAnimeData.slice(0, 5).map((data, index) => {
                                        return (
                                            <AsideCard
                                                key={index}
                                                imgUrl={data.thumbnail}
                                                title={data.title}
                                                href={data.url}
                                                topics={data.topics}
                                                uploaded={data.uploadedAt}
                                            />
                                        )
                                    })) : <p>Loading...</p>
                                }
                            </Aside>
                        </div>
                    </div>
                </div>
                </>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Watch