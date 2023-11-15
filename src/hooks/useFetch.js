import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url, ref, initialvalue) => {
    const [news, setNews] = useState(initialvalue);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (ref.current) {
            (async () => {
                try {
                    const res = await axios.get(url);
                    setNews(res.data.articles);
                } catch (err) {
                    setError(err.response.data);
                } finally {
                    setLoading(false);
                }
            })();
        }

        return () => {
            ref.current = false;
        };
    }, [url, ref]);

    return { loading, news, error }
};
