import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url, initialvalue) => {
    const [news, setNews] = useState(initialvalue);
    const [popularNews, setPopularNews] = useState(initialvalue);
    const [trendingNews, setTrendingNews] = useState(initialvalue);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            try {
                const res = await axios.get(url);
                setNews(res.data.articles);
                setPopularNews(res.data.articles);
                setTrendingNews(res.data.articles);
            } catch (err) {
                setError(err.response.data);
            } finally {
                await timeout(5000);
                setLoading(false);
            }
        })();
    }, [url]);

    return {
        loading,
        news,
        error,
        popularNews,
        trendingNews,
        setNews,
        setPopularNews,
        setTrendingNews
    };
};
