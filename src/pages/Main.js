import Navbar from "../components/Navbar";
import PopularNews from "../components/PopularNews";
import Trending from "../components/trending";
import "../styles/index.css";

export default function Main() {
	return (
		<div className="bg-slate-50 lg:overflow-hidden overflow-y-scroll lg:py-24 lg:px-36 py-8 px-8 w-full text-center h-screen">
			{/* Navbar */}

			<Navbar />

			{/* Main content */}
			<div className=" mx-auto my-16">
				<div className="big-block grid h-5/6 lg:grid-cols-2  lg:gap-8 border-2 border-black">

					<div className="bg-amber-200  row-span-2 ">
						{/* main news */}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					</div>

					<div className=" bg-lime-300  row-span-2">
						{/* Trending block */}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					</div>

				</div>
				{/* Popular block */}
				<div className="bg-teal-200 flex lg:flex-row flex-col my-7">
					<div>
						01
					</div>
					<div>
						02
					</div>
					<div>
						03
					</div>
				</div>
			</div>
		</div>
	);
}
