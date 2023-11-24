import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import News from "./News";
import PopularNews from "./PopularNews";
import TrendingNews from "./TrendingNews";
import "../styles/index.css";

export default function MainPage() {
	return (
		<div className="bg-[color:hsl(36,100%,99%)] overflow-y-scroll lg:pt-12 lg:pb-0 lg:px-24 pt-4 pb-8 px-4 w-full text-center h-screen antialiased scroll-smooth">
			<Navbar />
			{/* <NewsContent/> */}
			<div className="mx-auto lg:mt-4 lg:mb-16 my-4">
				<div className="grid grid-flow-row-dense grid-cols-1 lg:gap-5 gap-y-16 lg:grid-cols-3">
					{/* Main News and Trending News */}
					<div className="col-span-2">
						<News />
					</div>
					<div className=" bg-[color:hsl(240,100%,5%)] lg:col-span-1 col-span-2">
						<TrendingNews />
					</div>
				</div>
				{/* Popular News */}
				<div className="lg:my-8 mt-16 mb-20 relative ">
					<PopularNews />
				</div>
			</div>
			<Footer />
		</div>
	);
}
