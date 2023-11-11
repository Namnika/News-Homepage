import "../styles/index.css";
import { useLocation } from "react-router-dom";

export default function TrendingNews() {
	const location = useLocation();
	console.log(location.state);

	return (
		<div className="px-4 relative antialiased text-start flex flex-col">
			<div className="pt-5">
				<h3 className="text-4xl leading-normal font-['Inter-Bold'] text-[color:hsl(35,77%,62%)]">
					New
				</h3>
			</div>

			<div className="leading-8 pt-5 divide-y divide-[color:hsl(236,13%,42%)]">
				{location.state !== null &&
					location.state.map((data, index) => {
						return (
							<>
								<div key={index} className="py-5 space-y-2">
									<h4 className="text-[color:hsl(36,100%,99%)] text-lg font-['Inter-Bold'] cursor-pointer hover:text-[color:hsl(35,77%,62%)]">
										{data.name}
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
