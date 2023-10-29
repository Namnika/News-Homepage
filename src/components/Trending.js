import "../styles/index.css";

export default function Trending() {
	return (
		<div className=" px-4 relative antialiased text-start flex flex-col">
			<div className="pt-5">
				<h3 className="text-3xl leading-normal font-['Inter-Bold'] text-[color:hsl(35,77%,62%)]">
					New
				</h3>
			</div>

			<div className="  leading-8 divide-y divide-[color:hsl(236,13%,42%)]">
				{/* headline and desc */}
				<div className="py-5">
					<h4 className="text-[color:hsl(36,100%,99%)] text-lg font-['Inter-Bold'] ">
						Hydrogen VS Electric Cars
					</h4>
					<p className="text-[color:hsl(233,8%,79%)] text-[15px]  font-['Inter-Regular']">
						Will hydrogen-fueled cars ever catch up to EVs?
					</p>
				</div>

				<div className="py-5">
					<h4 className="text-[color:hsl(36,100%,99%)] text-lg font-['Inter-Bold'] ">
						The Downsides of AI Artistry
					</h4>
					<p className="text-[color:hsl(233,8%,79%)] text-[15px]  font-['Inter-Regular']">
						What are the possible
						adverse effects of on-demand AI image generation?
					</p>
				</div>
				<div className="py-5">
					<h4 className="text-[color:hsl(36,100%,99%)] text-lg font-['Inter-Bold'] ">
						Is VC Funding Drying Up?
					</h4>
					<p className="text-[color:hsl(233,8%,79%)] text-[15px]  font-['Inter-Regular']">
						Private funding by VC firms is down 50% YOY. We take a look at what that means.
					</p>
				</div>
			</div>
		</div>
	);
}
