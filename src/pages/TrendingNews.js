import { useRef } from "react";
import { useFetch } from "../hooks/useFetch";
import { Skeleton, ConfigProvider } from "antd";
import "../styles/index.css";

export default function TrendingNews() {
	const isComponentMounted = useRef(true);
	const apiKey = import.meta.env.VITE_API_KEY;

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

	const { news, loading } = useFetch(
		`https://newsapi.org/v2/top-headlines?sources=${so}&apiKey=${apiKey}`,
		isComponentMounted,
		[]
	);

	const trendingNews = news.slice(0, 3);
	console.log(trendingNews);

	return (
		<div className=" bg-[color:hsl(240,100%,5%)] lg:col-span-1 col-span-2">
			<div className="px-4 relative antialiased text-start flex flex-col">
				<div className="pt-5">
					<h3 className="text-4xl leading-normal font-['Inter-Bold'] text-[color:hsl(35,77%,62%)]">
						New
					</h3>
				</div>

				<div className="leading-8 pt-5 divide-y divide-[color:hsl(236,13%,42%)]">
					{trendingNews.map((i, index) => {
						return (
							<>
								<div key={index} className="py-5 space-y-2">
									{loading ? (
										<>
											<ConfigProvider
												theme={{
													components: {
														Skeleton: {
															color: "rgba(255, 255, 255, 0.1)",
															algorithm: true
														}
													}
												}}
											>
												<Skeleton active />
											</ConfigProvider>
										</>
									) : (
										<>
											<h4 className="text-[color:hsl(36,100%,99%)] text-lg font-['Inter-Bold'] cursor-pointer hover:text-[color:hsl(35,77%,62%)]">
												{i.title}
											</h4>
											<p className="text-[color:hsl(233,8%,79%)] text-[15px] font-['Inter-Regular']">
												{`${i.description.slice(0, 170)}...`}
											</p>
										</>
									)}
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}
