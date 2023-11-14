import "../styles/index.css";
import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconMenuClose from "../assets/images/icon-menu-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

MobileMenu.propTypes = {
	navOpen: PropTypes.bool,
	setNavOpen: PropTypes.func
};

export default function Navbar() {
	const [navToggled, setNavToggled] = useState(false);

	return (
		<>
			<div className="flex flex-row bg-white top-0 left-0 h-20 items-center z-10 w-full relative">
				<a href="#">
					<img src={Logo} alt="logo" />
				</a>

				<div className="flex w-68 py-2 relative ml-auto align-middle">
					{/* Destop Navigation */}

					<ul className="lg:flex hidden font-['Inter-Regular'] text-[color:hsl(236,13%,42%)] -right-[1.3rem] relative cursor-pointer text-base flex-row items-end">
						<li className="px-5 hover:text-[color:hsl(5,85%,63%)]">
							<Link to={"/"}>Home</Link>
						</li>
						<li className="px-5 hover:text-[color:hsl(5,85%,63%)]">
							<Link to={"#news"}>News</Link>
						</li>
						<li className="px-5 hover:text-[color:hsl(5,85%,63%)]">
							<Link to={"#popular"}>Popular</Link>
						</li>
						<li className="px-5 hover:text-[color:hsl(5,85%,63%)]">
							<Link to={"#trending"}>Trending</Link>
						</li>
						<li className="px-5 hover:text-[color:hsl(5,85%,63%)]">
							<Link to={"#categories"}>Categories</Link>
						</li>
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

			{navToggled && (
				<MobileMenu
					navOpen={navToggled}
					setNavOpen={setNavToggled}
				/>
			)}
		</>
	);
}

export function MobileMenu({ navOpen, setNavOpen }) {
	return (
		<>
			<div className="top-0 z-10 left-0 absolute w-full h-screen backdrop-brightness-[0.6]"></div>

			<div className="h-screen absolute z-50 top-0 right-0 w-[65%] bg-slate-50  border-white">
				<a className="absolute  align-middle py-8 px-8 right-0 ">
					<img
						className="w-9 h-10 delay-150 cursor-pointer py-1"
						src={IconMenuClose}
						onClick={() => {
							setNavOpen(!navOpen);
						}}
						alt="icon-menu-close"
					/>
				</a>
				<ul className="flex flex-col absolute inset-y-72 left-14 space-y-6 items-start  font-['Inter-Regular'] text-xl">
					<li className="hover:text-[color:hsl(5,85%,63%)]">
						<Link to={"/"}>Home</Link>
					</li>
					<li className="hover:text-[color:hsl(5,85%,63%)]">
						<Link to={"#news"}>News</Link>
					</li>
					<li className="hover:text-[color:hsl(5,85%,63%)]">
						<Link to={"#popular"}>Popular</Link>
					</li>
					<li className="hover:text-[color:hsl(5,85%,63%)]">
						<Link to={"#trending"}>Trending</Link>
					</li>
					<li className="hover:text-[color:hsl(5,85%,63%)]">
						<Link to={"#categories"}>Categories</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
