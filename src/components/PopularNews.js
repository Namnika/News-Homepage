import "../styles/index.css"
import GamingImg from '../assets/images/image-gaming-growth.jpg'
import RetroImg from '../assets/images/image-retro-pcs.jpg'
import topImg from '../assets/images/image-top-laptops.jpg'


export const PopularData = [
	{
		id: '1',
		headlinenum: '01',
		imgURL: RetroImg,
		title: 'Reviving Retro PCs',
		desc: 'What happens when old PCs are given modern upgrades?'
	},
	{
		id: '2',
		headlinenum: '02',
		imgURL: topImg,
		title: 'Top 10 Laptops of 2022',
		desc: 'Our best picks for various needs and budgets'
	},
	{
		id: '3',
		headlinenum: '03',
		imgURL: GamingImg,
		title: 'The Growth of Gaming',
		desc: 'How the pandemic has sparked fresh opportunities.'
	}
]

export default function PopularNews() {
	return <div className=''>
		<div className='flex flex-row '>
			<img src={RetroImg} className="mr-7" width={120} alt='retro-img' />
			<div className='flex-col w-56 text-left antialiased'>
				<span className="text-4xl text-[color:hsl(233,8%,79%)] font-['Inter-Bold']">01</span>
				<div className="text-lg font-['Inter-Bold'] text-[color:hsl(240,100%,5%)] hover:text-[color:hsl(5,85%,63%)]">Reviving Retro PCs</div>
				<p className="text-[15px] font-['Inter-Regular'] text-[color:hsl(236,13%,42%)] line-clamp-2">What happens when old PCs are given modern upgrades?</p>
			</div>
		</div>
		<div>

		</div>
	</div>;
}
