import "../styles/index.css";
import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconMenuClose from "../assets/images/icon-menu-close.svg";
import { useState } from "react";
export const navLinks = [
	{
		id: "home",
		title: "Home"
	},
	{
		id: "news",
		title: "News"
	},
	{
		id: "popular",
		title: "Popular"
	},
	{
		id: "trending",
		title: "Trending"
	},
	{
		id: "categories",
		title: "Categories"
	}
];

export default function Navbar() {
	const [navToggled, setNavToggled] = useState(false);
	return (
		<>
			<div className=" flex  flex-row w-full z-0 relative">
				<a href="#">
					<img src={Logo} alt="logo" />
				</a>

				<div className="flex w-68 py-2 relative ml-auto align-middle">
					{/* Destop Navigation */}

					<ul className="lg:flex hidden font-['Inter-Regular'] -right-[1.3rem] relative text-base flex-row items-end">
						{navLinks.map((link, index) => {
							return (
								<>
									<a
										key={index}
										className="px-5 hover:text-[color:hsl(35,77%,62%)]"
									>
										<li>{link.title}</li>
									</a>
								</>
							);
						})}
					</ul>
					{/* Mobile Navigation */}
					<a className="lg:hidden delay-150 cursor-pointer ">
						<img
							src={IconMenu}
							onClick={() => setNavToggled(!navToggled)}
							alt="icon-menu"
						/>
					</a>
				</div>
			</div>
			{/* after toggling an overlay of links */}

			{navToggled ? (
				<>
					<div className="top-0 z-10 left-0 absolute w-full h-screen backdrop-brightness-[0.6]"></div>

					<div className="h-screen absolute z-50 top-0 right-0 w-[65%] bg-slate-50  border-white">
						<a className="absolute  align-middle py-8 px-8 right-0 ">
							<img
								className="w-9 h-10 delay-150 cursor-pointer py-1"
								src={IconMenuClose}
								onClick={() => {
									setNavToggled(!navToggled);
								}}
								alt="icon-menu-close"
							/>
						</a>
						<ul className="flex flex-col absolute inset-y-72 left-14 space-y-6 items-start  font-['Inter-Regular'] text-xl">
							{navLinks.map((link, index) => {
								return (
									<>
										<a
											key={link.id}
											className="hover:text-[color:hsl(35,77%,62%)]"
										>
											<li key={index}>{link.title}</li>
										</a>
									</>
								);
							})}
						</ul>
					</div>
				</>
			) : null}
		</>
	);
}
