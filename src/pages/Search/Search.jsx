import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearchResult } from "../../Hooks/Api/index.js";
import Card from "../../components/elements/Card/Card.jsx";
import Title from "../../components/elements/Title/Title.jsx";
import Loading from "../../components/layouts/Loading/Loading.jsx";
import { Helmet } from "react-helmet";

const Search = () => {
    const {value} = useParams();

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const searchingResult = async () => {
            const result = await getSearchResult(value);
            setSearchResult(result);
        }

        searchingResult();
    }, [value])

    return(
        <>
            { searchResult.status === "success" ?
                (<main className="px-4 md:px-16 my-5 md:my-14">
                    <Title>Hasil pencarian "{value}"</Title>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-5 px-6">
                    {
                        searchResult.search_results.map((data, index) => {
                            return(
                                <Card
                                    key={index}
                                    imgUrl={data.thumb}
                                    href={`/anime/${data.id}`}
                                    title={data.title}
                                    episode={data.status}
                                />
                            )
                        })
                    }
                    </div>
                </main>) : <Loading />

            }
        </>
    )
}

export default Search;