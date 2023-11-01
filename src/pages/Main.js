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
			{/* Navbar */}
			<Navbar />

			{/* Main content */}
			<div className=" mx-auto my-16">
				<div className="big-block grid gap-y-8 lg:grid-cols-3 lg:gap-8 border-2 border-black">
					{/* main news */}

					<div className="relative col-span-2  row-span-2 ">
						<div>
							<img src={Web3ImgDesktop} alt="web3-img" />
						</div>
						<div className="text-start py-5 absolute leading-8 grid lg:grid-cols-2 gap-6">
							<h2 className="text-[color:hsl(240,100%,5%)] font-['Inter-ExtraBold']  text-6xl">
								The Bright Future of Web 3.0?
							</h2>
							<div className="px-5 font-['Inter-Regular']">
								<p className="text-[15px]  line-clamp-4 text-[color:hsl(236,13%,42%)]">
									We dive into the next evolution of the web that claims to put
									the power of the platforms back into the hands of the people.
									But is it really fulfilling its promise?
								</p>
								<Button>Read More</Button>
							</div>
						</div>
					</div>
					{/* Trending block */}
					<div className=" bg-[color:hsl(240,100%,5%)] relative row-span-2">
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
