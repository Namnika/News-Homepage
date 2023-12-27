import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (options, initialvalue) => {
	const [news, setNews] = useState(initialvalue);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const res = await axios.request(options);
				setNews(res.data.articles);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		})();
	}, [options]);

	return {
		loading,
		news,
		error,
		setNews
	};
};
