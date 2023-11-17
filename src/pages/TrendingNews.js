import { useRef } from "react";
import { useFetch } from "../hooks/useFetch";
import { Skeleton, Space, ConfigProvider } from "antd";
import "../styles/index.css";

export default function TrendingNews() {
	const isComponentMounted = useRef(true);
	const apiKey = "3d993edcc0e34e28b84450d9f7c95e36";

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
										<Skeleton active />
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
	);
}
