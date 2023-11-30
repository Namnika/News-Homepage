import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = ({ url, options }, ref, initialvalue) => {
    const [news, setNews] = useState(initialvalue);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (ref.current) {
            (async () => {
                const timeout = (ms) => new Promise((resolve) => { setTimeout(resolve, ms) })
                try {
                    const res = await axios.get(url, options);
                    setNews(res.data.articles);
                } catch (err) {
                    setError(err.response.data);
                } finally {
                    await timeout(7000)
                    setLoading(false);
                }
            })();
        }

        return () => {
            ref.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, ref]);

    return {
        loading,
        news,
        error,
        setNews,
    };
};
