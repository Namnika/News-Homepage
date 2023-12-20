import { Skeleton, ConfigProvider } from "antd";
import { useFetch } from "../hooks/useFetch";
import { sources } from "../utils/NewsTopics";
import AudioComponent from "../components/AudioComponent";

// fetching latest_headlines sort with countries

export default function TrendingNews() {
	const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;
	const voiceId = import.meta.env.VITE_VOICE_ID;
	const voiceApiKey = import.meta.env.VITE_VOICE_API_KEY;
	const audioQualitySettings = {
		stability: 0,
		similarity_boost: 0
	};

	const source = Math.floor(
		Math.random(sources.map((i) => i)) * sources.length
	);
	const so = sources[source];

	const options = {
		url: `${import.meta.env.VITE_NEWS_API_BASEURL}/latest_headlines`,
		method: "GET",
		params: { sources: so },
		headers: {
			"x-api-key": newsApiKey
		}
	};

	const { news, loading } = useFetch(options, []);

	const trendingNews = news.sort(() => 0.5 - Math.random()).slice(0, 3);

	return (
		<div className=" bg-[color:hsl(240,100%,5%)] lg:col-span-1 col-span-2">
			<div className="px-4 relative antialiased text-start flex flex-col">
				<div className="pt-5">
					<h3 className="text-4xl leading-normal font-['Inter-Bold'] text-[color:hsl(35,77%,62%)]">
						New
					</h3>
				</div>

				<div className="leading-8 pt-5 divide-y divide-[color:hsl(236,13%,42%)]">
					{trendingNews.map((i) => {
						return (
							<>
								<div key={i._id} className="py-5 space-y-2">
									{loading ? (
										<>
											<ConfigProvider
												theme={{
													components: {
														Skeleton: {
															gradientFromColor: "rgba(255, 255, 255, 0.1)",
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
											<AudioComponent
												voiceId={voiceId}
												apiKey={voiceApiKey}
												text={`${i.title}${i.excerpt}`}
												voiceSettings={audioQualitySettings}
											/>

											<h4 className="text-[color:hsl(36,100%,99%)] text-lg font-['Inter-Bold'] cursor-pointer hover:text-[color:hsl(35,77%,62%)]">
												{i.title}
											</h4>
											<p className="text-[color:hsl(233,8%,79%)] text-[15px] font-['Inter-Regular']">
												{`${i.excerpt === null && "No description found" || i.excerpt}`}
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
