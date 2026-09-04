"use client";

import { BtnNavDemo } from "./btn-navbar-demo";

export const NavDemo = () => {

	return (
		<div className="bg_card pt-2 pb-2 mb-5 mt-5 w-2/3 rounded-4xl h-50 md:h-10 items-center justify-center flex flex-col md:flex-row gap-2 md:gap-6 mx-auto">
			<ul className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center font text-xl">
				<BtnNavDemo texte="Dracula" />
				<BtnNavDemo texte="Copilot" />
				<BtnNavDemo texte="Prettier" />
				<BtnNavDemo texte="Tailwind CSS IntelliSense" />
			</ul>
		</div>
	);
};