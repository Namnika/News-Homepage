import Navbar from "../components/Navbar";
import PopularNews from "../components/PopularNews";
import Trending from "../components/trending";
import "../styles/index.css";

export default function Main() {
	return (
		<div className="bg-slate-50 overflow-hidden lg:py-24 lg:px-36 py-8 px-8 w-full text-center h-screen">
			{/* Navbar */}

			<Navbar />

			{/* Main content */}
			<div className="big-block grid grid-cols-3 gap-8 my-16 h-5/6 border-2 border-black">
				<div className="bg-amber-200 row-span-2 col-span-2">
					{/* main news */}
				</div>
				<div className=" bg-lime-300 row-span-2">
					{/* Trending block */}
				</div>
				<div className="bg-teal-200 col-span-3">
					{/* Popular block */}
				</div>
			</div>
		</div>
	);
}
