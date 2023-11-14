import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import "../styles/index.css";

export default function TrendingNews() {
	const [trendingNews, setTrendingNews] = useState([]);
	const [error, setError] = useState({});
	const baseurl = "https://newsapi.org/v2/top-headlines";
	const apiKey = "3d993edcc0e34e28b84450d9f7c95e36";

	const fetchData = useCallback(
		async (url) => {
			return await axios
				.get(url)
				.then((res) => setTrendingNews(res.data.articles))
				.catch((err) => {
					setError(err.response.data);
					console.log(error);
				});
		},
		[error]
	);

	const sources = [
		"bbc-news",
		"abc-news",
		"forbes",
		"business-insider",
		"washington-post",
		"the-daily-times",
		"cnn",
		"billboard"
	];

	const source = Math.floor(
		Math.random(sources.map((s) => s)) * sources.length
	);

	const so = sources[source];

	useEffect(() => {
		const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
		try {
			sleep(5000);

			fetchData(`${baseurl}?sources=${so}&apiKey=${apiKey}`);
		} catch (err) {
			setError(err.response.data);
		}
	}, [fetchData, so]);

	const slicedTrendingNews = trendingNews.slice(0, 3);

	return (
		<div className="px-4 relative antialiased text-start flex flex-col">
			<div className="pt-5">
				<h3 className="text-4xl leading-normal font-['Inter-Bold'] text-[color:hsl(35,77%,62%)]">
					New
				</h3>
			</div>

			<div className="leading-8 pt-5 divide-y divide-[color:hsl(236,13%,42%)]">
				{slicedTrendingNews.map((i, index) => {
					return (
						<>
							<div key={index} className="py-5 space-y-2">
								<h4 className="text-[color:hsl(36,100%,99%)] text-lg font-['Inter-Bold'] cursor-pointer hover:text-[color:hsl(35,77%,62%)]">
									{i.title}
								</h4>
								<p className="text-[color:hsl(233,8%,79%)] text-[15px] font-['Inter-Regular']">
									{i.description.slice(0, 160)} + ...
								</p>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
}
