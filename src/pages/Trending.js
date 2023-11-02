import "../styles/index.css";

export const TrendingData = [
	{
		id: 1,
		title: "Hydrogen VS Electric Cars",
		desc: "Will hydrogen-fueled cars ever catch up to EVs?"
	},
	{
		id: 2,
		title: "The Downsides of AI Artistry",
		desc: "What are the possible adverse effects of on-demand AI image generation?"
	},
	{
		id: 3,
		title: "Is VC Funding Drying Up?",
		desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
	}
];

export default function Trending() {
	return (
		<div className="px-4 relative antialiased text-start flex flex-col">
			<div className="pt-5">
				<h3 className="text-3xl leading-normal font-['Inter-Bold'] text-[color:hsl(35,77%,62%)]">
					New
				</h3>
			</div>

			<div className="leading-8 divide-y divide-[color:hsl(236,13%,42%)]">
				{TrendingData.map((data, index) => {
					return (
						<>
							<div key={index} className=" justify-items-stretch">
								<h4 className="text-[color:hsl(36,100%,99%)] text-lg font-['Inter-Bold'] cursor-pointer hover:text-[color:hsl(35,77%,62%)]">
									{data.title}
								</h4>
								<p className="text-[color:hsl(233,8%,79%)] text-[15px] font-['Inter-Regular']">
									{data.desc}
								</p>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
}
