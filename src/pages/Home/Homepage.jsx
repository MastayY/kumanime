import { useEffect, useState } from "react";
import AsideCard from "../../components/elements/AsideCard/AsideCard";
import Card from "../../components/elements/Card/Card";
import Aside from "../../components/fragments/Aside/Aside";
import Hero from "../../components/layouts/Hero/Hero"
import Cards from "../../components/layouts/Cards/Cards";
import { getAnimeNews, getLatestAnime } from "../../Hooks/Api";
import Title from "../../components/elements/Title/Title";
import Slider from "../../components/layouts/Slider/Slider";
import Loading from "../../components/layouts/Loading/Loading";
import { Helmet } from "react-helmet";

const Homepage = () => {

    const [latestAnimeData, setLatestAnimeData] = useState([]);
    const [newsAnimeData, setNewsAnimeData] = useState([]);
    
    useEffect(() => {
        async function latestAnime() {
            try {
                const result = await getLatestAnime();
                setLatestAnimeData(result);
            } catch (error) {
                console.log(error);
            }
        }

        latestAnime();
    }, [])

    useEffect(() => {
        async function newsData() {
            try {
                const result = await getAnimeNews();
                setNewsAnimeData(result);
            } catch (error) {
                console.log(error);
            }
        }

        newsData();
    }, [])

    return (
        <>
            <Helmet>
                <title>Kumanime - Streaming Anime Sub Indo</title>
                <link rel="shortcut icon" type="image/x-icon" href="logo.png" />
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
            </Helmet>
            {(latestAnimeData.status === "success" && newsAnimeData) ? (
                <>
                    <Hero />
                    <div className="main gap-5 px-7 pt-10 grid lg:grid-cols-9 grid-cols-1 bg-bg-kumanime">
                        <div className="lg:col-span-6 lg:mx-5 lg:px-10">
                            <div className="latest mb-5">
                                <div className="flex justify-between items-center">
                                    <Title>Update Terbaru</Title>
                                    <a href="/ongoing/page/1"className="text-white font-semibold transition-all hover:text-kumanime font-poppins text-xs md:text-sm">Lihat Semua {">>"}</a>
                                </div>
                                <Cards>
                                    {
                                        latestAnimeData.home.on_going.map((data, index) => {
                                            return (
                                                <Card
                                                    key={index}
                                                    imgUrl={data.thumb}
                                                    title={data.title}
                                                    href={`/anime/${data.id}`}
                                                    episode={data.episode}
                                                    rating="Baru"
                                                />
                                            )
                                        })
                                    }
                                </Cards>
                            </div>

                            <div>
                                <div className="flex justify-between items-center">
                                    <Title>Anime Selesai</Title>
                                    <a href="/completed/page/1" className="text-white font-semibold transition-all hover:text-kumanime font-poppins text-xs md:text-sm">Lihat Semua {">>"}</a>
                                </div>
                                <Slider>
                                    {
                                        latestAnimeData.home.complete.map((data, index) => {
                                            return(
                                                <div className="swiper-slide" key={index}>
                                                    <Card
                                                        imgUrl={data.thumb}
                                                        title={data.title}
                                                        href={`/anime/${data.id}`}
                                                        episode={data.episode.replace("Episode", " Episode")}
                                                        rating={`☆ ${data.score}`}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                        
                        <div className="lg:col-span-3">
                            <Title>Berita</Title>
                            <div className="bg-bg-kumanime-semi">
                                <Aside>
                                    {
                                        newsAnimeData.slice(0, 7).map((data, index) => {
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
                                        })
                                    }
                                </Aside>
                            </div>
                        </div>

                    </div>
                </>
            ) : <Loading />}
        </>
    )
}

export default Homepage;