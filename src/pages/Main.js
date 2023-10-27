import Navbar from "../components/Navbar";
import PopularNews from "../components/PopularNews";
import Trending from "../components/trending";
import "../styles/index.css";

export default function Main() {
	return (
		<div className="bg-slate-50 overflow-hidden w-full text-center h-screen">
			<div className="lg:py-24 lg:px-24 py-8 px-8">
				<Navbar />
				{/* <PopularNews />
				<Trending /> */}
			</div>
		</div>
	);
}
