import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (options, ref, initialvalue) => {
	const [news, setNews] = useState(initialvalue);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		if (ref.current) {
			const sleep = (s) =>
				new Promise((resolve) => setTimeout(resolve, s * 1000));
			(async () => {
				try {
					await sleep(10);
					const res = await axios.request(options);
					setNews(res.data.articles);
				} catch (err) {
					setError(err.message);
				} finally {
					await sleep(30);
					setLoading(false);
				}
			})();
		}

		return () => {
			ref.current = false;
		};
	}, [options, ref]);

	return {
		loading,
		news,
		error,
		setNews
	};
};
