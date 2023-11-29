import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import News from "./News";
import PopularNews from "./PopularNews";
import TrendingNews from "./TrendingNews";
import { useFetch } from "../hooks/useFetch";
import { topics, countries, sources } from "../utils/NewsTopics";
import "../styles/index.css";

// fetch all popular and trending data
export default function Main() {
	const apiKey = import.meta.env.VITE_API_KEY;
	// Main News
	const query = Math.floor(Math.random(topics.map((q) => q)) * topics.length);
	const q = topics[query];

	const { news, setNews, loading } = useFetch(
		`https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`,
		[]
	);
	// Popular News
	const country = Math.floor(
		Math.random(countries.map((q) => q)) * countries.length
	);
	const ct = countries[country];

	const { popularNews, setPopularNews } = useFetch(
		`https://newsapi.org/v2/top-headlines?country=${ct}&apiKey=${apiKey}`,
		[]
	);

	// Trending News
	const source = Math.floor(
		Math.random(sources.map((s) => s)) * sources.length
	);
	const so = sources[source];

	const { trendingNews, setTrendingNews } = useFetch(
		`https://newsapi.org/v2/top-headlines?sources=${so}&apiKey=${apiKey}`,
		[]
	);

	return (
		<div className="bg-[color:hsl(36,100%,99%)] overflow-y-scroll lg:pt-12 lg:pb-0 lg:px-24 pt-4 pb-8 px-4 w-full text-center h-screen antialiased scroll-smooth">
			<Navbar
				setNews={setNews}
				setPopularNews={setPopularNews}
				setTrendingNews={setTrendingNews}
			/>
			<div className="mx-auto lg:mt-4 lg:mb-16 my-4">
				<div className="grid grid-flow-row-dense grid-cols-1 lg:gap-5 gap-y-16 lg:grid-cols-3">
					<News news={news} loading={loading} />
					<TrendingNews news={trendingNews} loading={loading} />
				</div>
				<div className="lg:my-8 mt-16 mb-20 relative ">
					<PopularNews news={popularNews} loading={loading} />
				</div>
			</div>
			<Footer />
		</div>
	);
}
