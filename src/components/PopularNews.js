import "../styles/index.css";
import GamingImg from "../assets/images/image-gaming-growth.jpg";
import RetroImg from "../assets/images/image-retro-pcs.jpg";
import topImg from "../assets/images/image-top-laptops.jpg";

export const PopularData = [
	{
		id: "1",
		headlinenum: "01",
		imgURL: RetroImg,
		headline: "Reviving Retro PCs",
		desc: "What happens when old PCs are given modern upgrades?"
	},
	{
		id: "2",
		headlinenum: "02",
		imgURL: topImg,
		headline: "Top 10 Laptops of 2022",
		desc: "Our best picks for various needs and budgets"
	},
	{
		id: "3",
		headlinenum: "03",
		imgURL: GamingImg,
		headline: "The Growth of Gaming",
		desc: "How the pandemic has sparked fresh opportunities."
	}
];

export default function PopularNews() {
	return (
		<>
			<div className="grid lg:grid-cols-3 gap-7">
				{PopularData.map((data, index) => {
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
								<div className="text-left space-x-5 space-y-5 antialiased">
									<h3
										key={index}
										className="text-4xl text-[color:hsl(233,8%,79%)] ml-5 font-['Inter-Bold']"
									>
										{data.headlinenum}
									</h3>

									<h4
										key={index}
										className="text-lg font-['Inter-Bold'] text-[color:hsl(240,100%,5%)] hover:text-[color:hsl(5,85%,63%)]"
									>
										{data.headline}
									</h4>

									<p
										key={index}
										className="text-base font-['Inter-Regular'] text-[color:hsl(236,13%,42%)] line-clamp-2 md:line-clamp-2 leading-8"
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
