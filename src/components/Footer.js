export default function Footer() {
	return (
		<>
			<footer className="py-12 lg:py-24">
				<div className="flex flex-col lg:flex-row-reverse w-full border-t-[0.7px] space-y-5 space-x-4 text-center border-[color:hsl(233,8%,79%)]">
					<div className="lg:text-right">social links</div>
					<div className="lg:text-start text-[13px] font-['Inter-Regular'] ml-auto text-[color:hsl(236,13%,42%)]">
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
