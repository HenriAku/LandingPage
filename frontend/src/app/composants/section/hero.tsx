"use client";

export const Hero = () => {
	const handleScroll = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: "smooth" // Animation de défilement fluide
		});
	};

	
	return (
		/* h-screen + w-screen forcent le composant à occuper 100% du viewport */
		<section id="hero" className="relative h-screen w-screen bg-slate-950 overflow-hidden flex flex-col justify-between p-6 sm:p-12">
		
			{/* Vague Haut / Droite */}
			<div 
				aria-hidden="true" 
				className="absolute -right-20 w-[300px] sm:w-[500px] md:w-[650px] sm:h-[450px] bg-gradient-to-tr
						 from-indigo-600 via-blue-600 to-purple-800 rounded-full blur-[80px] sm:blur-[130px] opacity-50 transform rotate-12 pointer-events-none" 
			/>

			{/* Spacer invisible pour équilibrer le flexbox */}
			<div className="hidden sm:block"></div>

			{/* Contenu aligné au centre vertical et horizontal */}
			<div className="relative z-10 flex flex-col gap-6 md:gap-12 my-auto max-w-6xl mx-auto text-center md:text-left">
				<div className="flex flex-col md:flex-row gap-10 items-center justify-center">
					<h1 
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-white transform-gpu rotate-x-6 
								-rotate-y-3 hover:rotate-x-0 hover:rotate-y-0 transition-transform duration-500 ease-out cursor-default text-3d"
                    >
                        Configure ton VS Code comme <br className="hidden sm:inline" /> 
                        un pro et code 2x plus vite !
                    </h1>
					
					<p className="text-4xl sm:text-6xl lg:text-7xl text_bleu font font-bold select-none">
						{"</E>"}
					</p>
				</div>
				<div className="text-center md:text-left">
					<button className="w-2/3 md:w-1/4 rounded-4xl px-6 py-3 bg_bleu duration-300">
						<a
							href="/vscode-survival-kit.zip"
							download="vscode-survival-kit.zip"
						>
							Télécharger
						</a>
					</button>
				</div>
			</div>
			
			<div className="relative z-10 flex flex-col mx-auto border-2 rounded-4xl">
				<img src="/images/fleche-bottom-bleu.png" 
					alt="image de la flèche du bas indiquant de scroll" 
					className="z-10 w-16 h-16 animate-bounce translate-y-3" 
					onClick={handleScroll}/>
			</div>

			{/* Spacer invisible */}
			<div className="hidden sm:block"></div>

			{/* Vague Bas / Gauche */}
			<div 
				aria-hidden="true" 
				className="absolute -bottom-20 -left-20 w-[350px] sm:w-[550px] md:w-[750px] h-[350px] sm:h-[500px] bg-gradient-to-br
						from-blue-900 via-indigo-700 to-slate-900 rounded-full blur-[90px] sm:blur-[140px] opacity-40 transform -rotate-12 pointer-events-none" 
			/>
		</section>
	);
};