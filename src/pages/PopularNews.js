import { Skeleton } from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import "../styles/index.css";

PopularNews.propTypes = {
	news: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool
};

export default function PopularNews({ news, loading }) {
	const popularNews = news.sort(() => 0.5 - Math.random()).slice(0, 3);
	// console.log(popularNews);

	return (
		<>
			<div className="grid lg:grid-cols-3 lg:gap-7 gap-10">
				{popularNews.map((i, index) => {
					return (
						<>
							<div key={index} className="flex">
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
									<img
										className=" lg:h-[170px] h-[170px]"
										src={i.urlToImage}
										width={270}
										height={300}
										alt="img"
									/>
								)}

								<div className="text-left space-x-5 space-y-5 antialiased leading-8">
									<h3 className="text-4xl text-[color:hsl(233,8%,79%)] ml-5 font-['Inter-Bold']">
										0{index + 1}
									</h3>

									<h4 className="text-lg font-['Inter-Bold'] text-[color:hsl(240,100%,5%)] cursor-pointer hover:text-[color:hsl(5,85%,63%)]">
										{`${i.title.slice(0, 30)}...`}
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
