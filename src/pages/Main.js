// set env variable for apikey using vite
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import PopularNews from "./PopularNews";
import TrendingNews from "./TrendingNews";
import { useRef } from "react";
import { useFetch } from "../hooks/useFetch";
import { Skeleton, Space } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import "../styles/index.css";

export default function Main() {
	const isComponentMounted = useRef(true);
	const apiKey = "3d993edcc0e34e28b84450d9f7c95e36";

	const topics = [
		"bitcoin",
		"apple",
		"trump",
		"google",
		"microsoft",
		"amazon",
		"world",
		"artificial-intelligence",
		"netflix",
		"art"
	];

	const query = Math.floor(Math.random(topics.map((q) => q)) * topics.length);
	const q = topics[query];

	const { news, loading } = useFetch(
		`https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`,
		isComponentMounted,
		[]
	);

	const slicedNews = news.slice(0, 1);

	return (
		<div className="bg-[color:hsl(36,100%,99%)] overflow-y-scroll lg:pt-12 lg:pb-0 lg:px-24 pt-4 pb-8 px-4 w-full text-center h-screen antialiased scroll-smooth">
			<Navbar />

			<div className=" mx-auto lg:mt-4 lg:mb-16 my-4">
				<div className="grid grid-flow-row-dense grid-cols-1 lg:gap-5 gap-y-16 lg:grid-cols-3">
					{/* Main news */}
					<div className=" col-span-2">
						{slicedNews.map((i, index) => {
							return (
								<>
									{loading ? (
										<Skeleton.Node
											active
											style={{
												width: "45rem",
												height: "30rem"
											}}
										>
											<DotChartOutlined
												style={{
													fontSize: 0
												}}
											/>
										</Skeleton.Node>
									) : (
										<img
											src={i.urlToImage}
											key={index}
											className="py-0"
											alt="web3-img"
										/>
									)}

									<div className="grid grid-cols-1 lg:items-center items-start lg:mt-0 mt-8 text-start lg:grid-cols-2">
										{loading ? (
											<>
												<Skeleton
													active
													className="ml-2"
													title={{
														width: "15rem"
													}}
													paragraph={false}
												/>
											</>
										) : (
											<h2
												key={index}
												className="text-[color:hsl(240,100%,5%)] font-['Inter-ExtraBold'] leading-[1.1em] text-5xl lg:text-[3.3rem]"
											>
												{i.title}
											</h2>
										)}
										<div className="lg:px-5 leading-8 font-['Inter-Regular']">
											{loading ? (
												<Space size={20} className="mt-5" wrap>

													<Skeleton
														paragraph={{
															rows: 3,
															width: [250, 250, 160]
														}}
														title={false}
														active
													/>
													<Skeleton.Button
														active={true}
														style={{ width: "8rem", height: "3rem" }}
														shape="default"
														block={false}
													/>
												</Space>
											) : (
												<>
													<p
														key={index}
														className="text-[15px]  line-clamp-4 mt-4 text-[color:hsl(236,13%,42%)]"
													>
														{i.description}
													</p>
													<Button>Read More</Button>
												</>
											)}
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
