export default function Footer() {
	return (
		<>
			<footer className="py-12 lg:py-24 border-t-[1px] border-[color:hsl(233,8%,79%)]">
				<div className="flex flex-col lg:flex-row-reverse w-full  space-y-5 lg:space-x-4 text-center ">
					<div className="lg:text-right">social links</div>
					<div className="lg:text-start text-[13px] font-['Inter-Regular'] lg:ml-auto text-[color:hsl(236,13%,42%)]">
						&copy; 2023 by
						<a
							rel="noreferrer"
							href="https://www.namnika-janbandhu.com"
							target="_blank"
							className="hover:text-[color:hsl(240,100%,5%)]"
						>
							{" "}
							Namnika Janbandhu{" "}
						</a>
						&mdash; Made with 💜
					</div>
				</div>
			</footer>
		</>
	);
}

// social link : twitter, github, linkedin
