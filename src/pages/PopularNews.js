import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import "../styles/index.css";

export default function PopularNews() {
	const [popularNews, setPopularNews] = useState([]);
	const [error, setError] = useState({});
	const baseurl = "https://newsapi.org/v2/top-headlines";
	const apiKey = "3d993edcc0e34e28b84450d9f7c95e36";

	const fetchData = useCallback(
		async (url) => {
			return await axios
				.get(url)
				.then((res) => setPopularNews(res.data.articles))
				.catch((err) => {
					setError(err.response.data);
					console.log(error);
				});
		},
		[error]
	);

	const countries = [
		"ae",
		"ar",
		"it",
		"jp",
		"kr",
		"ch",
		"au",
		"cn",
		"co",
		"de",
		"ca",
		"eg",
		"fr",
		"gb",
		"gr",
		"tr",
		"tw",
		"ua",
		"us",
		"ve",
		"za",
		"mx",
		"my",
		"ng",
		"sa",
		"se",
		"sg"
	];

	const country = Math.floor(
		Math.random(countries.map((q) => q)) * countries.length
	);

	const ct = countries[country];

	useEffect(() => {
		const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
		try {
			sleep(5000);

			fetchData(`${baseurl}?country=${ct}&apiKey=${apiKey}`);
		} catch (err) {
			setError(err.response.data);
		}
	}, [fetchData, ct]);

	const slicedPopularNews = popularNews.slice(0, 3);

	return (
		<>
			<div className="grid lg:grid-cols-3 lg:gap-7 gap-10">
				{slicedPopularNews.map((i, index) => {
					return (
						<>
							<div className="flex">
								<div>
									<img
										className="lg:w-[150px] lg:h-[170px] w-[150px] h-[170px]"
										src={i.urlToImage}
										width={150}
										height={200}
										alt="retro-img"
									/>
								</div>
								<div className="text-left space-x-5 space-y-5 antialiased leading-8">
									<h3 className="text-4xl text-[color:hsl(233,8%,79%)] ml-5 font-['Inter-Bold']">
										0{index + 1}
									</h3>

									<h4 className="text-lg font-['Inter-Bold'] text-[color:hsl(240,100%,5%)] cursor-pointer hover:text-[color:hsl(5,85%,63%)]">
										{i.title}
									</h4>

									<p className="text-[15px] font-['Inter-Regular'] text-[color:hsl(236,13%,42%)] line-clamp-2 md:line-clamp-2">
										{i.description.slice(0, 170)} + ...
									</p>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
}
