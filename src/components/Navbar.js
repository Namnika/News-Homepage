import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconMenuClose from "../assets/images/icon-menu-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Navbar.propTypes = {
	setNews: PropTypes.func
};

MobileMenu.propTypes = {
	navOpen: PropTypes.bool,
	setNavOpen: PropTypes.func,
	setNews: PropTypes.func,
	navLinks: PropTypes.array
};

export default function Navbar({ setNews }) {
	const [navToggled, setNavToggled] = useState(false);

	const navLinks = [
		{
			id: "Home",
			link_name: "Home",
			link_url: "/",
			onClick: () => { }
		},
		{
			id: "News",
			link_name: "News",
			link_url: "#news",
			onClick: () => {
				setNews((news) => [...news, news]);
			}
		},
		{
			id: "Popular",
			link_name: "Popular",
			link_url: "#popular",
			onClick: () => {
				setNews((popularNews) => [...popularNews, popularNews]);
			}
		},
		{
			id: "Trending",
			link_name: "Trending",
			link_url: "#trending",
			onClick: () => {
				setNews((trendingNews) => [...trendingNews, trendingNews]);
			}
		}
	];

	return (
		<>
			<div className="flex flex-row bg-white top-0 left-0 h-20 items-center z-10 w-full relative">
				<a href="#">
					<img src={Logo} alt="logo" />
				</a>

				<div className="flex w-68 py-2 relative ml-auto align-middle">
					{/* Destop Navigation */}

					<ul className="lg:flex hidden font-['Inter-Regular'] text-[color:hsl(236,13%,42%)] -right-[1.3rem] relative cursor-pointer text-base flex-row items-end">
						{navLinks.map((i) => {
							return (
								<li className="px-5 hover:text-[color:hsl(5,85%,63%)]">
									<Link key={i.id} to={i.link_url} onClick={i.onClick}>
										{i.link_name}
									</Link>
								</li>
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

			{navToggled && (
				<MobileMenu
					navOpen={navToggled}
					setNavOpen={setNavToggled}
					navLinks={navLinks}
				/>
			)}
		</>
	);
}

export function MobileMenu({ navOpen, setNavOpen, navLinks }) {
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
					{navLinks.map((i) => {
						return (
							<li className="hover:text-[color:hsl(5,85%,63%)]">
								<Link key={i.id} to={i.link_url} onClick={i.onClick}>
									{i.link_name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
