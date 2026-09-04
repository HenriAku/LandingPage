export const Bandeau = () => {
	return (
		<section className="bg_fonctionalite w-full md:h-30 flex items-center justify-center p-5">
			<div className="bg_bleu_bandeau w-11/12 h-full flex items-center font text-xl 
							gap-10 p-10 justify-center rounded-4xl flex-col md:flex-row">
				<div>
					Une sélection basée sur les extensions les <br />
					plus plébiscitées par la communauté Dev Web
				</div>

				<div>
					<span className="text_bleu text-3xl">+10 M </span>
					<br /> Downloads
				</div>

				<div className="hidden md:block border-l border-gray-400 h-16"></div>

				<div>
					<span className="text_bleu text-3xl">100% </span>
					<br /> Gratuit
				</div>
			</div>
		</section>
	);
};
