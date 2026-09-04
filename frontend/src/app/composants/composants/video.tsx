"use client";
import { useContainer } from "../../context/contenaire";

export const Video = () => {
	const { video, setvideo } = useContainer();

	return (
		<div className="flex justify-center items-center w-full h-full pt-5 mb-10">
			{video === "Dracula" && (
				<video controls width="600" autoPlay loop muted className="w-2/3 border-4 border-[#515151] rounded-lg shadow-lg p-5 bg-[#000000]/25">
					<source src="/videos/Dracula.mp4" type="video/mp4"  />
				</video>
			)}
			{video === "Copilot" && (
				<video controls width="600" autoPlay loop muted className="w-2/3 border-4 border-[#515151] rounded-lg shadow-lg p-5 bg-[#000000]/25">
					<source src="/videos/copilote.mp4" type="video/mp4"  />
				</video>
			)}
			{video === "Prettier" && (
				<video controls width="600" autoPlay loop muted className="w-2/3 border-4 border-[#515151] rounded-lg shadow-lg p-5 bg-[#000000]/25">
					<source src="/videos/prettier.mp4" type="video/mp4"  />
				</video>
			)}
			{video === "Tailwind CSS IntelliSense" && (
				<video controls width="600" autoPlay loop muted className="w-2/3 border-4 border-[#515151] rounded-lg shadow-lg p-5 bg-[#000000]/25">
					<source src="/videos/Css.mp4" type="video/mp4"  />
				</video>
			)}
		</div>
	);
};
