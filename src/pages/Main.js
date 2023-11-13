import axios from "axios";
import Navbar from "../components/Navbar";
import PopularNews from "./PopularNews";
import TrendingNews from "./TrendingNews";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "../styles/index.css";

export default function Main() {
	const [news, setNews] = useState([]);
	const [setError] = useState({});
	const baseurl = "https://newsapi.org/v2/everything";
	const apiKey = "3d993edcc0e34e28b84450d9f7c95e36";

	// use useFetch hook
	const fetchData = async (url) => {
		return await axios
			.get(url)
			.then((res) => setNews(res.data.articles))
			.catch((err) => {
				setError(err.response.data);
			});
	};

	useEffect(() => {
		fetchData(`${baseurl}?q=bitcoin&apiKey=${apiKey}`);
	}, []);

	const slicedNews = news.slice(0, 1);

	return (
		<div className="bg-[color:hsl(36,100%,99%)] overflow-y-scroll lg:pt-12 lg:pb-0 lg:px-24 pt-4 pb-8 px-4 w-full text-center h-screen antialiased scroll-smooth">
			<Navbar />

			{/* Main News */}
			<div className=" mx-auto lg:mt-4 lg:mb-16 my-4">
				<div className="grid grid-flow-row-dense grid-cols-1 lg:gap-5 gap-y-16 lg:grid-cols-3">
					{/* content */}
					<div className=" col-span-2">
						{slicedNews.map((i) => {
							return (
								<>
									<img src={i.urlToImage} className="py-0" alt="web3-img" />

									<div className="grid grid-cols-1 lg:items-center items-start lg:mt-0 mt-8 text-start lg:grid-cols-2">
										<h2 className="text-[color:hsl(240,100%,5%)] font-['Inter-ExtraBold'] leading-[1.1em] text-5xl lg:text-[3.3rem]">
											{i.title}
										</h2>
										<div className="lg:px-5 leading-8 font-['Inter-Regular']">
											<p className="text-[15px]  line-clamp-4 mt-4 text-[color:hsl(236,13%,42%)]">
												{i.description.slice(0, 180)} + ...
											</p>
											<Button>Read More</Button>
										</div>
									</div>
								</>
							);
						})}
					</div>

					{/* Trending News*/}
					<div className=" bg-[color:hsl(240,100%,5%)] lg:col-span-1 col-span-2">
						<TrendingNews />
					</div>
				</div>
				{/* Popular News */}
				<div className="lg:my-8 mt-16 mb-20 relative ">
					<PopularNews />
				</div>
			</div>
			<Footer />
		</div>
	);
}
