export const Card = ({ titre, description, imageSrc }: { titre: string; description: string; imageSrc: string }) => {
	return (
		<div className="bg_card rounded-4xl p-6 flex flex-col items-center w-2/3 h-full md:h-85 max-w-xl mb-10
						shadow-[12px_12px_25px_rgba(255,255,255,0.15)]  
						transition-all duration-300 
						hover:scale-102 hover:-translate-y-1
						hover:shadow-[20px_20px_35px_rgba(255,255,255,0.25)]">
			<div className="flex flex-row items-center justify-center gap-3">
				<img src={imageSrc} alt={titre} className="w-10 h-10 object-contain mb-4" />
				<h3 className="text-2xl font font-bold mb-2 text-white">{titre}</h3>
			</div>
			<hr className="w-2/3 border-t border-white p-3" />
			<p className="font text-xl text-white">{description}</p>
		</div>
	);
};
