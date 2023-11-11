import "../styles/index.css";
import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconMenuClose from "../assets/images/icon-menu-close.svg";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import GamingImg from "../assets/images/image-gaming-growth.jpg";
import RetroImg from "../assets/images/image-retro-pcs.jpg";
import topImg from "../assets/images/image-top-laptops.jpg";


export const navLinks = [
	{
		id: "popular",
		title: "Popular",
		url: '#popular',
		data: [
			{
				id: 1,
				headlinenum: "01",
				imgURL: RetroImg,
				headline: "Reviving Retro PCs",
				desc: "What happens when old PCs are given modern upgrades?"
			},
			{
				id: 2,
				headlinenum: "02",
				imgURL: topImg,
				headline: "Top 10 Laptops of 2022",
				desc: "Our best picks for various needs and budgets"
			},
			{
				id: 3,
				headlinenum: "03",
				imgURL: GamingImg,
				headline: "The Growth of Gaming",
				desc: "How the pandemic has sparked fresh opportunities."
			}
		]
	},
	{
		id: "trending",
		title: "Trending",
		url: '#trending',
		data: [
			{
				id: 4,
				name: "Hydrogen VS Electric Cars",
				desc: "Will hydrogen-fueled cars ever catch up to EVs?"
			},
			{
				id: 5,
				name: "The Downsides of AI Artistry",
				desc: "What are the possible adverse effects of on-demand AI image generation?"
			},
			{
				id: 6,
				name: "Is VC Funding Drying Up?",
				desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
			}
		]
	},

];

MobileMenu.propTypes = {
	navOpen: PropTypes.bool,
	setNavOpen: PropTypes.func,
	navigate: PropTypes.func
};

export default function Navbar() {
	const [navToggled, setNavToggled] = useState(false);
	const navigate = useNavigate()
	return (
		<>
			<div className="flex flex-row bg-white top-0 left-0 h-20 items-center z-10 w-full relative">
				<a href="#">
					<img src={Logo} alt="logo" />
				</a>

				<div className="flex w-68 py-2 relative ml-auto align-middle">
					{/* Destop Navigation */}

					<ul className="lg:flex hidden font-['Inter-Regular'] text-[color:hsl(236,13%,42%)] -right-[1.3rem] relative cursor-pointer text-base flex-row items-end">

						<li className="px-5 hover:text-[color:hsl(5,85%,63%)]" onClick={() => navigate('', {
							state: ''
						})}><Link to={''} >
								Home
							</Link>
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
				<MobileMenu navOpen={navToggled} navigate={navigate} setNavOpen={setNavToggled} />
			)}
		</>
	);
}

export function MobileMenu({ navOpen, setNavOpen, navigate }) {
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
					{navLinks.map((link) => {
						return (
							<>
								<li key={link.id} className="hover:text-[color:hsl(5,85%,63%)]" onClick={() => navigate(link.url, {
									state: link.data
								})}>
									<Link to={link.url} >{link.title}</Link>
								</li >
							</>
						);
					})}
				</ul>
			</div >
		</>
	);
}
