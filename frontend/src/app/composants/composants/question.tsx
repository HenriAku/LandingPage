"use client";

import React from "react";

export const Question = ({ question, reponse }: { question: string; reponse: string }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="flex flex-col items-center justify-center mb-5">
			<div className="bg_card p-4 rounded-4xl shadow-md cursor-pointer w-full md:w-1/2 flex flex-row " onClick={() => setIsOpen(!isOpen)}>
				<h3 className="text-lg font">{question}</h3>
				<img src={`${isOpen ? "/images/fleche-top.png" : "/images/fleche-bottom.png"}`} alt="Flèche vers le bas" className="ml-auto w-7 h-7" />
			</div>
			<div className={`w-full md:w-1/2 flex flex-col items-center justify-center ${isOpen ? "block" : "hidden"}`}>
				<div className="w-9/10 p-4 bg_card rounded-b-4xl">
					<p className="text-lg font">{reponse}</p>
				</div>
			</div>
		</div>
	);
};