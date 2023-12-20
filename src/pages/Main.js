import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import News from "./News";
import PopularNews from "./PopularNews";
import TrendingNews from "./TrendingNews";
import { useFetch } from "../hooks/useFetch";
import { topics } from "../utils/NewsTopics";

// feching new articles
export default function Main() {
	const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;

	const topic = Math.floor(Math.random(topics.map((i) => i)) * topics.length);
	const to = topics[topic];

	const options = {
		url: `${import.meta.env.VITE_NEWS_API_BASEURL}/search`,
		method: "GET",
		params: { q: to, sort_by: "rank" },
		headers: {
			"x-api-key": newsApiKey
		}
	};

	const { news, setNews, loading } = useFetch(options, []);

	return (
		<div className="bg-[color:hsl(36,100%,99%)] overflow-y-scroll lg:pt-12 lg:pb-0 lg:px-14 pt-4 pb-8 px-4 w-full text-center h-screen antialiased scroll-smooth">
			<Navbar setNews={setNews} />
			<div className="mx-auto lg:mt-4 lg:mb-16 my-4">
				<div className="grid grid-flow-row-dense grid-cols-1 lg:gap-5 gap-y-16 lg:grid-cols-3">
					<News news={news} loading={loading} />
					<TrendingNews />
				</div>
				<div className="lg:my-8 mt-16 mb-20 relative ">
					<PopularNews />
				</div>
			</div>
			<Footer />
		</div>
	);
}
