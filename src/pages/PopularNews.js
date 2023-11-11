import "../styles/index.css";
import { useLocation } from "react-router-dom";

export default function PopularNews() {
	const location = useLocation();

	return (
		<>
			<div className="grid lg:grid-cols-3 lg:gap-7 gap-10">
				{location.state !== null &&
					location.state.map((data, index) => {
						return (
							<>
								<div className="flex">
									<div>
										<img
											className="lg:w-[150px] lg:h-[170px] w-[150px] h-[170px]"
											src={data.imgURL}
											key={index}
											width={150}
											height={200}
											alt="retro-img"
										/>
									</div>
									<div className="text-left space-x-5 space-y-5 antialiased leading-8">
										<h3
											key={index}
											className="text-4xl text-[color:hsl(233,8%,79%)] ml-5 font-['Inter-Bold']"
										>
											{data.headlinenum}
										</h3>

										<h4
											key={index}
											className="text-lg font-['Inter-Bold'] text-[color:hsl(240,100%,5%)] cursor-pointer hover:text-[color:hsl(5,85%,63%)]"
										>
											{data.headline}
										</h4>

										<p
											key={index}
											className="text-[15px] font-['Inter-Regular'] text-[color:hsl(236,13%,42%)] line-clamp-2 md:line-clamp-2"
										>
											{data.desc}
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
