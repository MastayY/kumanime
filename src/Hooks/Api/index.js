import axios from "axios";

export const getLatestAnime = async () => {
    try {
        const response = await axios.get("https://kumanimeapi.vercel.app/api/home");
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getAnimeNews = async () => {
    try {
        const response = await axios.get("https://consumet-api-pink.vercel.app/news/ann/recent-feeds");
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getAnimeNewsDetail = async (id) => {
    try {
        const response = await axios.get("https://consumet-api-pink.vercel.app/news/ann/info?id=" + id);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getEpisodeDetails = async (slug) => {
    try {
        const response = await axios.get(`https://kumanimeapi.vercel.app/api/episode/${slug}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getAnimeDetails = async (slug) => {
    try {
        const response = await axios.get(`https://kumanimeapi.vercel.app/api/anime/${slug}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const getSearchResult = async (value) => {
    try {
        const response = await axios.get(`https://kumanimeapi.vercel.app/api/search/${value}`);
        return response.data
    } catch (error) {
        return error.message;
    }
}

export const getCompletedAnime = async (page) => {
    try {
        const response = await axios.get(`https://kumanimeapi.vercel.app/api/completed/page/${page}`);
        return response.data
    } catch (error) {
        return error.message;
    }
}

export const getOngoingAnime = async (page) => {
    try {
        const response = await axios.get(`https://kumanimeapi.vercel.app/api/ongoing/page/${page}`);
        return response.data
    } catch (error) {
        return error.message;
    }
}

export const sanitize = (text) => {
    if (text != undefined) {
        return text
        .toString()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    }
};
