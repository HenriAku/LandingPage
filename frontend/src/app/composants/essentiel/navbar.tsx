"use client";

import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex justify-center">
			<nav className="fixed flex top-0 w-1/2 md:w-2/3 bg_navbar p-4 rounded-b-4xl flex-col md:flex-row z-30 shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
			
				<div className="flex">
					<button
						className="lg:hidden text-3xl"
						onClick={() => setOpen(!open)}
					>
						☰
					</button>
				</div>


				<div className={`flex flex-col md:flex-row md:justify-center w-full
					${open ? "block" : "hidden"} lg:block`}>
						<ul className="flex flex-col md:flex-row md:space-x-8 justify-center font text-2xl">
							<li className="hover_bleu"><Link href="#fonctionnalites">Fonctionnalités</Link></li>
							<li className="hover_bleu"><Link href="#extensions">Extensions</Link></li>
							<li className="hover_bleu"><Link href="#faq">FAQ</Link></li>
							<li className="hover_bleu"><Link href="#hero">Télécharger</Link></li>
						</ul>
				</div>
			</nav>
		</div>
	);
};
