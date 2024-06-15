// src/components/Navbar.js
"use client";

import Link from "next/link";

const Navbar = () => {
	return (
		<nav className=" border-b text-foreground py-2">
			<div className="max-w-screen-xl mx-auto">
				<div className="flex justify-between items-center">
					<div>
						<Link
							href="/"
							className="font-bold text-slate-800 dark:text-slate-50"
						>
							Portfolio
						</Link>
					</div>
					<nav>
						<ul className="flex gap-3">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
							<li>
								<Link href="/projects">Projects</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
