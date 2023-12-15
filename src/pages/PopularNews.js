import { useRef } from "react";
import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import "../styles/index.css";
import { useFetch } from "../hooks/useFetch";
import { languages } from "../utils/NewsTopics";
import AudioComponent from "../components/AudioComponent";

// fetching top-headlines sort with languages

export default function PopularNews() {
	const isComponentMounted = useRef(true);
	const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;
	const voiceId = import.meta.env.VITE_VOICE_ID;
	const voiceApiKey = import.meta.env.VITE_VOICE_API_KEY;
	const audioQualitySettings = {
		stability: 0,
		similarity_boost: 0
	};

	const language = Math.floor(
		Math.random(languages.map((i) => i)) * languages.length
	);
	const lng = languages[language];

	const options = {
		url: `${import.meta.env.VITE_NEWS_API_BASEURL}/latest_headlines`,
		method: "GET",
		params: { lang: lng },
		headers: {
			"x-api-key": newsApiKey
		}
	};

	const { news, loading } = useFetch(options, isComponentMounted, []);

	const popularNews = news.sort(() => 0.5 - Math.random()).slice(0, 3);

	return (
		<>
			<div className="grid lg:grid-cols-3 lg:gap-7 gap-10">
				{popularNews.map((i, index) => {
					return (
						<>
							<div key={i._id} className="block">
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
											src={i.media}
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
										text={`${i.title}${i.excerpt}`}
										voiceSettings={audioQualitySettings}
									/>

									<h4 className="text-lg font-['Inter-Bold'] text-[color:hsl(240,100%,5%)] cursor-pointer hover:text-[color:hsl(5,85%,63%)]">
										{`${i.title}`}
									</h4>
									<p className="text-[15px] font-['Inter-Regular'] text-[color:hsl(236,13%,42%)]">
										{i.excerpt}
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
