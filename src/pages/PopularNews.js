import { useRef } from "react";
import { useFetch } from "../hooks/useFetch";
import "../styles/index.css";

export default function PopularNews() {
	const isComponentMounted = useRef(true);
	const apiKey = "3d993edcc0e34e28b84450d9f7c95e36";

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

	const { news, loading } = useFetch(
		`https://newsapi.org/v2/top-headlines?country=${ct}&apiKey=${apiKey}`,
		isComponentMounted,
		[]
	);

	const popularNews = news.slice(0, 3);

	return (
		<>
			<div className="grid lg:grid-cols-3 lg:gap-7 gap-10">
				{loading ? (
					<div>loading data...</div>
				) : (
					popularNews.map((i, index) => {
						return (
							<>
								<div className="flex">
									<div>
										<img
											className="lg:w-[150px] lg:h-[170px] w-[150px] h-[170px]"
											src={i.urlToImage}
											width={150}
											height={200}
											alt="img"
										/>
									</div>
									<div className="text-left space-x-5 space-y-5 antialiased leading-8">
										<h3 className="text-4xl text-[color:hsl(233,8%,79%)] ml-5 font-['Inter-Bold']">
											0{index + 1}
										</h3>

										<h4 className="text-lg font-['Inter-Bold'] text-[color:hsl(240,100%,5%)] cursor-pointer hover:text-[color:hsl(5,85%,63%)]">
											{`${i.title.slice(0, 25)}...`}
										</h4>

										<p className="text-[15px] font-['Inter-Regular'] text-[color:hsl(236,13%,42%)] line-clamp-2 md:line-clamp-2">
											{i.description}
										</p>
									</div>
								</div>
							</>
						);
					})
				)}
			</div>
		</>
	);
}
