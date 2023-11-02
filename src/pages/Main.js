import Navbar from "../components/Navbar";
import PopularNews from "./PopularNews";
import Trending from "./Trending";
import Web3ImgDesktop from "../assets/images/image-web-3-desktop.jpg";
import Web3ImgMobile from "../assets/images/image-web-3-mobile.jpg";
import Button from "../components/Button";
import "../styles/index.css";


export default function Main() {
	return (
		<div className="bg-[color:hsl(36,100%,99%)] overflow-y-scroll lg:py-24 lg:px-28 py-8 px-4 w-full text-center h-screen">
			<Navbar />

			{/* Main content */}
			<div className=" mx-auto my-16">
				<div className="grid grid-flow-row-dense grid-cols-1 gap-5 lg:grid-cols-3">

					{/* content */}
					<div className=" col-span-2">
						<img src={Web3ImgDesktop} className="py-0" alt="web3-img" />

						<div className="grid grid-cols-1 items-center text-start leading-8 md:grid-cols-2">
							<h2 className="text-[color:hsl(240,100%,5%)] font-['Inter-ExtraBold']  text-6xl">
								The Bright Future of Web 3.0?
							</h2>
							<div className="px-5  font-['Inter-Regular']">
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
					<div className=" bg-[color:hsl(240,100%,5%)] lg:col-span-1 col-span-2 justify-center">
						<Trending />
					</div>

				</div>
				{/* Popular block */}
				<div className="my-8 relative ">
					<PopularNews />
				</div>
			</div>
		</div>
	);
}
