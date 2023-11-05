import Navbar from "../components/Navbar";
import PopularNews from "./PopularNews";
import Trending from "./Trending";
import Web3ImgDesktop from "../assets/images/image-web-3-desktop.jpg";
import Web3ImgMobile from "../assets/images/image-web-3-mobile.jpg";
import Button from "../components/Button";
import "../styles/index.css";

export default function Main() {
	return (
		<div className="bg-[color:hsl(36,100%,99%)] overflow-y-scroll lg:py-24 lg:px-28 py-8 px-4 w-full text-center h-screen antialiased scroll-smooth">
			<Navbar />

			{/* Main content */}
			<div className=" mx-auto my-16">
				<div className="grid grid-flow-row-dense grid-cols-1 lg:gap-5 gap-y-16 lg:grid-cols-3">
					{/* content */}
					<div className=" col-span-2">
						<img src={Web3ImgDesktop} className="py-0" alt="web3-img" />

						<div className="grid grid-cols-1 lg:items-center items-start lg:mt-0 mt-8 text-start lg:grid-cols-2">
							<h2 className="text-[color:hsl(240,100%,5%)] font-['Inter-ExtraBold'] leading-[1.1em] text-5xl lg:text-[3.5rem]">
								The Bright Future of Web 3.0?
							</h2>
							<div className="lg:px-5 leading-8 font-['Inter-Regular']">
								<p className="text-[15px]  line-clamp-4 mt-4 text-[color:hsl(236,13%,42%)]">
									We dive into the next evolution of the web that claims to put
									the power of the platforms back into the hands of the people.
									But is it really fulfilling its promise?
								</p>
								<Button>Read More</Button>
							</div>
						</div>
					</div>

					{/* Trending */}
					<div className=" bg-[color:hsl(240,100%,5%)] lg:col-span-1 col-span-2">
						<Trending />
					</div>
				</div>
				{/* Popular block */}
				<div className="lg:my-8 my-16 relative ">
					<PopularNews />
				</div>
			</div>
		</div>
	);
}
