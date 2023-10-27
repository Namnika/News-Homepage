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
			<div className="big-block my-16 h-5/6 border-2 border-black">
				<div >
					{/* main news */}
				</div>
				<div>
					{/* Trending block */}
				</div>
				<div>
					{/* Popular block */}
				</div>
			</div>
		</div>
	);
}
