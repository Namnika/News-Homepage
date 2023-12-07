import { useRef } from "react";
import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import "../styles/index.css";
import { useFetch } from "../hooks/useFetch";
import { countries } from "../utils/NewsTopics";
import AudioComponent from "../components/AudioComponent";

// fetching top-headlines sort with countries
export default function PopularNews() {
	const isComponentMounted = useRef(true);
	const apiKey = import.meta.env.VITE_API_KEY;
	const voiceId = import.meta.env.VITE_VOICE_ID;
	const voiceApiKey = import.meta.env.VITE_VOICE_API_KEY;
	const audioQualitySettings = {
		stablitity: 0,
		similarity_boost: 0
	};
	const url = "https://newsapi.org/v2/top-headlines";

	// for query (q) parameter
	// const topic = Math.floor(Math.random(topics.map((i) => i)) * topics.length);
	// const to = topics[topic];

	const country = Math.floor(
		Math.random(countries.map((i) => i)) * countries.length
	);
	const co = countries[country];

	const options = {
		params: { country: co },
		headers: {
			"x-api-key": apiKey
		}
	};

	const { news, loading } = useFetch(
		{ url: url, options: options },
		isComponentMounted,
		[]
	);

	const popularNews = news.sort(() => 0.5 - Math.random()).slice(0, 3);

	return (
		<>
			<div className="grid lg:grid-cols-3 lg:gap-7 gap-10">
				{popularNews.map((i, index) => {
					return (
						<>
							<div key={index} className="block">
								{loading ? (
									<>
										<Skeleton.Node
											active
											style={{
												width: "9rem",
												height: "10rem"
											}}
										>
											<DotChartOutlined
												style={{
													fontSize: 0
												}}
											/>
										</Skeleton.Node>
									</>
								) : (
									<>
										<img
											className="object-scale-down lg:h-[170px] h-[170px]"
											src={i.urlToImage}
											width={270}
											height={300}
											alt="img"
										/>{" "}
									</>
								)}

								<div className="text-left space-x-5 space-y-5 antialiased leading-8">
									<h3 className="text-4xl text-[color:hsl(233,8%,79%)] ml-5 font-['Inter-Bold']">
										0{index + 1}
									</h3>
									<AudioComponent
										voiceId={voiceId}
										apiKey={voiceApiKey}
										text={`${i.title}${i.description}`}
										voiceSettings={audioQualitySettings}
									/>

									<h4 className="text-lg font-['Inter-Bold'] text-[color:hsl(240,100%,5%)] cursor-pointer hover:text-[color:hsl(5,85%,63%)]">
										{`${i.title}`}
									</h4>
									<p className="text-[15px] font-['Inter-Regular'] text-[color:hsl(236,13%,42%)] line-clamp-2 md:line-clamp-2">
										{i.description}
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
