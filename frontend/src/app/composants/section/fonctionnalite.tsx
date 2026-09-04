import { Titre } from "../composants/titre";
import { SousTitre } from "../composants/sous-titre";
import { Card } from "../composants/card";

export const Fonctionnalite = () => {
	return (
		<div id="fonctionnalites" className="bg_fonctionalite px-4 py-16">
			<Titre texte="Fonctionnalités"/>
			<SousTitre texte="Les piliers du kit de survie."/>
	
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 max-w-6xl mx-auto my-10 justify-items-center">
				<Card 
					titre="setting.json" 
					description="Formatage automatique à l'enregistrement (Ctrl+S), activation des ligatures de police et nettoyage de l'interface pour coder sans distraction" 
					imageSrc="/images/engrenage.png" 
				/>
				<Card 
					titre="snippets"     
					description="Génère des composants React complets, des Hooks personnalisés et des layouts Tailwind en tapant seulement 2 ou 3 lettres." 
					imageSrc="/images/eclaire.png" 
				/>
				<Card 
					titre="extensions"   
					description="Une sélection des meilleures extensions (Codeium, Tailwind IntelliSense, Prettier, Dracula Theme...) prêtes à installer pour booster ta productivité." 
					imageSrc="/images/puzzle.png" 
				/>
				<Card 
					titre="raccourcis"   
					description="Une carte mémo visuelle regroupant les raccourcis clés pour naviguer, refactoriser et modifier ton code sans jamais toucher la souris." 
					imageSrc="/images/clavier.png" 
				/>
			</div>
		</div>
	);
};
