import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
	return (
		<>
			<footer className="py-12 lg:py-12 border-t-[1px] border-slate-200">
				<div className="flex flex-col lg:flex-row-reverse w-full  space-y-5 lg:space-y-0">
					<div className="text-slate-400 text-center space-x-5 inline-flex lg:ml-auto lg:mr-0 lg:my-auto mx-auto">
						<a
							href="https://x.com/bt_13jjks?s=20"
							className="hover:text-[color:hsl(236,13%,42%)]"
						>
							<FaXTwitter />
						</a>
						<a
							href="https://www.linkedin.com/in/namnika-janbandhu"
							className="hover:text-[color:hsl(236,13%,42%)]"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://github.com/Namnika/News-Homepage"
							className="hover:text-[color:hsl(236,13%,42%)]"
						>
							<FaGithub />
						</a>
					</div>

					<div className="lg:my-auto lg:text-start text-center text-[13px] font-['Inter-Regular'] text-slate-400">
						&copy; 2023 by
						<a
							rel="noreferrer"
							href="https://www.namnika-janbandhu.com"
							target="_blank"
							className="hover:text-[color:hsl(236,13%,42%)]"
						>
							{" "}
							Namnika Janbandhu
						</a>
						. All Rights Reserved.
					</div>
				</div>
			</footer>
		</>
	);
}
